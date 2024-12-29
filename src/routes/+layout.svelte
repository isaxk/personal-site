<script lang="ts">
	import Github from 'svelte-simples/Github.svelte';
	import Discord from 'svelte-simples/Discord.svelte';
	import '../app.css';
	import { fade } from 'svelte/transition';
	let { children, data } = $props();
</script>

<div class="flex w-full justify-center">
	<div class="w-full max-w-screen-md px-4">
		<div class="sticky top-0 h-20">
			{#if data.url !== '/'}
				<header
					class="sticky top-0 flex h-20 items-center bg-zinc-900 drop-shadow"
					transition:fade={{ duration: 200 }}
				>
					<div class="flex flex-grow">
						<a href="/">
							<img src="/profile.jpeg" class="h-10 w-10 rounded-full" alt="" />
						</a>
					</div>
					<div class="flex gap-4">
						<a href="/" class="text-zinc-300 transition-all hover:text-white hover:underline"
							>Home</a
						>
						<a href="/about" class="text-zinc-300 transition-all hover:text-white hover:underline"
							>About</a
						>
						<a href="https://" class="text-zinc-300 transition-all hover:text-white hover:underline"
							><Github size={22} /></a
						>
						<a href="https://" class="text-zinc-300 transition-all hover:text-white hover:underline"
							><Discord size={22} /></a
						>
					</div>
				</header>
			{/if}
		</div>

		{#key data.url}
			<div in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
				{@render children()}
			</div>
		{/key}
	</div>
</div>

<style lang="postcss">
	:global(body) {
		@apply bg-zinc-900 text-zinc-50;
	}
	:global(html) {
		scrollbar-gutter: stable;
		scrollbar-color: #f1f1f1 #000;
	}
</style>
