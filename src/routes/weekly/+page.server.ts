import { redirect } from '@sveltejs/kit';

export function load({ cookies }) {
	if (!cookies.get('MEAL_USER')) {
		return redirect(302, '/login');
	}
}


export const ssr = false;
export const csr = true;