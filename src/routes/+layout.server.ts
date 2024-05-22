import type { Category } from '$lib/types';

export async function load({ fetch, cookies }) {
	const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
	const data = await res.json();

	const categories: Category[] = data.categories;

	// let categories = await fetch('www.themealdb.com/api/json/v1/1/categories.php');

    const isLoggedIn = cookies.get('MEAL_USER');

    

	return { categories,isLoggedIn }; // Return categories within an object for SvelteKit load function
}

