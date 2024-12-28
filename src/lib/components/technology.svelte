<script lang="ts">
	import { fade } from 'svelte/transition';

	let { name, color, Icon, i } = $props();
</script>

<div
	in:fade={{ duration: 200, delay: 400 + 50 * i }}
	class="flex aspect-square h-full w-full flex-col items-center justify-center gap-3 rounded border bg-zinc-900"
	style:border-color={color}
	style="box-shadow: 0px 0px 4px {color};"
>
	<div>
		<Icon size={36} {color} />
	</div>
	<div class="text-sm">
		{name}
	</div>
</div>
