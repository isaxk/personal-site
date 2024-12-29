<script>
	import { fade } from 'svelte/transition';
	import Svelte from 'svelte-simples/Svelte.svelte';
	import TypeScript from 'svelte-simples/Typescript.svelte';
	import Technology from '$lib/components/technology.svelte';
	import Supabase from 'svelte-simples/Supabase.svelte';
	import Firebase from 'svelte-simples/Firebase.svelte';
	import Tailwind from 'svelte-simples/Tailwindcss.svelte';
	import React from 'svelte-simples/React.svelte';
	import Electron from 'svelte-simples/Electron.svelte';
</script>

<h1>About</h1>
<p>
	I'm Isaac, an aspiring young developer. I have a passion in creating pleasant, simple to use, user
	interfaces and like to focus on the small details that make a project feel polished.
</p>

<h2>Skills/Technologies/Stacks:</h2>
<div class="grid grid-cols-3 gap-2 py-4 transition-all sm:grid-cols-6">
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

<h2>Projects</h2>
<p>Take a look at my projects on <a href="https://github.com/isaxk">GitHub</a></p>
