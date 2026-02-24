<script>
    export let size = null;
    $: _size = size ? `${size}-space` : "space";
</script>

<div class={_size}></div>

<style>
    .small-space {
        height: 0.5rem;
    }

    .space,
    .medium-space {
        height: 1rem;
    }

    .large-space {
        height: 1.5rem;
    }
</style>
