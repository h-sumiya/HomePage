<script>
    export let size = "";
    $: _size = size === "" ? "" : `${size}-`;
</script>

<div class="{_size}divider"></div>
