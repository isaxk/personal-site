<script lang="ts">
  import { onMount } from "svelte";
  import { cubicInOut, linear } from "svelte/easing";
  import { draw, fade, fly } from "svelte/transition";

  export let myName: string;

  let visible = false;
  onMount(() => (visible = true));
</script>

<div class="flex items-center h-52 mt-28 sm:mt-[30vh] mb-28 sm:mb-10">
  {#key visible}
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
        <ul
          class="text-zinc-300 flex flex-col sm:gap-1 list-disc pl-4"
          in:fade={{ duration: 200, delay: 250 }}
        >
          <li>Hobbyist Developer</li>
          <li>
            Currently working on: <a
              href="https://ytdesk.isaxk.com"
              class="underline font-medium">YT Desk</a
            >
          </li>
          <div class="flex gap-3 mt-4 -ml-4 invert">
            <a href="https://discordapp.com/users/988006561442041886"><img src="/discord.svg" class="w-5 h-5" alt="Discord"/></a>
            <a href="https://github.com/isaxk"><img src="/github.svg" class="w-5 h-5" alt="Github"/></a>
          </div>
        </ul>
      </div>
      <div class="w-32 sm:w-40" in:fade={{ duration: 200, delay: 250 }}>
        <img src="/favicon.png" alt="My cat" class="w-full rounded-full" />
      </div>
    </div>
  {/key}
</div>
