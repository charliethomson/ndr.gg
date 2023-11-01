<script>
    import Fa from 'svelte-fa';
    import {faDiscord, faGithub, faSteam} from '@fortawesome/free-brands-svg-icons';

    // I dont want scrapers messaging me
    const navigateToDiscord = () => {
        // this is btoa'd 3x
        const discordUrl =
            'WVVoU01HTklUVFpNZVRscllWaE9hbUl6U210TWJVNTJZbE01TVdNeVZubGplVGg0VGtSbk1rMTZSWHBPVkVsM1RtcG5lRTVFVlhoT1ZFazk=';
        const rawUrl = atob(atob(atob(discordUrl)));
        window.open(rawUrl, '_blank');
    };

    // Or joining the MG discord :/
    const joinMercuryDiscord = () => {
        // this is btoa'd 3x
        const discordUrl =
            'WVVoU01HTklUVFpNZVRscllWaE9hbUl6U210TWJXUnVUREl4YkdOdFRqRmpibXh1V1ZjeGNHSnRZejA9';
        const rawUrl = atob(atob(atob(discordUrl)));
        window.open(rawUrl, '_blank');
    };

</script>

<div id="cover" class="text-slate-600">
    <img
            src="images/cover.webp"
            alt="Lilliput Lyrics;page=247;aut=Robinson, Charles;src=British-Library-Flickr;dop=1899"
    />

    <section class="flex flex-col justify-center">
        <h1 class="text-7xl text-chakra">nadir</h1>
        <div role="list" class="flex gap-3 mx-2">
            <a href="https://steamcommunity.com/id/nahdear">
                <Fa size="2em" class="not-sr-only" icon={faSteam}/>
                <span class="sr-only">Steam</span>
            </a>
            <a href="#?" on:click={navigateToDiscord}>
                <Fa size="2em" class="not-sr-only" icon={faDiscord}/>
                <span class="sr-only">Discord</span>
            </a>
            <a href="https://github.com/charliethomson">
                <Fa size="2em" class="not-sr-only" icon={faGithub}/>
                <span class="sr-only">Github</span>
            </a>
        </div>
    </section>

</div>
<section class="flex flex-col gap-4 px-8 text-slate-600">
    <h2 class="text-5xl text-chakra text-gold">What I'm working on</h2>
    <ul class="list-none flex gap-4">
        <li class="w-80 h-80 float bg-gold flex flex-col gap-2 rounded-lg p-8">
            <h3 class="text-3xl text-chakra">Mercury Gaming</h3>
            <p>I'm working (with friends) to build a new gaming community focused on CS2 Jailbreak </p>

            <div id="space-taker" class="flex-1"></div>
            <a href="#?" on:click={joinMercuryDiscord}
               class="px-4 py-1 bg-discord text-white w-fit rounded flex gap-2 items-center self-end">
                <Fa class="not-sr-only" icon={faDiscord}/>
                <span class="sr-only">Discord</span>
                <span>Join the discord</span>
            </a>

            <ul class="list-none flex gap-2 self-end">
                <li class="text-sm px-2 py-0.5 bg-slate-600 rounded text-white">C#</li>
                <li class="text-sm px-2 py-0.5 bg-slate-600 rounded text-white">MySQL</li>
                <li class="text-sm px-2 py-0.5 bg-slate-600 rounded text-white">React</li>
                <li class="text-sm px-2 py-0.5 bg-slate-600 rounded text-white">Rust</li>
            </ul>
        </li>
    </ul>
</section>

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

  .float {
    box-shadow: 0 2px 20px 0 #00000080;
  }

  .bg-gold {
    background: #f8f3d5;
  }

  .text-gold {
    color: #f8f3d5;
  }

  .text-chakra {
    font-family: 'Chakra Petch', sans-serif;
    text-transform: uppercase;
  }

  .bg-discord {
    background-color: #738adb;
  }

</style>
