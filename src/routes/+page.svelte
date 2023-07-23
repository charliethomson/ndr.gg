<script>
	import Fa from 'svelte-fa';
	import { faDiscord, faGithub, faSteam } from '@fortawesome/free-brands-svg-icons';

	// I dont want scrapers messaging me
	const navigateToDiscord = () => {
		// this is btoa'd 3x
		const discordUrl =
			'WVVoU01HTklUVFpNZVRscllWaE9hbUl6U210TWJVNTJZbE01TVdNeVZubGplVGg0VGtSbk1rMTZSWHBPVkVsM1RtcG5lRTVFVlhoT1ZFazk=';
		const rawUrl = atob(atob(atob(discordUrl)));
		window.open(rawUrl, '_blank');
	};
</script>

<div id="cover">
	<img
		src="images/cover.webp"
		alt="Lilliput Lyrics;page=247;aut=Robinson, Charles;src=British-Library-Flickr;dop=1899"
	/>

	<section class="flex flex-col justify-center">
		<h1 class="text-7xl text-chakra">nadir</h1>
		<div role="list" class="flex gap-3 mx-2">
			<a href="https://steamcommunity.com/id/nahdear">
				<Fa size="2em" class="not-sr-only" icon={faSteam} />
				<span class="sr-only">Steam</span>
			</a>
			<a href="#?" on:click={navigateToDiscord}>
				<Fa size="2em" class="not-sr-only" icon={faDiscord} />
				<span class="sr-only">Discord</span>
			</a>
			<a href="https://github.com/charliethomson">
				<Fa size="2em" class="not-sr-only" icon={faGithub} />
				<span class="sr-only">Github</span>
			</a>
		</div>
	</section>
</div>

<style lang="scss">
	div#cover {
		background: #f8f3d5;
		padding: 0 8rem;

		width: 100vw;
		height: 20vh;

		display: flex;
		justify-content: flex-start;

		box-shadow: 0 2px 20px 0 #00000080;
		margin-bottom: 1rem;
	}

	.text-chakra {
		font-family: 'Chakra Petch', sans-serif;
		text-transform: uppercase;
	}
</style>
