<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  let visible = false;
  onMount(() => (visible = true));
</script>

<Header myName="Isaac" />

{#key visible}
  <div class="flex gap-5" in:fade={{duration: 250, delay: 300 }}>
    <a href="/projects" class="hover:underline">Project Showcase</a>
    <a href="/contact" class="hover:underline">Contact</a>
    <a href="https://github.com/isaxk" class="hover:underline">GitHub</a>
  </div>
{/key}

<!-- <Projects
		projects={[
			{
				name: "YT Desk",
				url: "https://ytdesk.isaxk.com",
				desc: "Youtube and YT Music supercharged",
			},
			{
				name: "Quick Flags",
				url: "https://flags.isaxk.com",
				desc: "Fast paced flag knowledge game",
			},
			{
				name: "Flasha",
				url: "https://flasha.isaxk.com",
				desc: "Stuningly simple flashcards",
			},
		]}
		github="isaxk"
	/> -->
