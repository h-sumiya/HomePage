<script>
    import { createEventDispatcher } from "svelte";
    import CheckBox from "../ui/check_box.svelte";
    import Button from "../ui/button.svelte";
    let dispatch = createEventDispatcher();
    function reset(p) {
        if (p != player) {
            player = p;
        }
        dispatch("reset", { p });
    }
    export let display_ai_legal = true;
    export let display_player_legal = true;
    export let player = 1;
    export let free = true;
</script>

<div class="panel">
    <div class="r_wrap">
        <Button
            name="はじめから"
            disabled={!free}
            on:click={() => {
                if (free) {
                    reset(player);
                }
            }}
        />
    </div>
    <div class="title">候補を表示</div>
    <div class="inner">
        <CheckBox name="プレイヤー" bind:value={display_player_legal} />
        <CheckBox name="AI" bind:value={display_ai_legal} />
    </div>
    <div class="title">色を選択する(ゲームがリセットされます。)</div>
    <div class="inner">
        <nav class="color-switch">
            <button
                class="select-button left"
                class:selected={player == 1}
                disabled={!free}
                type="button"
                on:click={() => reset(1)}
            >
                <span>黒</span>
            </button>
            <button
                class="select-button right"
                class:selected={player == 2}
                disabled={!free}
                type="button"
                on:click={() => reset(2)}
            >
                <span>白</span>
            </button>
        </nav>
    </div>
</div>

<style>
    .panel {
        width: 100%;
        border: 1px solid var(--outline-variant);
        border-radius: 0.9rem;
        background-color: var(--surface-container-low);
        padding: 0.8rem 0.9rem 0.9rem;
    }

    @media (width >= 700px) {
        .panel {
            max-width: 500px;
            min-width: 500px;
        }
    }

    .title {
        margin-top: 1rem;
        padding: 0 0 0.3rem 0.1rem;
        border-bottom: solid 1px var(--outline-variant);
        font-weight: 600;
    }

    .inner {
        margin-left: 0.1rem;
        margin-top: 0.6rem;
        display: flex;
        flex-wrap: wrap;
        gap: 0.7rem;
    }

    .r_wrap {
        text-align: center;
        margin: 0.35rem 0 0.1rem;
    }

    .color-switch {
        display: inline-flex;
    }

    .select-button {
        min-width: 3rem;
        min-height: 2rem;
        padding: 0.36rem 0.74rem;
        border: 1px solid var(--outline-variant);
        background-color: var(--surface-container);
        color: var(--on-surface);
        cursor: pointer;
    }

    .select-button.left {
        border-radius: 0.6rem 0 0 0.6rem;
    }

    .select-button.right {
        border-radius: 0 0.6rem 0.6rem 0;
        border-left: 0;
    }

    .select-button.selected {
        background-color: var(--primary-container);
        color: var(--on-primary-container);
    }

    .select-button:disabled {
        cursor: not-allowed;
        opacity: 0.6;
    }
</style>
