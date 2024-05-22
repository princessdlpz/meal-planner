<script lang="ts">
	import { getCategories } from '$lib/functions/categories.js';
	import { page } from '$app/stores';

	const { data } = $props();
	const { meals: _meals } = data;

	let meals = $state(_meals);

	async function _getCategories(name: string) {
		const { meals: _meals } = await getCategories(name);
		meals = _meals;
	}

	$effect(() => {
		_getCategories($page.params.name);
	});
</script>

<div class="grid grid-cols-4 gap-4">
	<div class="col-span-4">
		<input
			type="text"
			placeholder="Search meals..."
			class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
		/>
	</div>

	{#each meals as Meal}
		<a
			href={`/category/${$page.params.name}/${Meal.idMeal}`}
			class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
		>
			<img
				class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
				src={Meal.strMealThumb}
				alt=""
			/>
			<div class="flex flex-col justify-between p-4 leading-normal">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{Meal.strMeal}
				</h5>
			</div>
		</a>
	{/each}
</div>
