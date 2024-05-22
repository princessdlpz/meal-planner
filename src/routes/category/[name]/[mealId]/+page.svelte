<script lang="ts">
	import { goto } from '$app/navigation';
	import { mealState } from '$lib/state/meal.svelte';

	import {
		Card,
		Button,
		Label,
		Modal,
		Radio,
		Select,
		Heading,
		P,
		Img,
		List,
		Li,
		A
	} from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';

	const weekday = [
		{ value: 'monday', name: 'Monday' },
		{ value: 'tuesday', name: 'Tuesday' },
		{ value: 'wednesday', name: 'Wednesday' },
		{ value: 'thursday', name: 'Thursday' },
		{ value: 'friday', name: 'Friday' },
		{ value: 'saturday', name: 'Saturday' },
		{ value: 'sunday', name: 'Sunday' }
	];

	const meal = mealState();

	function setMealPlan() {
		if (!dayOfTheWeek || !mealTime) {
			return;
		}

		meal.updateMeals(dayOfTheWeek, mealTime, {
			idMeal: recipe.idMeal,
			strMeal: recipe.strMeal,
			strMealThumb: recipe.strMealThumb,
			category: recipe.strCategory
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

<div class="recipe-container">
	<Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold" position="justify-center">
		{recipe.strMeal}
	</Heading>
</div>
<Img
	src={recipe.strMealThumb}
	alt={recipe.strMeal}
	size="max-w-full"
	alignment="mx-auto"
	class="recipe-image"
	position="justify-center"
/>
<Button size="xs" on:click={() => (defaultModal = true)}>Add to Weekly Meal Plan</Button><br />
<Modal title="Add to Weekly Meal Plan" bind:open={defaultModal} autoclose={false} outsideclose>
	<Label for="weekday-select">Weekday</Label>
	<Select id="weekday-select" underline class="mt-2" items={weekday} bind:value={dayOfTheWeek} />
	<Label for="meal-time">Time</Label>
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
<br />

<Heading tag="h4"><strong>Category:</strong> {recipe.strCategory}</Heading>
<Heading tag="h4"><strong>Area:</strong> {recipe.strArea}</Heading>
<br />

<div class="grid grid-cols-2 items-center">
	<div class="col-start-1 col-span-3">
		<Card class="text-left inline-flex" size="sm" padding="xl">
			<Heading tag="h3">Ingredients:</Heading>
			<br />
			<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
				{#each Array.from({ length: 20 }, (_, i) => i + 1) as i}
					{#if recipe[`strIngredient${i}` as keyof typeof recipe]}
						<Li>
							{recipe[`strIngredient${i}` as keyof typeof recipe]} - {recipe[`strMeasure${i}` as keyof typeof recipe]}
						</Li>
					{/if}
				{/each}
			</List>
		</Card>
	</div>

	<div class="col-start-4 mr-20 ">
		<Card class="text-left" size="xl" padding="xl">
			<Heading tag="h4" class="mb-4"><strong>Instructions:</strong></Heading>
			<P class="mb-4">{recipe.strInstructions}</P>
		</Card>
	</div>
</div>

<br/>


{#if recipe.strYoutube}
	<Heading tag="h4">Video:</Heading>
	<A href={recipe.strYoutube} target="_blank"
		>Watch on YouTube <ArrowRightOutline class="w-6 h-6 ms-2" /></A
	>
{:else}
	<p>No Youtube Video Available</p>
{/if}


