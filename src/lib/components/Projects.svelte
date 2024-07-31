<script lang="ts">
	import { fade, fly } from "svelte/transition";

	export let projects: {
		name: string;
		url: string;
		desc: string;
	}[];
	export let github: string;
</script>

<div class="text-2xl font-semibold mb-6" in:fly={{ y: -20, duration: 400, delay: 700}}>My Projects:</div>
<div class="flex flex-col gap-4 mb-10">
	{#each projects as project, i}
		<a
			href={project.url}
			in:fly|global={{ y: -20, duration: 400, delay: 850 + i * 100 }}
			class="py-2 rounded-md hover:underline transition-all"
		>
			<div class="text-xl font-medium">{project.name}</div>
			<div class="text-sm font-light text-zinc-400">{project.desc}</div>
		</a>
	{/each}
	<a
		in:fade={{ delay: 1100 }}
		href="https://github.com/{github}"
		class="block text-left text-zinc-300 w-full py-2 hover:underline"
		>More projects &gt;</a
	>
</div>
