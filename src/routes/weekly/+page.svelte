<script lang="ts">
	import type { SelectedMeal } from '$lib/types/weeklymeals';
	import { mealState } from '$lib/state';
	import { Img, A, Heading } from 'flowbite-svelte';
	const meals = mealState();

	function getMeal(day: string, mealTime: string): SelectedMeal {
		return meals.meals[day.toLowerCase() as never][mealTime];
	}
</script>

<div class="grid grid-col-7">
	<!-- <div class="flex items-center ml-auto">
		<DarkMode class="inline-block dark:hover:text-white hover:text-gray-900" />
	</div> -->

	<div class="grid grid-cols-7 gap-4 p-8">
		{#each ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as day}
			<div class="p-4 bg-gray-100 rounded shadow">
				<Heading tag="h5" class="mb-4">{day}</Heading>
				<div class="space-y-4">
					<div class="bg-white rounded shadow">
						<h3 class="text-md font-semibold p-2 bg-gray-200">Breakfast</h3>

						<Img src={getMeal(day, 'Breakfast')?.strMealThumb}></Img>
						<A
							href={`category/${getMeal(day, 'Breakfast')?.category}/${getMeal(day, 'Breakfast')?.idMeal}`}
							color="black"
							aClass="items-center font-medium hover:underline"
						>
							{getMeal(day, 'Breakfast')?.strMeal}
						</A>
					</div>
					<div class="bg-white rounded shadow">
						<h3 class="text-md font-semibold p-2 bg-gray-200">Lunch</h3>

						<Img src={getMeal(day, 'Lunch')?.strMealThumb}></Img>
						<A
							href={`category/${getMeal(day, 'Lunch')?.category}/${getMeal(day, 'Lunch')?.idMeal}`}
							color="black"
							aClass="items-center font-medium hover:underline"
						>
							{getMeal(day, 'Lunch')?.strMeal}
						</A>
					</div>
					<div class="bg-white rounded shadow">
						<h3 class="text-md font-semibold p-2 bg-gray-200">Dinner</h3>
						<Img src={getMeal(day, 'Dinner')?.strMealThumb}></Img>
						<A
							href={`category/${getMeal(day, 'Dinner')?.category}/${getMeal(day, 'Dinner')?.idMeal}`}
							color="black"
							aClass="items-center font-medium hover:underline"
						>
							{getMeal(day, 'Dinner')?.strMeal}
						</A>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
