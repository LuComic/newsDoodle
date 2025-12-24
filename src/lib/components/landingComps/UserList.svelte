<script lang="ts">
	import { users } from '$lib/data.js';
	import { Heart } from '@lucide/svelte';

	const sortedUsers = users.sort((a, b) => b.likeCount - a.likeCount);
</script>

<div class="flex h-full flex-col items-start justify-start gap-4 pl-2">
	<span class="text-2xl font-medium md:text-3xl">
		Popular creators
		<a href="/" class="font-normal text-(--secondary-text) transition hover:text-(--dark-text)">
			more...
		</a>
	</span>
	<div class="w-full">
		{#each sortedUsers as user (user.name)}
			<div
				class={`flex w-full cursor-pointer items-center justify-start gap-2 ${users.indexOf(user) === 0 ? 'border-y ' : 'border-b'} border-dashed p-2 transition hover:bg-(--dark-text)/5`}
			>
				<div class="aspect-square h-10 w-auto rounded-full bg-black"></div>
				{user.name}
				<span class="ml-auto flex items-center justify-center gap-1 text-(--secondary-text)"
					>{user.likeCount}
					<Heart class="text-(--rose-red)" size={18} />
				</span>
			</div>
		{/each}
	</div>
</div>
