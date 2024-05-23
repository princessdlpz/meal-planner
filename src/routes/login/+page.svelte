<script lang="ts">
	import { enhance } from '$app/forms';
	import { Label, Input, InputAddon, ButtonGroup } from 'flowbite-svelte';
	import { UserCircleSolid, LockSolid } from 'flowbite-svelte-icons';
	import { superForm } from 'sveltekit-superforms';
	import food from '../../assets/food.jpg';
	import WeekEats_transparent from '../../assets/WeekEats_transparent.png';
	const { data } = $props();
	const { form, constraints } = superForm(data.form);
	
</script>

<div class="container mx-auto px-4 h-full">
	<img src={food} alt="Background" class="absolute top-0 left-0 w-full h-full object-cover brightness-75" />
	<div class="flex content-center items-center justify-center h-full">
		<div class="w-full lg:w-4/12 px-4">
			<div
				class="relative flex flex-col min-w-3 break-words w-full mb-6 shadow-lg border-0 p-6 rounded-2xl background"
			>
				<div class="flex justify-center">
					<img src={WeekEats_transparent} alt="Logo" class="w-80 h-70" />
				</div>
				<form method="POST" use:enhance>
					<div class="relative w-full mb-4">
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
					</div>

					<div class="relative w-full mb-3">
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
					</div>

					<div class="text-center mt-6">
						<button
							type="submit"
							class="text-white bg-[#1F7F19] hover:bg-[#1A6E16]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2"
							>LOGIN</button
						>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>

<style>
	.background {
		background-color: #F4F7F2;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		background-attachment: fixed;
	}
</style>
