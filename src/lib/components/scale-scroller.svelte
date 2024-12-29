<script lang="ts">
	import { innerHeight, scrollY } from 'svelte/reactivity/window';

	let { children } = $props();

	let elm: HTMLDivElement;

	let y = $derived(scrollY.current ?? 0);
	let opacity = $state(0.75);
	let scale = $state(0.75);

	function clamp(number: number, min: number, max: number) {
		return Math.max(min, Math.min(number, max));
	}

	$effect(() => {
		console.log(elm.offsetTop);
		opacity = clamp(Math.abs(y / (elm.offsetTop - (innerHeight.current ?? 0) / 2) + 0.5), 0.75, 1);
		scale = clamp(Math.abs(y / (elm.offsetTop - (innerHeight.current ?? 0) / 2) + 0.5), 0.99, 1);
		console.log(opacity);
	});
</script>

<div
	style="opacity: {opacity}; transform: scale(1);"
	class="flex w-full justify-center transition-all duration-75"
	bind:this={elm}
>
	{@render children()}
</div>
