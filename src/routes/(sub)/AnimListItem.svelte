<script lang="ts">
  import { fly } from "svelte/transition";

  export let i;
</script>

<div in:fly|global={{ y: -20, duration: 400, delay: 200 + i * 100 }}>
  <slot />
</div>
