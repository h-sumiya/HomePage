<svelte:head>
	<title>Ultradata - h-sumiya</title>
	<meta
		name="description"
		content="株式会社高速屋で実装した Ultradata 関連プロジェクトの紹介ページです。"
	/>
</svelte:head>

<div class="page limit">
	<section class="section">
		<div class="section-head">
			<h4>Ultradata</h4>
			<p>個人で実装を担当した内容</p>
		</div>

		<article class="card">
			<p>
				内部的なプログラムのほか、ホームページとライセンス管理ポータルを個人で実装させていただきました。
			</p>

			<div class="link-grid">
				<a class="site-link" href="https://ultra-data.co.jp/" target="_blank" rel="noopener noreferrer">
					<span>ホームページ</span>
					<small>https://ultra-data.co.jp/</small>
				</a>
				<a
					class="site-link"
					href="https://portal.ultra-data.co.jp/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span>ライセンス管理</span>
					<small>https://portal.ultra-data.co.jp/</small>
				</a>
			</div>
		</article>
	</section>
</div>

<style>
	.page {
		display: flex;
		flex-direction: column;
		gap: 1.8rem;
		padding-block: 1.2rem 2rem;
	}

	.limit {
		max-width: var(--app-max-width);
		width: 100%;
		margin: 0 auto;
	}

	.section {
		display: flex;
		flex-direction: column;
		gap: 0.85rem;
	}

	.section-head h4 {
		margin: 0;
		letter-spacing: 0.02em;
	}

	.section-head p {
		margin: 0.2rem 0 0;
		opacity: 0.72;
	}

	.card {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem 1.1rem;
		border: 1px solid var(--outline-variant);
		border-radius: 1rem;
		background-color: var(--surface-container-low);
	}

	.card p {
		color: var(--on-surface-variant);
		line-height: 1.55;
	}

	.link-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 0.65rem;
	}

	.site-link {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		padding: 0.7rem 0.8rem;
		border: 1px solid var(--outline-variant);
		border-radius: 0.8rem;
		background-color: var(--surface-container);
		text-decoration: none;
		transition:
			border-color 0.18s ease,
			background-color 0.18s ease,
			transform 0.18s ease;
	}

	.site-link:hover {
		border-color: var(--outline);
		background-color: var(--surface-container-high);
		transform: translateY(-2px);
	}

	.site-link span {
		font-weight: 600;
		letter-spacing: 0.01em;
	}

	.site-link small {
		color: var(--on-surface-variant);
		font-size: 0.78rem;
		word-break: break-all;
	}
</style>
