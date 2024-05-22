<script lang="ts">
	import { enhance } from '$app/forms';
	import { Label, Input, InputAddon, ButtonGroup } from 'flowbite-svelte';
	import { UserCircleSolid, LockSolid } from 'flowbite-svelte-icons';
	import { superForm } from 'sveltekit-superforms';
	const { data } = $props();
	const { form, constraints } = superForm(data.form);
</script>

<div class = "background"> 
<div class="flex justify-center items-center min-h-screen">
	<img src={'src/assets/WeekEats_transparent.png'} alt="Logo" class="w-64 h-64 mb-8" />
	<form method="POST" use:enhance>
		<Label for="username" class="block mb-2">Username</Label>
		<ButtonGroup class="w-full">
			<InputAddon>
				<UserCircleSolid class="w-4 h-4 text-gray-500 dark:text-gray-400" />
			</InputAddon>
			<Input
				id="username"
				placeholder="Username"
				name="username"
				bind:value={$form.username}
				{...$constraints.username}
			/>
		</ButtonGroup>
		<div class="m-4"></div>
		<Label for="password" class="block mb-2">Password</Label>
		<ButtonGroup class="w-full">
			<InputAddon>
				<LockSolid class="w-4 h-4 text-gray-500 dark:text-gray-400" />
			</InputAddon>
			<Input
				id="password"
				placeholder="Password"
				type="password"
				name="password"
				bind:value={$form.password}
				{...$constraints.password}
			/>
		</ButtonGroup>
		<div class="m-4"></div>
	
		<button
			type="submit"
			class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2"
		>Login</button>
	</form>
</div>
</div>


<style>
    .background {
      background-image: url('src/assets/mesh-704.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-attachment: fixed; 
      width: 100%;
      height: 100%;
    }
  

</style>

