<script>
	import { mealState } from '$lib/state';

	const meals = mealState();
</script>

<div class="grid grid-col-7"></div>

{JSON.stringify(meals.meals, null, 2)}
