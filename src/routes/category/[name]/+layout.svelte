<script>
	import Sidebar from '../../../components/Sidebar.svelte';

	const { data } = $props();
	const { categories } = data;
</script>

<div class="h-full w-full flex flex-row">
	<Sidebar {categories} />
	<div class="flex-1 h-full w-full">
		<slot />
	</div>
</div>
