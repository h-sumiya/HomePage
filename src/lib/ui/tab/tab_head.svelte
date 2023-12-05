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
