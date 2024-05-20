<script lang="ts">
	import { enhance } from '$app/forms';
	import { GradientButton } from 'flowbite-svelte';
	import { Label, Input, InputAddon, ButtonGroup } from 'flowbite-svelte';
	import { UserCircleSolid, LockSolid } from 'flowbite-svelte-icons';
	import { superForm } from 'sveltekit-superforms';
	const { data } = $props();
	const { form, constraints } = superForm(data.form);
</script>


<div class="flex justify-center items-center min-h-screen">
  <img src={'src/assets/WeekEats_transparent.png'} alt="Logo" class="w-24 h-24 mb-4" />
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
    <GradientButton color="green" type="submit" position>Login</GradientButton>
  </form>
</div>
