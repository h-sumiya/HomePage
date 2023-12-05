<script>
    export let size = null;
    $: _size = size ? `${size}-space` : "space";
</script>

<div class={_size}></div>
