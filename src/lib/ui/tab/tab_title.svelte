<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    const onClick = () => dispatch("click");
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<a on:click={onClick}>
    <slot />
</a>

<style>
    a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 2rem;
        padding: 0.3rem 0.65rem;
        border-radius: 0.5rem;
        color: var(--on-surface-variant);
        cursor: pointer;
        user-select: none;
    }

    :global(.tabs > .active) {
        background-color: var(--surface-container);
        color: var(--on-surface);
    }
</style>
