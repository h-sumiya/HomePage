<script>
	import CopyBlock from '$lib/articles/copy_block.svelte';

	let userName = 'opsuser';

	$: normalizedUser =
		userName
			.trim()
			.replace(/[^a-zA-Z0-9_-]/g, '')
			.toLowerCase() || 'opsuser';
	$: setupCommand = `sudo adduser --disabled-password --gecos "" ${normalizedUser}
sudo usermod -aG sudo ${normalizedUser}
echo '${normalizedUser} ALL=(ALL) NOPASSWD:ALL' | sudo tee /etc/sudoers.d/90-${normalizedUser}-nopasswd >/dev/null
sudo chmod 440 /etc/sudoers.d/90-${normalizedUser}-nopasswd
sudo visudo -cf /etc/sudoers.d/90-${normalizedUser}-nopasswd`;
</script>

<svelte:head>
	<title>Ubuntu sudoユーザー作成 | h-sumiya</title>
	<meta name="description" content="パスワードなしでsudo可能なユーザー作成メモ" />
</svelte:head>

<div class="page limit">
	<section class="hero">
		<a class="back" href="/articles">← Articles</a>
		<span class="badge">Ubuntu / User</span>
		<h1>パスワードなしでsudo可能なユーザーを作成する</h1>
		<p>ユーザー名を入力して一括コピー。</p>
	</section>

	<section class="panel">
		<label for="username">ユーザー名</label>
		<input id="username" type="text" spellcheck="false" autocomplete="off" bind:value={userName} />
		<p class="hint">使用値: <code>{normalizedUser}</code></p>

		<CopyBlock title="ユーザー作成 + sudoers 設定" command={setupCommand} />
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

	.hint {
		color: var(--on-surface-variant);
		font-size: 0.8rem;
	}

	code {
		padding: 0.06rem 0.34rem;
		border: 1px solid var(--outline-variant);
		border-radius: 0.4rem;
		background-color: var(--surface-container);
		font-family: 'JetBrains Mono', 'Cascadia Code', 'SFMono-Regular', Menlo, Consolas, monospace;
		font-size: 0.78rem;
	}
</style>
