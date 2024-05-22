import type { MealRecipes, Recipe } from '$lib/types/recipe.js';

export async function load({ params, fetch }) {
	const { mealId } = params;

	const res = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + mealId);
	const data = await res.json() as MealRecipes;

	const recipe = data.meals[0];
    


	return { mealId, recipe };
}