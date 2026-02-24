<script>
    export let name;
    export let color = null;

    $: _color = color === null ? "" : `${color}-text`;
</script>

<i class={_color}>{name}</i>

<style>
    i {
        font-style: normal;
        line-height: 1;
    }

    .primary-text {
        color: var(--primary);
    }
</style>
