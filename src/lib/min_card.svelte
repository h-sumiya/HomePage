<script>
	export let title = '';
	export let description = '';
	export let wip = false;
	export let href = '';
	export let tags = [];
	export let compactTagCount = 4;

	$: sortedTags = [...tags].sort((a, b) => a.localeCompare(b, 'ja', { sensitivity: 'base' }));
	$: visibleTags = sortedTags.slice(0, compactTagCount);
	$: hiddenTagCount = Math.max(sortedTags.length - visibleTags.length, 0);
</script>

<article class="min-card">
	{#if wip}
		<span class="badge badge-pos">WIP</span>
	{/if}
	<div class="title-row">
		<h6>{title}</h6>
	</div>
	<p>{description}</p>
	<div class="tag-row">
		{#each visibleTags as tag}
			<span class="tag">{tag}</span>
		{/each}
		{#if hiddenTagCount > 0}
			<span class="tag">+{hiddenTagCount}</span>
		{/if}
	</div>
	<nav>
		<a class="action-link" {href}>アクセス</a>
	</nav>
</article>

<style>
	.min-card {
		position: relative;
		display: flex;
		flex-direction: column;
		height: 100%;
		gap: 0.65rem;
		padding: 1rem 1.1rem;
		color: var(--on-surface);
		border: 1px solid var(--outline-variant);
		border-radius: 1rem;
		background-color: var(--surface-container-low);
		overflow: hidden;
		transition:
			transform 0.18s ease,
			box-shadow 0.18s ease,
			border-color 0.18s ease,
			background-color 0.18s ease;
	}

	.min-card:hover,
	.min-card:focus-within {
		transform: translateY(-3px);
		border-color: var(--outline);
		background-color: var(--surface-container);
		box-shadow: var(--elevate1);
	}

	.title-row h6 {
		margin: 0;
		line-height: 1.25;
	}

	p {
		margin: 0;
		color: var(--on-surface-variant);
		line-height: 1.45;
		font-size: 0.9rem;
		flex-grow: 1;
	}

	.tag-row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.28rem;
	}

	.tag {
		border: 1px solid var(--outline-variant);
		border-radius: 999px;
		background-color: var(--surface-container-high);
		color: var(--on-surface-variant);
		font-size: 0.68rem;
		line-height: 1.15;
		padding: 0.16rem 0.44rem;
		white-space: nowrap;
	}

	.action-link {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.32rem 0.65rem;
		color: var(--on-surface);
		background-color: var(--surface-container-high);
		border: 1px solid var(--outline-variant);
		border-radius: 999px;
		font-size: 0.78rem;
		font-weight: 600;
		text-decoration: none;
		transition:
			background-color 0.18s ease,
			color 0.18s ease,
			border-color 0.18s ease;
	}

	.action-link:hover {
		color: var(--on-primary-container);
		background-color: var(--primary-container);
		border-color: var(--primary-container);
	}

	.badge-pos {
		position: absolute;
		top: 0.8rem;
		right: 0.8rem;
	}
</style>
