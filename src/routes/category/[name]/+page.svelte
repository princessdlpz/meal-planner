<script lang="ts">
	import { getCategories } from '$lib/functions/categories.js';
	import { page } from '$app/stores';
	import { Heading } from 'flowbite-svelte';

	const { data } = $props();
	const { meals: _meals } = data;

	let site = {
		name: 'WeekEats',
		href: '/weekly',
		img: 'src/assets/WeekEats_logo.png'
	};

	let meals = $state(_meals);
	
	async function _getCategories(name: string) {
		const { meals: _meals } = await getCategories(name);
		meals = _meals;
	}

	$effect(() => {
		_getCategories($page.params.name);
	});
</script>

<Heading tag="h2" class="mb-4">{$page.params.name} Meals </Heading>

<div class="grid grid-cols-4 gap-4">

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
