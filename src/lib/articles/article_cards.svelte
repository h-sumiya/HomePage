<script>
	import { articles as allArticles } from '$lib/articles/article_data';

	export let articles = allArticles;
	export let limit = null;

	$: maxCount = Number.isInteger(limit) && limit >= 0 ? limit : null;
	$: visibleArticles = maxCount === null ? articles : articles.slice(0, maxCount);
</script>

<section class="grid">
	{#each visibleArticles as article}
		<a class="card" href={article.href}>
			<div class="card-head">
				<span class="category">{article.category}</span>
				<span class="chip">Copy</span>
			</div>
			<h2>{article.title}</h2>
			<p>{article.summary}</p>
			<div class="tags">
				{#each article.tags as tag}
					<span>{tag}</span>
				{/each}
			</div>
		</a>
	{/each}
</section>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
		gap: 0.8rem;
	}

	.card {
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
		padding: 0.9rem;
		border: 1px solid var(--outline-variant);
		border-radius: 1rem;
		background-color: var(--surface-container-low);
		text-decoration: none;
		transition:
			transform 0.18s ease,
			border-color 0.18s ease,
			background-color 0.18s ease;
	}

	.card:hover {
		transform: translateY(-2px);
		border-color: var(--outline);
		background-color: var(--surface-container);
	}

	.card-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
	}

	.category {
		font-size: 0.74rem;
		font-weight: 700;
		letter-spacing: 0.03em;
		color: var(--on-surface-variant);
	}

	.chip {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.16rem 0.5rem;
		border: 1px solid var(--outline-variant);
		border-radius: 999px;
		font-size: 0.72rem;
		font-weight: 700;
		color: var(--on-surface-variant);
		background-color: var(--surface-container-high);
	}

	h2 {
		font-size: 1rem;
	}

	.card p {
		color: var(--on-surface-variant);
		font-size: 0.88rem;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.3rem;
	}

	.tags span {
		display: inline-flex;
		align-items: center;
		padding: 0.15rem 0.46rem;
		border: 1px solid var(--outline-variant);
		border-radius: 999px;
		background-color: var(--surface-container-high);
		font-size: 0.71rem;
		color: var(--on-surface-variant);
	}
</style>
