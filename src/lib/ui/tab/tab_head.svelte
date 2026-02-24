<script>
    let before = null;
    export let select = 0;
    let element;
    $: {
        if (element) {
            if (before !== null) {
                element.children[before].classList.remove("active");
            }
            element.children[select].classList.add("active");
            before = select;
        }
    }
</script>

<div class="tabs" bind:this={element}>
    <slot />
</div>

<style>
    .tabs {
        display: inline-flex;
        gap: 0.2rem;
        padding: 0.2rem;
        border: 1px solid var(--outline-variant);
        border-radius: 0.62rem;
        background-color: var(--surface-container-low);
    }
</style>
