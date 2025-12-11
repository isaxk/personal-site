<script lang="ts">
	import './layout.css';
	import profile from '$lib/assets/profile.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={profile} />
</svelte:head>

<div class="max-w-screen-sm mx-auto">
	{@render children()}
</div>
