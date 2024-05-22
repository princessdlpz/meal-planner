import { getCategories } from '$lib/functions/categories.js';

export function load({ params }) {
	const { name } = params;

	return getCategories(name);
}
