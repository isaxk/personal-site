<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import Title from "../Title.svelte";
  import AnimListItem from "../AnimListItem.svelte";
  import AnimList from "../AnimList.svelte";

  let projects = [
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
  ];
  let github = "isaxk";
</script>

<Title>Project</Title>
<AnimList>
  {#each projects as project, i}
    <AnimListItem {i}>
      <a
        href={project.url}
        class="py-2 rounded-md hover:underline transition-all"
      >
        <div class="text-xl font-medium">{project.name}</div>
        <div class="text-sm font-light text-zinc-400">{project.desc}</div>
      </a>
    </AnimListItem>
  {/each}
  <a
    in:fade={{ delay: 500 }}
    href="https://github.com/{github}"
    class="block text-left text-zinc-300 w-full py-2 hover:underline"
    >More projects &gt;</a
  >
</AnimList>
