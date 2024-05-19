import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
	const cookieValue = cookies.get('MEAL_USER');

	if (cookieValue) {
		return redirect(302, '/weekly');
	} else {
		return redirect(302, '/login');
	}
}
