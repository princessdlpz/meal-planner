<script lang="ts">
	import { goto } from '$app/navigation';
	import '../app.css';
	import Sidebar from './../components/Sidebar.svelte';

	const { data } = $props();
	const { categories, isLoggedIn } = data;

	let site = {
		name: 'WeekEats',
		href: '/weekly',
		img: 'src/assets/WeekEats_logo.png'
	};

	function logout() {
		fetch('/api/logout', { method: 'POST' });

		goto('/login');
	}
</script>

<slot></slot>

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
