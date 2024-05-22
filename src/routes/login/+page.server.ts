import { loginSchema } from '$lib/schema/login.schema.js';
import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export async function load({ cookies }) {
	const cookieValue = cookies.get('MEAL_USER');
	if (cookieValue) return redirect(302, '/weekly');

	const form = await superValidate(zod(loginSchema));
	return { form };
}

export const actions = {
	default: async function ({ request, cookies }) {

		const form = await superValidate(request, zod(loginSchema));
		if (!form.valid) return fail(400, { form });

		const { password, username } = form.data;

		const USER = 'meal_user';
		const PASS = 'meal_password';

		if (username !== USER || password !== PASS) return fail(400, { form });

		cookies.set('MEAL_USER', 'logged_in', { path: '/', httpOnly: true });
		return redirect(302, '/weekly');
	}
};
