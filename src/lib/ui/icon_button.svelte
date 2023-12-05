<script>
    import { createEventDispatcher } from "svelte";
    export let name;

    const dispatch = createEventDispatcher();
    const handleClick = () => {
        dispatch("click");
    };
</script>

<button class="circle transparent" on:click={handleClick}>
    <i>{name}</i>
</button>
