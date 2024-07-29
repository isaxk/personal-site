<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import Projects from "$lib/components/Projects.svelte";
	import { onMount } from "svelte";

	let visible: boolean = false;
	onMount(() => {
		visible = true;
	});
</script>

<svelte:head>
	<title>Isaac (isaxk) - Casual Web Dev</title>
</svelte:head>

{#key visible}
	<Header myName="Isaac" />

	<Projects
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
	/>
{/key}
