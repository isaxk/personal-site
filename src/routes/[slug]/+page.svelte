<script lang="ts">
	import { ArrowLeft } from 'lucide-svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title} - isaxk.com</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="flex w-full justify-center pt-20">
	<article class="w-full max-w-screen-sm">
		<a href="/" class="flex items-center gap-1">
			<ArrowLeft size={20} /> Back
		</a>
		<div class="h-5"></div>
		<div class="border-b border-zinc-700 pb-3">
			<div>
				<div class="text-4xl font-semibold">{data.meta.title}</div>
				<p class="text-zinc-300">Published at {data.meta.date}</p>
			</div>

			<div class="flex gap-1 text-xs font-light">
				{#each data.meta.categories as category}
					<span class="surface-4">&num;{category}</span>
				{/each}
			</div>

			<div class="flex items-center gap-1 pt-2">
				<img src="profile.jpeg" class="h-6 w-6 rounded-full" alt="" />
				Isaac <span class="font-light text-zinc-300">(@isaxk)</span>
			</div>
		</div>

		<div class="prose prose-invert py-10">
			<data.content />
		</div>
	</article>
</div>
