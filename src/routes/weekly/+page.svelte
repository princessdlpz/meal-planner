<script lang="ts">
	import type { SelectedMeal } from '$lib/types/weeklymeals';
	import { mealState } from '$lib/state';
	import { DarkMode } from 'flowbite-svelte';
	const meals = mealState();

	function getMeal(day: string, mealTime: string): SelectedMeal {
		return meals.meals[day.toLowerCase() as never][mealTime];
	}
</script>

<div class="grid grid-col-7">
	<div class="flex items-center ml-auto">
		<DarkMode class="inline-block dark:hover:text-white hover:text-gray-900" />
	</div>

	<div class="grid grid-cols-7 gap-4">
		{#each ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as day}
			<div class="p-4 bg-gray-100 rounded shadow">
				<h2 class="text-lg font-semibold mb-2">{day}</h2>
				<div class="space-y-4">
					<div class="bg-white rounded shadow">
						<h3 class="text-md font-semibold p-2 bg-gray-200">Breakfast</h3>
						<a
							href={`category/${getMeal(day, 'Breakfast')?.category}/${getMeal(day, 'Breakfast')?.idMeal}`}
						>
							{getMeal(day, 'Breakfast')?.strMeal}
						</a>
					</div>
					<div class="bg-white rounded shadow">
						<h3 class="text-md font-semibold p-2 bg-gray-200">Lunch</h3>
						<a
							href={`category/${getMeal(day, 'Lunch')?.category}/${getMeal(day, 'Lunch')?.idMeal}`}
						>
							{getMeal(day, 'Lunch')?.strMeal}
						</a>
					</div>
					<div class="bg-white rounded shadow">
						<h3 class="text-md font-semibold p-2 bg-gray-200">Dinner</h3>
						<a
							href={`category/${getMeal(day, 'Dinner')?.category}/${getMeal(day, 'Dinner')?.idMeal}`}
						>
							{getMeal(day, 'Dinner')?.strMeal}
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
