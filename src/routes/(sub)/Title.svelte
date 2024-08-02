<script>

  import { fly } from "svelte/transition";

</script>
<div class="text-3xl font-semibold mb-6" in:fly={{ y: -20, duration: 400 }}>
  <slot/>
</div>
