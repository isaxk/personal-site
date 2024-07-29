<script lang="ts">
	import { fade, fly } from "svelte/transition";

	export let projects: {
		name: string;
		url: string;
		desc: string;
	}[];
	export let github: string;
</script>

<div class="flex flex-col gap-4">
	<div class="grid sm:grid-cols-3 gap-3">
		{#each projects as project, i}
			<a
				href={project.url}
				in:fly|global={{ y: -20, duration: 400, delay: 700 + (i * 100) }}
				class="py-2 px-3 rounded-md bg-zinc-800 hover:bg-zinc-700 transition-all"
			>
				<div class="text-xl font-bold">{project.name}</div>
				<div class="text-sm font-light">{project.desc}</div>
			</a>
		{/each}
	</div>
	<a in:fade={{delay:1100}}
		href="https://github.com/{github}"
		class="block text-center w-full py-2 hover:underline">More projects &gt;</a
	>
</div>
