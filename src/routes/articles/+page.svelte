<script>
	import ArticleCards from '$lib/articles/article_cards.svelte';
</script>

<svelte:head>
	<title>Articles | h-sumiya</title>
	<meta name="description" content="よく使うセットアップ手順のメモ一覧" />
</svelte:head>

<div class="page limit">
	<ArticleCards />
</div>

<style>
	.page {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-block: 1.2rem 2rem;
	}

	.limit {
		max-width: var(--app-max-width);
		width: 100%;
		margin: 0 auto;
	}
</style>
