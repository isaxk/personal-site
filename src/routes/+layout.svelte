<script>
	import "../app.css";
</script>


<main class="max-w-screen-sm m-auto px-5">
    <slot />
</main>

<style lang="postcss">
    :global(body) {
        @apply bg-zinc-900 text-white;
    }
</style>

