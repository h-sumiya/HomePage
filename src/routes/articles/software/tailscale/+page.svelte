<script>
	import CopyBlock from '$lib/articles/copy_block.svelte';

	const installCommand = 'curl -fsSL https://tailscale.com/install.sh | sh';
	const upDefault = 'sudo tailscale up';
	const upSshExit = 'tailscale up --accept-dns --accept-routes --advertise-exit-node --ssh';
	const exitNodeForwarding = `echo 'net.ipv4.ip_forward = 1' | sudo tee -a /etc/sysctl.d/99-tailscale.conf
echo 'net.ipv6.conf.all.forwarding = 1' | sudo tee -a /etc/sysctl.d/99-tailscale.conf
sudo sysctl -p /etc/sysctl.d/99-tailscale.conf`;
	const optimizeUfw = `sudo apt-get update
sudo apt-get install -y ufw
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow out 443/tcp    comment 'tailscale control/derp https'
sudo ufw allow out 80/tcp     comment 'tailscale http fallback (optional)'
sudo ufw allow out 3478/udp   comment 'tailscale STUN'
sudo ufw allow out 41641/udp  comment 'tailscale wireguard'
sudo ufw allow in 41641/udp   comment 'tailscale wireguard inbound (optional)'
sudo ufw enable`;
</script>

<svelte:head>
	<title>Tailscale Setup | h-sumiya</title>
	<meta name="description" content="Tailscaleのセットアップと最適化手順メモ" />
</svelte:head>

<div class="page limit">
	<section class="hero">
		<a class="back" href="/articles">← Articles</a>
		<span class="badge">Software / Tailscale</span>
		<h1>Tailscale</h1>
		<p>セットアップと最低限の最適化。</p>
	</section>

	<section class="stack">
		<CopyBlock title="Install" command={installCommand} />
		<CopyBlock title="通常" command={upDefault} />
		<CopyBlock title="SSH + Exit Node" command={upSshExit} />
		<CopyBlock title="Exit Node forwarding" command={exitNodeForwarding} />
	</section>

	<section class="panel">
		<h2>最適化</h2>
		<p>Tailscale SSH 接続後に実行。</p>
		<CopyBlock title="UFW" command={optimizeUfw} />
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

	.stack {
		display: flex;
		flex-direction: column;
		gap: 0.7rem;
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

	h2 {
		font-size: 1rem;
	}

	.panel p {
		color: var(--on-surface-variant);
		font-size: 0.86rem;
	}
</style>
