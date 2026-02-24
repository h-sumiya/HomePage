<script>
    import { createEventDispatcher } from "svelte";
    export let name;

    const dispatch = createEventDispatcher();
    const handleClick = () => {
        dispatch("click");
    };

    $: icon =
        name === "dark_mode"
            ? "moon"
            : name === "light_mode"
              ? "sun"
              : "dot";
</script>

<button class="icon-button" aria-label={name} on:click={handleClick} type="button">
    {#if icon === "moon"}
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M14.7 3.2A8.9 8.9 0 0 0 12 3a9 9 0 1 0 9 9c0-.9-.1-1.8-.4-2.7a.6.6 0 0 0-1-.2 7 7 0 0 1-4.6 1.8 7 7 0 0 1-7-7c0-1.7.6-3.4 1.8-4.6a.6.6 0 0 0-.2-1z"
            />
        </svg>
    {:else if icon === "sun"}
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0-4a1 1 0 0 1 1 1v1.4a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1zm0 15.6a1 1 0 0 1 1 1V21a1 1 0 0 1-2 0v-1.4a1 1 0 0 1 1-1zm8-7.6a1 1 0 0 1 0 2h-1.4a1 1 0 0 1 0-2H20zM5.4 11a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h1.4zm11.2-5.2a1 1 0 0 1 1.4 0l1 1a1 1 0 0 1-1.4 1.4l-1-1a1 1 0 0 1 0-1.4zm-9.2 9.2a1 1 0 0 1 1.4 0l1 1A1 1 0 0 1 8.4 18l-1-1a1 1 0 0 1 0-1.4zm9.2 3a1 1 0 0 1 0-1.4l1-1a1 1 0 1 1 1.4 1.4l-1 1a1 1 0 0 1-1.4 0zM7.4 7.2A1 1 0 0 1 7.4 5.8l1-1a1 1 0 0 1 1.4 1.4l-1 1a1 1 0 0 1-1.4 0z"
            />
        </svg>
    {:else}
        <span aria-hidden="true">•</span>
    {/if}
</button>

<style>
    .icon-button {
        width: 2.2rem;
        height: 2.2rem;
        border: 1px solid var(--outline-variant);
        border-radius: 999px;
        background-color: var(--surface-container);
        color: var(--on-surface);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition:
            background-color 0.18s ease,
            border-color 0.18s ease;
    }

    .icon-button:hover {
        background-color: var(--surface-container-high);
        border-color: var(--outline);
    }

    .icon-button svg {
        width: 1.1rem;
        height: 1.1rem;
        display: block;
        fill: currentColor;
    }
</style>
