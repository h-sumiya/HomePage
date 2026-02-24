<script>
	const articles = [
		{
			title: 'Ubuntuでターミナルを一定時間で消灯する',
			href: '/articles/ubuntu/display',
			summary: 'consoleblank の秒数を指定して反映する。',
			category: 'Ubuntu',
			tags: ['Terminal', 'Display']
		},
		{
			title: 'パスワードなしでsudo可能なユーザーを作成する',
			href: '/articles/ubuntu/user',
			summary: 'ユーザー名を入力してそのままコピー。',
			category: 'Ubuntu',
			tags: ['User', 'Sudoers']
		},
		{
			title: 'Tailscale',
			href: '/articles/software/tailscale',
			summary: 'セットアップと Exit Node / UFW の基本手順。',
			category: 'Software',
			tags: ['Tailscale', 'Exit Node', 'UFW']
		}
	];
</script>

<svelte:head>
	<title>Articles | h-sumiya</title>
	<meta name="description" content="よく使うセットアップ手順のメモ一覧" />
</svelte:head>

<div class="page limit">
	<section class="grid">
		{#each articles as article}
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
