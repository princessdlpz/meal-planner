<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Category } from '$lib/types';
	import { navigate } from 'svelte-routing';
	import {
		Sidebar,
		SidebarBrand,
		SidebarDropdownItem,
		SidebarDropdownWrapper,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper
	} from 'flowbite-svelte';
	import {
		ArrowRightToBracketOutline,
		CalendarWeekSolid,
		ChevronDoubleDownOutline,
		ChevronDoubleUpOutline,
		SearchOutline
	} from 'flowbite-svelte-icons';

	import '../app.css';
	import WeekEatsLogo from '../assets/WeekEats_logo.png';

	const { categories }: { categories: Category[] } = $props();

	let site = {
		name: 'WeekEats',
		href: '/weekly',
		img: WeekEatsLogo
	};

	async function logout() {
		await fetch('/api/logout', { method: 'POST' });
		goto('/login');
	}
</script>

<nav class="flex-shrink-0 w-[18rem] h-full">
	<Sidebar>
		<SidebarWrapper>
			<SidebarGroup>
				<SidebarBrand {site} />
				<SidebarItem label="Weekly Meal Plan" href="/weekly">
					<svelte:fragment slot="icon">
						<CalendarWeekSolid
							class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
				<SidebarDropdownWrapper label="Categories">
					<svelte:fragment slot="icon">
						<SearchOutline
							class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
						/>
					</svelte:fragment>
					<svelte:fragment slot="arrowup">
						<ChevronDoubleUpOutline class="w-3 h-3" />
					</svelte:fragment>
					<svelte:fragment slot="arrowdown">
						<ChevronDoubleDownOutline class="w-3 h-3" />
					</svelte:fragment>
					{#each categories as category}
						<SidebarDropdownItem
							label={category.strCategory}
							href={`/category/${category.strCategory}`}
						/>
					{/each}
				</SidebarDropdownWrapper>
			</SidebarGroup>
			<SidebarGroup border>
				<SidebarItem label="Logout" on:click={() => logout()}>
					<svelte:fragment slot="icon">
						<ArrowRightToBracketOutline
							class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
</nav>

<style>
	.background {
		background-color: #eee5c0;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		background-attachment: fixed;
		width: 100%;
		height: 100%;
	}

	@media (max-width: 768px) {
		.flex {
			flex-direction: column;
		}
		.mr-10 {
			margin-right: 0;
		}
		.mb-8 {
			margin-bottom: 2rem;
		}
		.w-64 {
			width: 100%;
		}
		.w-full {
			width: 100%;
		}
		.m-4 {
			margin: 1rem 0;
		}
		.px-5 {
			padding-left: 1.25rem;
			padding-right: 1.25rem;
		}
	}

	@media (max-width: 1024px) {
		.background {
			background-size: contain;
		}
	}
</style>
