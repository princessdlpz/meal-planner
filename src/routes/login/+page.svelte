<script lang="ts">
	import { GradientButton } from 'flowbite-svelte';
	import { Label, Input, InputAddon, ButtonGroup } from 'flowbite-svelte';
	import { UserCircleSolid } from 'flowbite-svelte-icons';
</script>

<form method="POST">
	<Label for="username" class="block mb-2">Username</Label>
	<ButtonGroup class="w-full">
		<InputAddon>
			<UserCircleSolid class="w-4 h-4 text-gray-500 dark:text-gray-400" />
		</InputAddon>
		<Input id="username" placeholder="Username" />
	</ButtonGroup>

	<Label for="password" class="block mb-2">Password</Label>
	<ButtonGroup class="w-full">
		<InputAddon>
			<UserCircleSolid class="w-4 h-4 text-gray-500 dark:text-gray-400" />
		</InputAddon>
		<Input id="password" placeholder="Password" type="password" />
	</ButtonGroup>

	<GradientButton color="greenToBlue">Login</GradientButton>
</form>
