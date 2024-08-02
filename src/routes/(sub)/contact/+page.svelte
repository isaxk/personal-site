<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import Title from "../Title.svelte";
  import AnimList from "../AnimList.svelte";
  import AnimListItem from "../AnimListItem.svelte";

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

<Title>Contact</Title>
<AnimList>
  <AnimListItem i={0}><p>Add me on Discord to chat (@isaxkb)</p></AnimListItem>
</AnimList>
