import { redirect } from '@sveltejs/kit';

export async function POST({ cookies }) {
	cookies.delete('MEAL_USER', { path: '/' });
	return redirect(302, '/login');
}
