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
        <nav class="no-space">
            <button
                class="border left-round"
                class:fill={player == 1}
                disabled={!free}
                on:click={() => reset(1)}
            >
                <span>黒</span>
            </button>
            <button
                class="border right-round"
                class:fill={player == 2}
                disabled={!free}
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
    }

    @media (width >= 700px) {
        .panel {
            max-width: 500px;
            min-width: 500px;
        }
    }

    .title {
        margin-top: 20px;
        padding-left: 10px;
        border-bottom: solid 1px gray;
    }

    .inner {
        margin-left: 20px;
        margin-top: 10px;
    }

    .r_wrap {
        text-align: center;
        margin: 20px 0 10px 0;
    }
</style>
