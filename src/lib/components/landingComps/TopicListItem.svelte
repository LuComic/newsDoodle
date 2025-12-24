<script lang="ts">
	import type { topicType } from '$lib/data.js';
	let { topic }: { topic: topicType } = $props();
	import { Heart, ArrowBigRight, TrendingUp } from '@lucide/svelte';
	import { fade } from 'svelte/transition';

	let showArrow = $state(false);
</script>

<div
	class="my-2 flex w-full cursor-pointer items-center justify-between border border-dashed p-2 transition hover:bg-(--dark-text)/5"
	onmouseenter={() => (showArrow = true)}
	onmouseleave={() => (showArrow = false)}
	role="application"
>
	<span>
		{#if showArrow}
			<span class="inline text-(--secondary-text)" in:fade={{ duration: 125 }}>
				<ArrowBigRight size={18} class="inline" />
			</span>
		{/if}
		{topic.name}
	</span>
	<div class="flex w-max items-center justify-center gap-2 text-sm text-(--secondary-text)">
		<TrendingUp size={18} class="text-(--orange)" />
		{topic.count}
		<Heart size={18} class="text-(--rose-red)" />
		{topic.likeCount}
	</div>
</div>
