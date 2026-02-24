<script>
	import CopyBlock from '$lib/articles/copy_block.svelte';

	let blankSeconds = 600;

	$: parsedSeconds = Number(blankSeconds);
	$: safeSeconds =
		Number.isFinite(parsedSeconds) && parsedSeconds > 0 ? Math.round(parsedSeconds) : 600;
	$: grubLine = `GRUB_CMDLINE_LINUX_DEFAULT="quiet consoleblank=${safeSeconds}"`;
	$: applyCommand = `sudo sed -i 's/^GRUB_CMDLINE_LINUX_DEFAULT=.*/${grubLine}/' /etc/default/grub
sudo update-grub
sudo reboot`;
</script>

<svelte:head>
	<title>Ubuntu ターミナル消灯 | h-sumiya</title>
	<meta name="description" content="Ubuntuでターミナルを一定時間で消灯する設定メモ" />
</svelte:head>

<div class="page limit">
	<section class="hero">
		<a class="back" href="/articles">← Articles</a>
		<span class="badge">Ubuntu / Terminal</span>
		<h1>Ubuntuでターミナルを一定時間で消灯する</h1>
		<p>秒数を入れて、そのまま反映。</p>
	</section>

	<section class="panel">
		<label for="blank-seconds">消灯までの秒数</label>
		<input id="blank-seconds" type="number" min="1" step="1" bind:value={blankSeconds} />

		<CopyBlock title="GRUBに反映して再起動" command={applyCommand} />
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

	.hero {
		display: flex;
		flex-direction: column;
		gap: 0.38rem;
		padding: 1rem;
		border: 1px solid var(--outline-variant);
		border-radius: 1.15rem;
		background:
			radial-gradient(
				circle at 85% 25%,
				color-mix(in srgb, var(--primary) 20%, transparent) 0%,
				transparent 55%
			),
			var(--surface-container-low);
	}

	.back {
		font-size: 0.8rem;
		color: var(--on-surface-variant);
		text-decoration: none;
	}

	h1 {
		font-size: clamp(1.2rem, 3.6vw, 1.62rem);
	}

	.hero p {
		color: var(--on-surface-variant);
	}

	.panel {
		display: flex;
		flex-direction: column;
		gap: 0.7rem;
		padding: 0.9rem;
		border: 1px solid var(--outline-variant);
		border-radius: 0.95rem;
		background-color: var(--surface-container-low);
	}

	label {
		font-size: 0.82rem;
		font-weight: 700;
		color: var(--on-surface-variant);
	}

	input {
		width: min(240px, 100%);
		min-height: 2.25rem;
		padding: 0.35rem 0.65rem;
		border: 1px solid var(--outline-variant);
		border-radius: 0.72rem;
		background-color: var(--surface-container);
		color: var(--on-surface);
	}

	input:focus-visible {
		outline: 2px solid color-mix(in srgb, var(--primary) 42%, transparent);
		outline-offset: 1px;
	}
</style>
