<script>
    export let name;
    export let value;
</script>

<label class="checkbox">
    <input type="checkbox" bind:checked={value}>
    <span>{name}</span>
</label>