<script lang="ts">
  import { onMount } from "svelte";
  import "../app.css";
</script>


<svelte:head>
  <title>Isaac (isaxk)</title>
</svelte:head>

<main class="max-w-screen-sm m-auto px-5">
  <slot />
</main>

<style lang="postcss">
  :global(body) {
    @apply bg-zinc-900 text-white;
  }
</style>
