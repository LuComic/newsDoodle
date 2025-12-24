<script lang="ts">
	let { chosenPeriod, current }: { chosenPeriod: string; current: Date } = $props();
	import { news } from '$lib/data.js';
	import type { newsType } from '$lib/data.js';
	import NewsListItem from './NewsListItem.svelte';

	let periodNews = $state<newsType[]>(news);

	// <T extends { date: string }> is necessary so that the type definition knows what T is and that T must have .date property
	const filterByDate = <T extends { date: string }>(
		items: T[],
		startDate: Date,
		endDate: Date
	): T[] => {
		return items.filter((item) => {
			const itemDate = new Date(item.date);
			return itemDate >= startDate && itemDate <= endDate;
		});
	};

	$effect(() => {
		// Create a copy of current to avoid mutating the prop
		const currentDate = new Date(current);
		currentDate.setHours(0, 0, 0, 0);

		if (chosenPeriod === 'today') {
			const startDate = new Date(currentDate);
			const endDate = new Date(currentDate);
			endDate.setHours(23, 59, 59, 999);

			periodNews = filterByDate(news, startDate, endDate);
		} else if (chosenPeriod === 'week') {
			const startDate = new Date(currentDate);
			startDate.setDate(startDate.getDate() - 6); // 7 days including today
			startDate.setHours(0, 0, 0, 0);

			const endDate = new Date(currentDate);
			endDate.setHours(23, 59, 59, 999);

			periodNews = filterByDate(news, startDate, endDate);
		} else if (chosenPeriod === 'allTime') {
			periodNews = news;
		} else {
			console.log('invalid period');
		}
	});

	const sortedNews = $derived(
		[...periodNews].sort((a, b) => b.likeCount - a.likeCount).slice(0, 5)
	);
</script>

{#if sortedNews.length > 0}
	<div>
		<h3 class="w-max text-left text-2xl font-semibold md:text-3xl">
			Top 5 News
			<a
				href="/browse"
				class="font-normal text-(--secondary-text) transition hover:text-(--dark-text)"
			>
				more...
			</a>
		</h3>
		{#each sortedNews as newsItem (newsItem.name)}
			<NewsListItem {newsItem} />
		{/each}
	</div>
{/if}
