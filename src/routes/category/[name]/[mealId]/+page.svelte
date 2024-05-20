<script lang="ts">
	import { Button, Modal, Label, Input, Checkbox, Dropdown, DropdownItem, Radio } from 'flowbite-svelte';
    import { ChevronDownOutline } from 'flowbite-svelte-icons';
	
	const { data } = $props();
	const {recipe } = data;

	const handleClick = (e) => {
		e.preventDefault();
		alert('Clicked on: ' + e.target);
	};

    let defaultModal = $state(false);
</script>

<div>{recipe.strMeal}</div>
<img src={recipe.strMealThumb} alt="Meal Thumbnail" />
<div>{recipe.strCategory}</div>
<div>{recipe.strInstructions}</div>
<div>{recipe.strArea}</div>

<Button on:click={() => (defaultModal = true)}>Default modal</Button>
<Modal title="Add Recipe to Weekly Meal Plan" bind:open={defaultModal} autoclose>
    <Label for="recipe-name">Weekday</Label>
    <Button> Select Weekday <ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" /></Button>
    <Dropdown>
        <DropdownItem on:click={handleClick}>Monday</DropdownItem>
        <DropdownItem on:click={handleClick}>Tuesday</DropdownItem>
        <DropdownItem on:click={handleClick}>Wednesday</DropdownItem>
        <DropdownItem on:click={handleClick}>Thursday</DropdownItem>
        <DropdownItem on:click={handleClick}>Friday</DropdownItem>
        <DropdownItem on:click={handleClick}>Saturday</DropdownItem>
        <DropdownItem on:click={handleClick}>Sunday</DropdownItem>
    </Dropdown>
    <Label for="recipe-name">Time</Label>
    <ul class="w-48 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600">
        <li><Radio class="p-3"  value="Breakfast">Breakfast</Radio></li>
        <li><Radio class="p-3"  value="Lunch">Lunch</Radio></li>
        <li><Radio class="p-3"  value="Dinner">Dinner</Radio></li>
        
      </ul>

  <svelte:fragment slot="footer">
    <Button on:click={() => alert('Handle "success"')}>I accept</Button>
    <Button color="alternative">Decline</Button>
  </svelte:fragment>
</Modal>

//create ui for displaying recipe details
