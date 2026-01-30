import MealGridListItem from './MealGridListItem';
import classes from './meals-grid-list.module.css';

interface Meal {
  id: number;
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
}

interface MealGridListProps {
  meals: Meal[];
}

export default function MealGridList({ meals }: MealGridListProps) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealGridListItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
