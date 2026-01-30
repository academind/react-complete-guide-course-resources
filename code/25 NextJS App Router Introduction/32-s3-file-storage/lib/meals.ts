// import fs from 'node:fs';
import path from 'node:path';
import { S3 } from '@aws-sdk/client-s3';
import { AWS_S3_BUCKET_NAME } from '@/config';

import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const s3 = new S3({
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const dbFilePath = process.env.SQLITE_DB_PATH ?? path.join(process.cwd(), 'meals.db');
const db = sql(dbFilePath);

export interface Meal {
  id: number;
  slug: string;
  title: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}

export interface MealInput {
  title: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
  image: File;
}

export async function getMeals(): Promise<Meal[]> {
  // Simulate network latency - 5 second delay for testing/development purposes
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return db.prepare('SELECT * FROM meals').all() as Meal[];
}

export function getMeal(slug: string): Meal | undefined {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug) as Meal | undefined;
}

export async function saveMeal(meal: MealInput): Promise<void> {
  const slug = slugify(meal.title, { lower: true });
  const sanitizedInstructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${slug}.${extension}`;

  const bufferedImage = await meal.image.arrayBuffer();

  await s3.putObject({
    Bucket: AWS_S3_BUCKET_NAME,
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: meal.image.type,
  });

  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `
  ).run({
    title: meal.title,
    summary: meal.summary,
    instructions: sanitizedInstructions,
    creator: meal.creator,
    creator_email: meal.creator_email,
    image: fileName,
    slug,
  });
}
