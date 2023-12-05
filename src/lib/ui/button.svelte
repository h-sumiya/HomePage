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

<button on:click={onClick} {disabled}>
    {#if icon}
        <i>{icon}</i>
    {/if}
    <span>{name}</span>
</button>
