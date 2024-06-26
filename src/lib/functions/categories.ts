import type { MealsByCategory } from "$lib/types/meal";

export async function getCategories(name:string){
	const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + name);
	const data = await res.json();

	const categories: MealsByCategory = data;

	const meals = categories.meals;
	
	return { meals, name };
}