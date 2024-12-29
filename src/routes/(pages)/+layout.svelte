<script lang="ts">
	import AnimationMounter from '$lib/components/animation-mounter.svelte';

	let { children } = $props();
</script>

<AnimationMounter>
	<div class="prose prose-invert py-20 prose-h1:font-semibold prose-h2:font-medium">
		{@render children()}
	</div>
</AnimationMounter>
