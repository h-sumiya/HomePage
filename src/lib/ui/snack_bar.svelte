<script>
    export let text = null;
    export let show = false;
</script>

<div class="snackbar primary" class:active={show}>{text}</div>
