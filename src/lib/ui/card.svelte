<script>
    export let color = "";
    export let smallWidth = false;
</script>

<article class={color} class:small-width={smallWidth}>
    <slot />
</article>

<style>
    article {
        border: 1px solid var(--outline-variant);
        border-radius: 0.75rem;
        background-color: var(--surface-container-low);
        color: var(--on-surface);
        padding: 0.9rem;
    }

    .small-width {
        max-width: 22rem;
    }
</style>
