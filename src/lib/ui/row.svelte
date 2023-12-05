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
