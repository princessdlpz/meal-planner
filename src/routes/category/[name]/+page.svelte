<script lang="ts">
	const { data } = $props();
	console.log(data);

	const { meals, name} = data;
</script>

{#each meals as Meal}
	<a href={`/category/${name}/${Meal.idMeal}`}>
		<div>{Meal.strMeal}</div>
	</a>
{/each}

//create ui for displaying meals 
