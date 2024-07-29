<script>
	import "../app.css";
</script>


<main class="max-w-screen-md m-auto px-10">
    <slot />
</main>

<style lang="postcss">
    :global(body) {
        @apply bg-zinc-900 text-white;
    }
</style>

