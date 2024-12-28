<script lang="ts">
	import AnimationMounter from '$lib/components/animation-mounter.svelte';
	import { circInOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	import Svelte from 'svelte-simples/Svelte.svelte';
	import TypeScript from 'svelte-simples/Typescript.svelte';
	import Technology from '$lib/components/technology.svelte';
	import Supabase from 'svelte-simples/Supabase.svelte';
	import Firebase from 'svelte-simples/Firebase.svelte';
	import Tailwind from 'svelte-simples/Tailwindcss.svelte';
	import React from 'svelte-simples/React.svelte';
	import Electron from 'svelte-simples/Electron.svelte';
	import Github from 'svelte-simples/Github.svelte';
	import Discord from 'svelte-simples/Discord.svelte';

	let { data } = $props();

	const projects = [
		{
			name: 'StageLog',
			desc: 'Log book app (PWA) for theatre lovers',
			href: 'https://stagelog.isaxk.com'
		},
		{
			name: 'QuickFlags',
			desc: 'Simple flag based recall game.',
			href: 'https://flags.isaxk.com'
		},
		{
			name: 'YT Desk',
			desc: 'Youtube & Youtube Music Desktop wrapper with extra qol features.',
			href: 'https://ytdesk.isaxk.com'
		}
	];
</script>

<AnimationMounter>
	<div class="flex w-full flex-col items-center gap-16 px-4 pb-16">
		<div
			class="flex h-[50vh] w-full max-w-screen-sm flex-col-reverse items-center gap-10 pt-16 text-center sm:flex-row sm:gap-0 sm:text-left"
		>
			<div class="flex-grow">
				<div class="flex gap-3 text-6xl font-light">
					<div in:fade={{ duration: 200 }}>Hey, I'm</div>

					<div class="flex gap-[1px] font-medium">
						{#each 'Isaac'.split('') as letter, i}
							<div in:fly|global={{ duration: 400, y: -20, delay: 50 + 50 * i, easing: circInOut }}>
								{letter}
							</div>
						{/each}
					</div>
				</div>
				<div class="pt-2 text-lg font-light text-zinc-300" in:fade={{ duration: 200, delay: 200 }}>
					Aspiring young web developer
				</div>

				<div
					class="flex justify-center gap-3 pt-4 sm:justify-start"
					in:fade={{ duration: 200, delay: 250 }}
				>
					<a href="https://github.com/isaxk"><Github size={22} /></a>
					<a href="https://discordapp.com/users/988006561442041886"><Discord size={22} /></a>
				</div>
			</div>
			<div class="h-40 w-40">
				<img
					src="/profile.jpeg"
					class="w-40 rounded-full"
					alt=""
					in:fade={{ duration: 200, delay: 300 }}
				/>
			</div>
		</div>
		<div class="w-full max-w-screen-sm">
			<div
				class="min-h-20 rounded-lg border border-zinc-600 bg-zinc-700 p-4 drop-shadow-xl"
				in:fade={{ duration: 200, delay: 350 }}
			>
				I'm Isaac, an aspiring young developer. I have a passion in creating pleasant, simple to
				use, user interfaces and like to focus on the small details that make a project feel
				polished.
			</div>
		</div>
		<div class="w-full max-w-screen-sm">
			<div class="flex" in:fade={{ duration: 200, delay: 400 }}>
				<div class="text-2xl font-medium">Skills/stacks/technologies:</div>
			</div>
			<div class="grid grid-cols-3 gap-2 py-4 transition-all sm:grid-cols-5">
				<div class="col-span-2 row-span-2">
					<Technology i={0} name="Svelte(Kit)" color="#FF3E00" Icon={Svelte} />
				</div>
				<Technology i={1} name="TypeScript" color="#3178C6" Icon={TypeScript} />
				<Technology i={2} name="TailwindCSS" color="#06B6D4" Icon={Tailwind} />
				<Technology i={3} name="Supabase" color="#3FCF8E" Icon={Supabase} />
				<Technology i={4} name="Firebase" color="#F7CE53" Icon={Firebase} />
				<Technology i={5} name="React" color="#61DAFB" Icon={React} />
				<Technology i={6} name="Electron" color="#47848F" Icon={Electron} />
			</div>
		</div>
		<div class="w-full max-w-screen-sm" in:fade={{ duration: 200, delay: 550 }}>
			<div class="flex">
				<div class="text-2xl font-medium">Projects:</div>
			</div>
			<div class="flex flex-col gap-2 py-4">
				{#each projects as project, i}
					<div>
						<a class="text-lg font-medium underline" href={project.href}>{project.name}</a>
						<div class="text-sm font-light text-zinc-300">{project.desc}</div>
					</div>
				{/each}
			</div>
		</div>
		<div class="w-full max-w-screen-sm" in:fade={{ duration: 200, delay: 550 }}>
			<div class="flex">
				<div class="text-2xl font-medium">Blog:</div>
			</div>
			<div class="flex flex-col gap-2 py-4">
				{#each data.posts as post, i}
					<div>
						<a class="text-lg font-medium underline" href={post.slug}>{post.title}</a>
						<div class="text-sm font-light text-zinc-300">{post.description}</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</AnimationMounter>
