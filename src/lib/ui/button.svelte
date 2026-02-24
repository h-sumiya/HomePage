<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    const onClick = () => {
        dispatch("click");
    };
    export let name;
    export let icon = null;
    export let disabled = false;
</script>

<button on:click={onClick} {disabled} type="button">
    {#if icon}
        <i>{icon}</i>
    {/if}
    <span>{name}</span>
</button>

<style>
    button {
        min-height: 2.3rem;
        padding: 0.45rem 0.92rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.38rem;
        border: 1px solid var(--outline-variant);
        border-radius: 0.62rem;
        background-color: var(--surface-container);
        color: var(--on-surface);
        cursor: pointer;
        transition:
            background-color 0.18s ease,
            border-color 0.18s ease;
    }

    button:hover:enabled {
        background-color: var(--surface-container-high);
        border-color: var(--outline);
    }

    button:disabled {
        opacity: 0.56;
        cursor: not-allowed;
    }

    i {
        font-style: normal;
    }
</style>
