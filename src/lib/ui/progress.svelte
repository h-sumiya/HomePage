<script>
    export let size = "";

    let _size = "";
    if (size == "small") {
        _size = "small";
    } else if (size == "large") {
        _size = "large";
    }
</script>

<span class="spinner {_size}" aria-label="loading"></span>

<style>
    .spinner {
        width: 1.6rem;
        height: 1.6rem;
        display: inline-block;
        border-radius: 50%;
        border: 3px solid var(--outline-variant);
        border-top-color: var(--primary);
        animation: spin 0.8s linear infinite;
    }

    .spinner.small {
        width: 1rem;
        height: 1rem;
        border-width: 2px;
    }

    .spinner.large {
        width: 2.3rem;
        height: 2.3rem;
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
</style>
