<script lang="ts">
	import '../../routes/layout.css';
	import { ChartNoAxesCombined, Compass, User } from '@lucide/svelte';
	import { page } from '$app/state';
</script>

<div class="fixed top-0 left-0 h-auto w-screen bg-(--dark-text) p-2 text-(--light-text)">
	<div class="mx-auto flex w-full items-center justify-between md:w-md">
		<a
			href="/"
			class={`flex items-center justify-center gap-2 px-2 py-1 transition hover:text-(--light-text)/80 ${page.url.pathname === '/' && 'bg-(--background) text-(--dark-text) hover:bg-(--background)/80! hover:text-(--dark-text)!'}`}
		>
			<ChartNoAxesCombined size={20} />
			Popular
		</a>
		<a
			href="/browse"
			class={`flex items-center justify-center gap-2 px-2 py-1 transition hover:text-(--light-text)/80 ${page.url.pathname === '/browse' && 'bg-(--background) text-(--dark-text) hover:bg-(--background)/80! hover:text-(--dark-text)!'}`}
		>
			<Compass size={20} />
			Browse
		</a>
		<a
			href="/account"
			class={`flex items-center justify-center gap-2 px-2 py-1 transition hover:text-(--light-text)/80 ${page.url.pathname === '/account' && 'bg-(--background) text-(--dark-text) hover:bg-(--background)/80! hover:text-(--dark-text)!'}`}
		>
			<User size={20} />
			Account
		</a>
	</div>
</div>
