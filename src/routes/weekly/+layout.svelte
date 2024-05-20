<script>
	import {
		Sidebar,
		SidebarDropdownItem,
		SidebarDropdownWrapper,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper,
		SidebarBrand
	} from 'flowbite-svelte';

	import {
		SearchOutline,
		ChevronDoubleDownOutline,
		ChevronDoubleUpOutline,
		CalendarWeekSolid
	} from 'flowbite-svelte-icons';

	const { data } = $props();
	const { categories } = data;

	let site = {
		name: 'WeekEats',
		href: '/weekly',
		img: 'src/assets/WeekEats_transparent.png'
	};
</script>

<div class="h-full w-full flex flex-row">
	<nav class="flex-shrink-0 w-[18rem] h-full">
		<Sidebar>
			<SidebarWrapper>
				<SidebarGroup>
					<SidebarBrand {site} />
					<SidebarItem label="Weekly Meal Plan">
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
							<SidebarDropdownItem label={category.strCategory} href={`/category/${category.strCategory}`} />
						{/each}
					</SidebarDropdownWrapper>
				</SidebarGroup>
			</SidebarWrapper>
		</Sidebar>
	</nav>
	<div class="flex-1 h-full w-full">
		<slot />
	</div>
</div>
