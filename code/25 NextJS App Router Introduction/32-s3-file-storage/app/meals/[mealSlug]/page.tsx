import { notFound } from 'next/navigation';

import { getMeal } from '@/lib/meals';
import { AWS_S3_BUCKET_HOST_NAME } from '@/config';
import ImageWithFallback from '@/components/ImageWithFallback';
import mealFallbackImg from "@/assets/meal-fallback.png";
import classes from './page.module.css';

export async function generateMetadata({ params }: { params: Promise<{ mealSlug: string }> }) {
  const { mealSlug } = await params;
  const meal = getMeal(mealSlug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default async function MealDetailsPage({ params }: { params: Promise<{ mealSlug: string }> }) {
  const { mealSlug } = await params;
  const meal = getMeal(mealSlug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, '<br />');

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <ImageWithFallback
            src={`https://${AWS_S3_BUCKET_HOST_NAME}/${meal.image}`}
            fallbackSrc={mealFallbackImg.src}
            alt={meal.title}
            fill
          />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        />
      </main>
    </>
  );
}
