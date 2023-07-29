<script lang="ts">
	import { session } from '$lib';
	import moment from 'moment';
	import { onDestroy, onMount } from 'svelte';

	const voteLinks = [
		`https://www.trackyserver.com/server/ego-kingdoms-survival-skyblock-pve-pvp-multi-server-393647`,
		`https://www.planetminecraft.com/server/edge-gamerscom/vote/`,
		`https://minecraft-mp.com/server/312213/vote/`,
		`https://minecraftservers.biz/edgegamers-organization/`,
		`https://minecraftservers.org/vote/109809`,
		`https://minecraft-server-list.com/server/200887/vote/`
	];

	let lastVote = session.lastVoteDt.get();

	const openVoteLinks = () => {
		session.lastVoteDt.set(moment());
		voteLinks.forEach((link) => window.open(link, '_blank'));
	};

	const resetLastVoteDate = () => {
		session.lastVoteDt.remove();
	};

	$: timeUntilNextVote = (() => {
		if (lastVote === null) return null;
		const last = moment(lastVote).add(24, 'hours');
		const now = moment();
		if (last.isBefore(now)) return null;
		return moment.utc(last.diff(now, 'milliseconds')).format('[Next vote in] HH:mm:ss');
	})();

	let interval: ReturnType<typeof setInterval> | null = null;
	onMount(() => {
		if (interval) {
			clearInterval(interval);
			interval = null;
		}
		interval = setInterval(() => {
			lastVote = session.lastVoteDt.get();
		}, 100);
	});
	onDestroy(() => {
		if (!interval) return;
		clearInterval(interval);
		interval = null;
	});
</script>

<div class="center">
	<div class="font-mono content">
		<div class="sr-only">
			<button on:click={resetLastVoteDate}>Reset last vote time</button>
			<p>{timeUntilNextVote}</p>
		</div>
		{#if timeUntilNextVote}
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<p
				class="text-2xl cursor-pointer not-sr-only text-slate-200"
				title="Click to reset"
				on:keypress={resetLastVoteDate}
				on:click={resetLastVoteDate}
			>
				{timeUntilNextVote}
			</p>
		{/if}
		<button
			class="px-6 py-3 text-4xl border rounded-lg border-slate-200 text-slate-200 bg-slate-800"
			on:click={openVoteLinks}
		>
			Vote
		</button>
	</div>
</div>

<style lang="scss">
	.center {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
		width: 100vw;

		.content {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 2rem;
		}
	}
</style>
