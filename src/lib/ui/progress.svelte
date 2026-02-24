<script>
    export let size = "";

    let _size = "";
    if (size == "small") {
        _size = "small";
    } else if (size == "large") {
        _size = "large";
    }
</script>

<progress class="circle {_size}"></progress>
