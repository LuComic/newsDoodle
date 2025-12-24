<script lang="ts">
	import UserList from '$lib/components/landingComps/UserList.svelte';
	import TopicList from '$lib/components/landingComps/TopicList.svelte';
	import ArticleList from '$lib/components/landingComps/ArticleList.svelte';
	import NewsList from '$lib/components/landingComps/NewsList.svelte';
	import TitleList from '$lib/components/landingComps/TitleList.svelte';
	import BestField from '$lib/components/landingComps/BestField.svelte';

	let chosenPeriod: 'today' | 'week' | 'allTime' = $state('today');
	let current: Date = $state(new Date());

	const changePeriod = (period: string) => {
		if (period === 'today') {
			chosenPeriod = 'today';
		} else if (period === 'week') {
			chosenPeriod = 'week';
		} else if (period === 'allTime') {
			chosenPeriod = 'allTime';
		} else {
			console.log('invalid period');
		}

		current = new Date();
	};
</script>

<div class="mx-auto my-20 flex w-full flex-col items-start justify-start gap-6 px-4 md:w-3/4">
	<div class="grid h-[300px] w-full grid-cols-2 items-center justify-center text-(--dark-text)">
		<h1
			class="h-full text-left text-6xl leading-25 font-bold md:text-8xl"
			style="font-family: var(--big-header), sans-serif;"
		>
			Trending topics
			<span class="text-(--beige-text)">
				{chosenPeriod === 'today'
					? 'today'
					: chosenPeriod === 'week'
						? 'this week'
						: chosenPeriod === 'allTime' && 'all time'}
			</span>
		</h1>
		<UserList />
	</div>
	<div class="flex w-full items-center justify-start gap-2">
		<button
			class={`border border-(--dark-text) px-2 py-1 text-base md:text-lg ${chosenPeriod === 'today' && 'bg-(--dark-text) text-(--light-text)'} cursor-pointer`}
			onclick={() => {
				changePeriod('today');
			}}
		>
			Today
		</button>
		<button
			class={`border border-(--dark-text) px-2 py-1 text-base md:text-lg ${chosenPeriod === 'week' && 'bg-(--dark-text) text-(--light-text)'} cursor-pointer`}
			onclick={() => {
				changePeriod('week');
			}}
		>
			Week
		</button>
		<button
			class={`border border-(--dark-text) px-2 py-1 text-base md:text-lg ${chosenPeriod === 'allTime' && 'bg-(--dark-text) text-(--light-text)'} cursor-pointer`}
			onclick={() => {
				changePeriod('allTime');
			}}
		>
			All Time
		</button>
	</div>
	<div class="grid h-auto w-full grid-cols-2 items-start justify-start gap-6 text-(--dark-text)">
		<BestField {chosenPeriod} {current} />
		<TopicList />
		<ArticleList {chosenPeriod} {current} />
		<NewsList {chosenPeriod} {current} />
		<TitleList {chosenPeriod} {current} />
	</div>
</div>
