'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

import { saveMeal } from './meals';

function isInvalidText(text: string | null | undefined): boolean {
  return !text || text.trim() === '';
}

interface ShareMealState {
  message: string | null;
}

export async function shareMeal(
  prevState: ShareMealState,
  formData: FormData
): Promise<ShareMealState> {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  if (
    isInvalidText(meal.title as string) ||
    isInvalidText(meal.summary as string) ||
    isInvalidText(meal.instructions as string) ||
    isInvalidText(meal.creator as string) ||
    isInvalidText(meal.creator_email as string) ||
    !(meal.creator_email as string).includes('@') ||
    !meal.image ||
    (meal.image as File).size === 0
  ) {
    return {
      message: 'Invalid input.',
    };
  }

  await saveMeal({
    title: meal.title as string,
    summary: meal.summary as string,
    instructions: meal.instructions as string,
    creator: meal.creator as string,
    creator_email: meal.creator_email as string,
    image: meal.image as File,
  });
  
  revalidatePath('/meals');
  redirect('/meals');
}
