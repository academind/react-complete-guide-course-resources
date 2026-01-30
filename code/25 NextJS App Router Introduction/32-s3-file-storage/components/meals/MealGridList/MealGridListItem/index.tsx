import Link from 'next/link';

import { AWS_S3_BUCKET_HOST_NAME } from '@/config';
import ImageWithFallback from '@/components/ImageWithFallback';
import mealFallbackImg from "@/assets/meal-fallback.png";
import classes from './meal-grid-list-item.module.css';

interface MealGridListItemProps {
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
}

export default function MealGridListItem({ title, slug, image, summary, creator }: MealGridListItemProps) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <ImageWithFallback
            src={`https://${AWS_S3_BUCKET_HOST_NAME}/${image}`}
            fallbackSrc={mealFallbackImg.src}
            alt={title}
            fill
          />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}