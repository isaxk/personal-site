<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import Title from "../Title.svelte";
  import AnimListItem from "../AnimListItem.svelte";
  import AnimList from "../AnimList.svelte";
  import YTDeskThum from "../../../assets/ytdesk.png";
  import FlagsThum from "../../../assets/quickflags.png";
  import FlashaThum from "../../../assets/flasha.png";

  let projects = [
    {
      name: "YT Desk",
      url: "https://ytdesk.isaxk.com",
      img: YTDeskThum,
      desc: "Youtube and YT Music supercharged",
    },
    {
      name: "Quick Flags",
      url: "https://flags.isaxk.com",
      img: FlagsThum,
      desc: "Fast paced flag knowledge game",
    },
    {
      name: "Flasha",
      url: "https://flasha.isaxk.com",
      img: FlashaThum,
      desc: "Stuningly simple flashcards",
    },
  ];
  let github = "isaxk";
</script>

<Title>Project Showcase:</Title>
<AnimList>
  {#each projects as project, i}
    <AnimListItem {i}>
      <a
        href={project.url}
        class="flex flex-col sm:flex-row w-64 sm:w-full gap-2 sm:gap-5 rounded-md hover:underline transition-all my-2 bg-neutral-800"
      >
          <img
            src={project.img}
            alt="Thumbnail"
            class="rounded-t h-40 w-full sm:w-64 object-cover object-center"
          />

        <div class="px-4 sm:px-4 py-2 sm:py-4">
          <div class="text-xl sm:text-2xl font-medium">{project.name}</div>
          <div class="text-sm sm:text-md font-light text-zinc-400">{project.desc}</div>
        </div>
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
