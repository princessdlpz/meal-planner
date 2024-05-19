import type { CategoryRes } from '$lib/types';

export async function load({ fetch }) {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php'); 
  const data = await res.json();

  const categories: CategoryRes = data.categories;


  // let categories = await fetch('www.themealdb.com/api/json/v1/1/categories.php');


  console.log(categories);

  return { categories }; // Return categories within an object for SvelteKit load function
}
