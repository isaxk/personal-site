<script lang="ts">
	import { onMount } from 'svelte';

	let { children } = $props();

	let mounted = $state(false);
	onMount(() => (mounted = true));
</script>

{#key mounted}
	{@render children()}
{/key}
