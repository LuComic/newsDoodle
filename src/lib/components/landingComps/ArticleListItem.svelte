<script lang="ts">
	import type { articleType } from '$lib/data.js';
	let { article }: { article: articleType } = $props();
	import { Heart, ArrowBigRight, User } from '@lucide/svelte';
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
		{#if article.name.length > 20}
			{article.name.slice(0, 20) + '...'}
		{:else}
			{article.name}
		{/if}
	</span>
	<div class="flex w-max items-center justify-center gap-2 text-sm text-(--secondary-text)">
		<User size={18} class="text-(--orange)" />
		{article.author}
		<Heart size={18} class="text-(--rose-red)" />
		{article.likeCount}
	</div>
</div>
