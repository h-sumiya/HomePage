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
