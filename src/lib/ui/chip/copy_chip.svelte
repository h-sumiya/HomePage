<script>
    import SnackBar from "../snack_bar.svelte";
    import IconChip from "./icon_chip.svelte";

    export let text = "";
    export let icon = "";
    export let small = false;
    let show = false;

    const copyText = () => {
        navigator.clipboard.writeText(text);
        show = true;
        setTimeout(() => {
            show = false;
        }, 2000);
    };
</script>

<SnackBar text={`${text}をクリップボードに貼り付けました。`} bind:show />
<IconChip {text} {icon} on:click={copyText} {small} />
