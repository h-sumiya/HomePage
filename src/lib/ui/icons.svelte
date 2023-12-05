<script>
    export let name;
    export let color = null;

    $: _color = color === null ? "" : `${color}-text`;
</script>

<i class={_color}>{name}</i>
