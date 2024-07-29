<script lang="ts">
	import { onMount } from "svelte";
	import { cubicInOut, linear } from "svelte/easing";
	import { draw, fade, fly } from "svelte/transition";

	export let myName: string;
</script>

<div class="flex items-center h-96">
	<div class="flex w-full items-center">
		<div class="flex flex-col flex-grow gap-3">
			<div in:fly={{ y: -20, duration: 400 }} class="text-xl">
				Hi, I'm
				<div class="text-5xl font-medium flex gap-[1px]">
					{#each myName as char, i}
						<span
							class="font-semibold"
							in:fly|global={{
								y: -20,
								duration: 1000,
								delay: 300 + 100 * i,
							}}>{char}</span
						>
					{/each}
				</div>
			</div>
			<div class="text-gray-300 flex flex-col sm:flex-row sm:gap-1" in:fade={{ duration: 300, delay: 600 }}>
				<div>@isaxk - </div>Casual Web Dev
			</div>
		</div>
		<div class="w-32 sm:w-40">
			<img
				src="/favicon.png"
				alt="My cat"
				class="w-full rounded-full"
				in:fade={{ duration: 300, delay: 800 }}
			/>
		</div>
	</div>
</div>
