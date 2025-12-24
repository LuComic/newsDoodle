<script lang="ts">
	import type { newsType } from '$lib/data.js';
	let { newsItem }: { newsItem: newsType } = $props();
	import { Heart, ArrowBigRight, Building2 } from '@lucide/svelte';
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
		{#if newsItem.name.length > 20}
			{newsItem.name.slice(0, 20) + '...'}
		{:else}
			{newsItem.name}
		{/if}
	</span>
	<div class="flex w-max items-center justify-center gap-2 text-sm text-(--secondary-text)">
		<Building2 size={18} class="text-(--orange)" />
		{newsItem.author}
		<Heart size={18} class="text-(--rose-red)" />
		{newsItem.likeCount}
	</div>
</div>
