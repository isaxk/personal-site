<script lang="ts">
	import { resolve } from '$app/paths';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="sticky top-0 h-16 flex items-center">
	<a href={resolve('/')} class="underline block">Home</a>
</div>
<div class="py-5 border-b dark:border-stone-700 border-stone-400">
	<div class="text-4xl font-semibold py-1">{data.meta.title}</div>
	<div class="flex gap-2">
		<div class="flex items-center gap-2">
			<img src="/profile.png" class="w-5 h-5 object-cover rounded-full" alt="Profile" />
			<div>Isaac</div>
		</div>
		<div>•</div>
		<div>{data.meta.date}</div>
	</div>
</div>
<div class="prose dark:prose-invert py-5">
	<data.content />
</div>
