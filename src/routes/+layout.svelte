<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

{@render children()}

<style lang="postcss">
	:global(body) {
		@apply bg-zinc-900 text-zinc-50;
	}
</style>
