<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    const onClick = () => dispatch("click");
    export let text = "";
    export let icon = "";

    export let small = false;
</script>

<button class="chip" class:small on:click={onClick} type="button">
    {#if icon}
        <i aria-hidden="true">{icon}</i>
    {/if}
    <span>{text}</span>
</button>

<style>
    .chip {
        display: inline-flex;
        align-items: center;
        gap: 0.34rem;
        padding: 0.34rem 0.68rem;
        border: 1px solid var(--outline-variant);
        border-radius: 999px;
        background-color: var(--surface-container-high);
        color: var(--on-surface);
        cursor: pointer;
        transition:
            background-color 0.18s ease,
            border-color 0.18s ease;
    }

    .chip:hover {
        background-color: var(--surface-container);
        border-color: var(--outline);
    }

    .chip.small {
        padding: 0.2rem 0.46rem;
        font-size: 0.8rem;
    }

    i {
        font-style: normal;
        line-height: 1;
    }
</style>
