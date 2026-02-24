<script>
    export let name;
    export let value;
</script>

<label class="checkbox">
    <input type="checkbox" bind:checked={value}>
    <span>{name}</span>
</label>

<style>
    .checkbox {
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
        color: var(--on-surface);
        user-select: none;
    }

    input {
        width: 1rem;
        height: 1rem;
        accent-color: var(--primary);
    }
</style>
