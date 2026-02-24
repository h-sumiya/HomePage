<script>
    export let align = null;
    export let scroll = false;

    let _align = "";

    if (align == "center") {
        _align = "center-align";
    } else if (align == "right") {
        _align = "right-align";
    }
</script>

<div class="row {_align}" class:scroll>
    <slot />
</div>

<style>
    .row {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .center-align {
        justify-content: center;
    }

    .right-align {
        justify-content: flex-end;
    }

    .scroll {
        overflow-x: auto;
        overflow-y: hidden;
        padding-bottom: 0.1rem;
    }
</style>
