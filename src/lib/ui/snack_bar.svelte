<script>
    export let text = "";
    export let show = false;
</script>

<div class="snackbar" class:active={show}>{text}</div>

<style>
    .snackbar {
        position: fixed;
        left: 50%;
        bottom: 1rem;
        transform: translate(-50%, 120%);
        opacity: 0;
        z-index: 1000;
        max-width: min(92vw, 36rem);
        padding: 0.5rem 0.85rem;
        border: 1px solid var(--outline-variant);
        border-radius: 0.65rem;
        background-color: var(--surface-container-low);
        color: var(--on-surface);
        box-shadow: var(--elevate1);
        transition:
            transform 0.2s ease,
            opacity 0.2s ease;
    }

    .snackbar.active {
        transform: translate(-50%, 0);
        opacity: 1;
    }
</style>
