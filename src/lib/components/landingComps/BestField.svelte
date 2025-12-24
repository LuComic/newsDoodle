<script lang="ts">
	let { chosenPeriod, current }: { chosenPeriod: string; current: Date } = $props();
	import { articles, titles, news } from '$lib/data.js';
	import type { articleType, titleType, newsType } from '$lib/data.js';
	import { Calendar, User, Building2 } from '@lucide/svelte';

	let periodArticles = $state<articleType[]>(articles);
	let periodTitles = $state<titleType[]>(titles);
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

			periodArticles = filterByDate(articles, startDate, endDate);
			periodTitles = filterByDate(titles, startDate, endDate);
			periodNews = filterByDate(news, startDate, endDate);
		} else if (chosenPeriod === 'week') {
			const startDate = new Date(currentDate);
			startDate.setDate(startDate.getDate() - 6); // 7 days including today
			startDate.setHours(0, 0, 0, 0);

			const endDate = new Date(currentDate);
			endDate.setHours(23, 59, 59, 999);

			periodArticles = filterByDate(articles, startDate, endDate);
			periodTitles = filterByDate(titles, startDate, endDate);
			periodNews = filterByDate(news, startDate, endDate);
		} else if (chosenPeriod === 'allTime') {
			periodArticles = articles;
			periodTitles = titles;
			periodNews = news;
		} else {
			console.log('invalid period');
		}
	});

	const articleMax = $derived(
		periodArticles.reduce<articleType | null>(
			(max, art) => (!max || art.likeCount > max.likeCount ? art : max),
			null
		)
	);

	const titleMax = $derived(
		periodTitles.reduce<titleType | null>(
			(max, tit) => (!max || tit.likeCount > max.likeCount ? tit : max),
			null
		)
	);

	const newsMax = $derived(
		periodNews.reduce<newsType | null>(
			(max, news) => (!max || news.likeCount > max.likeCount ? news : max),
			null
		)
	);

	const finalMax = $derived(
		[articleMax, titleMax, newsMax].reduce<articleType | titleType | newsType | null>(
			(max, current) => (!max || !current || current.likeCount > max.likeCount ? current : max),
			null
		)
	);
</script>

{#if finalMax}
	<div class="col-span-2 flex w-full items-start justify-start border">
		<div
			class="flex w-auto max-w-1/3 flex-col justify-start gap-2 p-2 text-left text-base md:text-lg"
		>
			<h3 class="w-max text-left text-lg font-semibold md:text-xl">
				Trending
				<span class="text-(--beige-text)">
					{chosenPeriod === 'today'
						? 'today'
						: chosenPeriod === 'week'
							? 'this week'
							: chosenPeriod === 'allTime' && 'all time'}
				</span>
			</h3>
			<p>
				Tags:
				<span class="text-(--secondary-text)">Politics, Estonia, Trending</span>
			</p>
		</div>
		<a
			class="flex h-full w-full flex-col items-start justify-start gap-2 border-l border-dashed p-2 text-left"
			href="/"
		>
			<div class="flex w-full items-center justify-between">
				<span class="flex items-center justify-center gap-2 text-(--secondary-text)">
					{#if finalMax.type === 'news'}
						<Building2 class="text-(--orange)" size={18} />
					{:else}
						<User class="text-(--orange)" size={18} />
					{/if}
					{finalMax.author}
				</span>
				<span class="flex items-center justify-center gap-2 text-(--secondary-text)">
					<Calendar size={18} class="text-(--beige-text)" />
					{finalMax.date}
				</span>
			</div>
			<p
				class="h-full text-3xl font-bold md:text-4xl"
				style="font-family: var(--big-header), sans-serif;"
			>
				{finalMax.name}
			</p>
			<p class="text-base text-(--secondary-text) md:text-lg">
				{#if finalMax.description.length > 200}
					{finalMax.description.slice(0, 200) + '...'}
				{:else}
					{finalMax.description}
				{/if}
			</p>
		</a>
	</div>
{/if}
