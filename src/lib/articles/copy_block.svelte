<script>
	import { onDestroy } from 'svelte';

	export let title = 'Command';
	export let note = '';
	export let command = '';

	let copied = false;
	let timer;

	const copyCommand = async () => {
		if (!command) {
			return;
		}

		try {
			await navigator.clipboard.writeText(command);
			copied = true;
			clearTimeout(timer);
			timer = setTimeout(() => {
				copied = false;
			}, 1800);
		} catch (_error) {
			copied = false;
		}
	};

	onDestroy(() => {
		clearTimeout(timer);
	});
</script>

<section class="copy-block">
	<header>
		<div class="head">
			<p class="title">{title}</p>
			{#if note}
				<p class="note">{note}</p>
			{/if}
		</div>
		<button type="button" on:click={copyCommand} class:copied>{copied ? 'Copied' : 'Copy'}</button>
	</header>
	<pre><code>{command}</code></pre>
</section>

<style>
	.copy-block {
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
		padding: 0.8rem;
		border: 1px solid var(--outline-variant);
		border-radius: 0.95rem;
		background-color: var(--surface-container-low);
	}

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.7rem;
	}

	.head {
		display: flex;
		flex-direction: column;
		gap: 0.1rem;
	}

	.title {
		font-size: 0.82rem;
		font-weight: 700;
		letter-spacing: 0.02em;
		color: var(--on-surface-variant);
	}

	.note {
		font-size: 0.76rem;
		color: var(--on-surface-variant);
		opacity: 0.9;
	}

	button {
		flex-shrink: 0;
		min-height: 2rem;
		padding: 0.25rem 0.75rem;
		border: 1px solid var(--outline-variant);
		border-radius: 999px;
		background-color: var(--surface-container);
		color: var(--on-surface);
		font-size: 0.8rem;
		font-weight: 700;
		cursor: pointer;
		transition:
			background-color 0.18s ease,
			border-color 0.18s ease,
			color 0.18s ease;
	}

	button:hover {
		background-color: var(--surface-container-high);
		border-color: var(--outline);
	}

	button.copied {
		background-color: var(--primary-container);
		border-color: var(--primary-container);
		color: var(--on-primary-container);
	}

	pre {
		margin: 0;
		overflow-x: auto;
		padding: 0.72rem 0.8rem;
		border: 1px solid var(--outline-variant);
		border-radius: 0.75rem;
		background:
			radial-gradient(
				circle at right top,
				color-mix(in srgb, var(--primary) 12%, transparent) 0%,
				transparent 48%
			),
			var(--surface-container);
	}

	code {
		font-family: 'JetBrains Mono', 'Cascadia Code', 'SFMono-Regular', Menlo, Consolas, monospace;
		font-size: 0.82rem;
		line-height: 1.52;
		white-space: pre;
	}
</style>
