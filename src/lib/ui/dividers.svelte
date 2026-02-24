<script>
    export let size = "";
    $: _size = size === "" ? "" : `${size}-`;
</script>

<div class="{_size}divider"></div>

<style>
    .divider,
    .small-divider,
    .medium-divider,
    .large-divider {
        width: 100%;
        border-bottom: 1px solid var(--outline-variant);
    }

    .small-divider {
        margin: 0.35rem 0;
    }

    .divider,
    .medium-divider {
        margin: 0.65rem 0;
    }

    .large-divider {
        margin: 1rem 0;
    }
</style>
