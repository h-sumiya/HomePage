<script>
    import { createEventDispatcher } from "svelte";

    export let index;
    let dispatch = createEventDispatcher();
    function click() {
        if (clickable) {
            dispatch("click", { index });
        }
    }

    export let color = "black"; // black, white, null
    export let suggest = null; // null, black, white
    export let display_suggest = true;
    export let latest = false;
    export let input = false;

    let before = null;
    let animate = false;
    $: clickable = input && suggest !== null;

    const animation = async (color) => {
        if (before === color) {
            return;
        }
        if (before === null || color === null) {
            before = color;
            return;
        }
        animate = true;
        await new Promise((resolve) => setTimeout(resolve, 250));
        before = color;
        await new Promise((resolve) => setTimeout(resolve, 300));
        animate = false;
    };

    $: animation(color);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="cell"
    style:--color={before || "transparent"}
    style:--suggest={latest
        ? "red"
        : display_suggest
          ? suggest || "transparent"
          : "transparent"}
    class:clickable
    class:animate
    on:click={click}
/>

<style>
    .cell {
        flex: 1;
        border: 1px solid black;
        position: relative;
        width: 100%;
        height: 100%;
    }

    .cell::after,
    .cell::before {
        content: "";
        display: block;
        position: absolute;
        border-radius: 50%;
    }

    .cell::before {
        top: 20%;
        left: 20%;
        width: 60%;
        height: 60%;
        background-color: var(--color);
    }

    .cell::after {
        transition: 0.2s;
        top: 42%;
        left: 42%;
        width: 16%;
        height: 16%;
        background-color: var(--suggest);
    }

    @keyframes flip {
        0% {
            transform: scaleX(1);
        }
        50% {
            transform: scaleX(0);
        }
        100% {
            transform: scaleX(1);
        }
    }

    .animate::before {
        animation: flip 0.5s;
    }

    .clickable {
        cursor: pointer;
        transition: 0.2s;
    }

    @media (hover: hover) {
        .clickable:hover {
            background-color: rgb(27, 102, 27);
        }
    }
    @media (hover: none) {
        .clickable:active {
            background-color: rgb(27, 102, 27);
        }
    }
</style>
