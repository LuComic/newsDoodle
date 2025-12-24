<script lang="ts">
	import { topics } from '$lib/data.js';
	import TopicListItem from './TopicListItem.svelte';

	const sortedTopics = topics.sort((a, b) => b.count - a.count);
</script>

<div>
	<h3 class="w-max text-left text-2xl font-semibold md:text-3xl">
		Top 5 Topics
		<a
			href="/browse"
			class="font-normal text-(--secondary-text) transition hover:text-(--dark-text)"
		>
			more...
		</a>
	</h3>
	{#each sortedTopics as topic (topic.name)}
		<TopicListItem {topic} />
	{/each}
</div>
