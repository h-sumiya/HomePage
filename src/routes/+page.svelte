<script>
	import othelloLogo from "$lib/assets/othello.png";
	import ThumbnailCard from "../lib/thumbnail_card.svelte";
</script>

<svelte:head>
	<title>製作物置き場</title>
	<meta name="description" content="製作物置き場" />
</svelte:head>

<div class="padding limit">
	<div class="row wrap-row">
		<ThumbnailCard
			title="オセロ"
			description="AIと対戦できるオセロです。"
			href="/othello"
			tags={[
				"Rust",
				"WASM",
				"Svelte",
				"AI",
				"CodinGame",
				"PyTorch",
				"SIMD",
			]}
		>
			<img class="responsive small" src={othelloLogo} alt="othello" />
		</ThumbnailCard>
	</div>
</div>

<style>
	.limit {
		max-width: var(--app-max-width);
		width: 100%;
		margin: 0 auto;
	}

	.wrap-row {
		flex-wrap: wrap;
		justify-content: start;
		flex-shrink: 1;
	}
</style>
