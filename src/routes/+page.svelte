<script lang="ts">
	import { resolve } from '$app/paths';
	import projects from '$lib/data/projects.json';
	import profile from '$lib/assets/profile.png';

	let { data } = $props();
</script>

<svelte:head>
	<title>Isaac - isaxk.com</title>
</svelte:head>

<div class="h-screen flex items-center px-4 md:px-0">
	<div class="w-full">
		<div class="py-10 flex w-full">
			<div class="grow">
				<h1 class="text-3xl font-medium">Hi I'm <span class="font-semibold">Isaac</span></h1>
				<div class="text-lg">I make things sometimes</div>
				<div class="flex text-sm/6 gap-1.5">
					<a class="underline" href="https://github.com/isaxk">GitHub</a>
					<a class="underline" href="https://discordapp.com/users/988006561442041886">Discord</a>
				</div>
			</div>
			<img src={profile} alt="Profile Picture" class="w-24 h-24 rounded-full" />
		</div>
		<div>
			<div class="text-lg font-semibold">Projects:</div>
			<ul class="list-disc pl-4 py-2">
				{#each projects as project, i (project.url + i)}
					<a href={project.url} class="group">
						<li>
							<div class="font-medium underline group-hover:text-foreground/80 transition-all">
								{project.title}
							</div>
							<div class="text-sm">{project.desc}</div>
						</li>
					</a>
				{/each}
			</ul>
		</div>
		<!-- <div class="pt-10">
			<div class="text-lg font-semibold">Blog posts :</div>
			<ul class="list-disc pl-4 py-2">
				{#each data.posts as post, i (post.slug)}
					<a href={post.slug} class="group">
						<li>
							<div class="font-medium underline group-hover:text-foreground/80 transition-all">
								{post.title}
							</div>
							<div class="text-sm">{post.date}</div>
						</li>
					</a>
				{/each}
			</ul>
		</div> -->
	</div>
</div>
