<script>
    import Progress from "./../ui/progress.svelte";
    import { initialize } from "./ai";
    import Body from "./body.svelte";
    import Game from "./game.svelte";
    import Support from "./support.svelte";
</script>

<svelte:head>
    <title>AIオセロ</title>
    <meta name="description" content="AIと対戦できるオセロです。" />
    <meta name="keywords" content="オセロ, AI, ゲーム" />
</svelte:head>

<Support />
{#await initialize}
    <div class="loading-state">
        <Progress size="large" />
        <p>AIを読み込んでいます。</p>
    </div>
{:then}
    <Game />
{/await}
<Body />

<style>
    .loading-state {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        padding: 1rem 0 1.4rem;
    }
</style>
