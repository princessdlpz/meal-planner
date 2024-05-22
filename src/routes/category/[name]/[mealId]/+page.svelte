<script lang="ts">
	import { goto } from '$app/navigation';
	import { mealState } from '$lib/state/meal.svelte';
	import { redirect } from '@sveltejs/kit';
	import { Button, Label, Modal, Radio, Select } from 'flowbite-svelte';


	const weekday = [
		{ value: 'monday', name: 'Monday' },
		{ value: 'tuesday', name: 'Tuesday' },
		{ value: 'wednesday', name: 'Wednesday' },
		{ value: 'thursday', name: 'Thursday' },
		{ value: 'friday', name: 'Friday' },
		{ value: 'saturday', name: 'Saturday' },
		{ value: 'sunday', name: 'Sunday' }
	];

  const meal = mealState()

	function setMealPlan() {
		if (!dayOfTheWeek || !mealTime) {
			return;
		}

    
		meal.updateMeals(dayOfTheWeek, mealTime, {
			idMeal: recipe.idMeal,
			strMeal: recipe.strMeal,
			strMealThumb: recipe.strMealThumb,
			category: recipe.strCategory,

      		});
    defaultModal = false;

     goto('/weekly');
    
	}

	const { data } = $props();
	const { recipe } = data;


	let defaultModal = $state(false);
	let dayOfTheWeek = $state<string | undefined>();
	let mealTime = $state<string | undefined>();
 
</script>

<div>
	<img src={recipe.strMealThumb} alt={recipe.strMeal} />
	<h1>{recipe.strMeal}</h1>
	<p><strong>Category:</strong> {recipe.strCategory}</p>
	<p><strong>Area:</strong> {recipe.strArea}</p>
	<p><strong>Instructions:</strong></p>
	<p>{recipe.strInstructions}</p>
	<p><strong>Ingredients:</strong></p>
	<ul>
		{#each Array.from({ length: 20 }, (_, i) => i + 1) as i}
			{#if recipe[`strIngredient${i}` as never]}
				<li>{recipe[`strIngredient${i}` as never]} - {recipe[`strMeasure${i}` as never]}</li>
			{/if}
		{/each}
	</ul>
	{#if recipe.strYoutube}
		<p><strong>Video:</strong> <a href={recipe.strYoutube} target="_blank">Watch on YouTube</a></p>
	{/if}

	<Button on:click={() => (defaultModal = true)}>Default modal</Button>
	<Modal title="Add to Weekly Meal Plan" bind:open={defaultModal} autoclose={false} outsideclose>
		<Label for="recipe-name">Weekday</Label>
		<Select
			id="select-underline"
			underline
			class="mt-2"
			items={weekday}
			bind:value={dayOfTheWeek}
		/>
		<Label for="recipe-name">Time</Label>
		<ul
			class="w-48 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600"
		>
			<li><Radio class="p-3" bind:group={mealTime} value="Breakfast">Breakfast</Radio></li>
			<li><Radio class="p-3" bind:group={mealTime} value="Lunch">Lunch</Radio></li>
			<li><Radio class="p-3" bind:group={mealTime} value="Dinner">Dinner</Radio></li>
		</ul>

		<svelte:fragment slot="footer">
			<Button on:click={setMealPlan}>Select</Button>
			<Button color="alternative" on:click={() => (defaultModal = false)}>Close</Button>
		</svelte:fragment>
	</Modal>
</div>
