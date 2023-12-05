<script>
    import Card from "./ui/card.svelte";
    export let title = "";
    export let description = "";
    export let wip = false;
    export let href = "";
    export let tags = [];
</script>

<article class="no-padding border">
    {#if wip}
        <span class="badge badge-pos">WIP</span>
    {/if}
    <slot />
    <div class="padding">
        <h5>{title}</h5>
        <p>{description}</p>
        <nav>
            <a {href}> <button>アクセス</button></a>
        </nav>
        <div class="row wrap-row">
            {#each tags as tag}
                <span class="tag">{tag}</span>
            {/each}
        </div>
    </div>
</article>

<style>
    article {
        max-width: 100%;
        flex-grow: 1;
        align-self: stretch;
    }

    @media (width >= 700px) {
        article {
            max-width: 300px;
        }
    }

    .wrap-row {
        flex-wrap: wrap;
        justify-content: start;
        flex-shrink: 1;
        gap: 0.1rem;
    }

    .tag {
        border: 1px solid;
        border-radius: 100px;
        padding: 0.1rem 0.3rem;
        margin: 0.2rem 0.1rem !important;
    }

    .badge-pos {
        position: absolute;
        top: 2rem;
        right: 2rem;
    }
</style>
