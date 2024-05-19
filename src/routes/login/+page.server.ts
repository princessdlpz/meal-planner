import { loginSchema } from '$lib/schema/login.schema.js';
import { redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export async function load({ cookies }) {
	const cookieValue = cookies.get('MEAL_USER');
	if (cookieValue) return redirect(302, '/weekly');

	const form = await superValidate(zod(loginSchema));
	return { form };
}

export const actions = {
	default: async function () {}
};
