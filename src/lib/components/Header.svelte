<script lang="ts">
  import { onMount } from "svelte";
  import { cubicInOut, linear } from "svelte/easing";
  import { draw, fade, fly } from "svelte/transition";

  export let myName: string;

  let visible = false;
  onMount(() => (visible = true));
</script>

<div class="flex items-center h-52 mt-28 sm:mt-[30vh] mb-28 sm:mb-10">
  {#if visible}
    <div class="flex flex-col-reverse sm:flex-row w-full sm:items-center gap-5">
      <div class="flex flex-col flex-grow gap-3">
        <div
          class="text-5xl font-light flex gap-3"
          in:fly={{ y: -20, duration: 200 }}
        >
          I'm
          <div class="font-medium flex gap-[1px]">
            {#each myName as char, i}
              <span
                class="font-semibold"
                in:fly|global={{
                  y: -20,
                  duration: 750,
                  delay: 75 * i,
                }}>{char}</span
              >
            {/each}
          </div>
        </div>
        <div
          class="text-zinc-300 flex flex-col sm:gap-1"
          in:fade={{ duration: 200, delay: 250 }}
        >
          and I like making things for the web*
          <div class="text-xs text-zinc-400 text-light">
            *(and sometimes desktop)
          </div>
        </div>
      </div>
      <div class="w-32 sm:w-40" in:fade={{ duration: 200, delay: 250 }}>
        <img src="/favicon.png" alt="My cat" class="w-full rounded-full" />
      </div>
    </div>
  {/if}
</div>
