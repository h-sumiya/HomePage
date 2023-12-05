<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    const onClick = () => dispatch("click");
    export let text = "";
    export let icon = "";

    export let small = false;
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<a class="chip round" on:click={onClick} class:costom-small={small}>
    <i class:tiny={small}>{icon}</i>
    <span class:small-text={small}>{text}</span>
</a>

<style>
    .costom-small {
        padding: none;
    }
</style>
