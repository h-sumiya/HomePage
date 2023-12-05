<script>
    export let color = "";
    export let smallWidth = false;
</script>

<article class={color} class:small-width={smallWidth}>
    <slot />
</article>
