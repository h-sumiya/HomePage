<script>
	import flutterOpenXRLogo from '$lib/assets/flutter_openxr.png';
	import othelloLogo from '$lib/assets/othello.png';
	import ultradataLogo from '$lib/assets/ultradata.webp';
	import ZupLogo from '$lib/assets/zup.png';
	import MinCard from '$lib/min_card.svelte';
	import ThumbnailCard from '$lib/thumbnail_card.svelte';
</script>

<svelte:head>
	<title>h-sumiya</title>
	<meta name="description" content="h-sumiyaのホームページです。" />
</svelte:head>

<div class="page limit">
	<section class="section">
		<div class="section-head">
			<h4>Featured Works</h4>
			<p>公開中の主なプロジェクト</p>
		</div>
		<div class="featured-grid">
			<ThumbnailCard
				title="オセロ"
				year="2023"
				description="AIと対戦できるオセロです。"
				href="/othello"
				tags={['Rust', 'WASM', 'Svelte', 'AI', 'CodinGame', 'PyTorch', 'SIMD']}
			>
				<img src={othelloLogo} alt="othello" />
			</ThumbnailCard>
			<ThumbnailCard
				title="FlutterOpenXR"
				year="2026"
				description="FlutterアプリケーションをOpenXR向けにビルドするライブラリです。"
				href="https://pub.dev/packages/flutter_open_xr"
				tags={['Flutter', 'OpenXR', 'D3D11', 'VR', 'C++']}
			>
				<img src={flutterOpenXRLogo} alt="flutter_openxr" />
			</ThumbnailCard>
			<ThumbnailCard
				title="Ultradata"
				year="2024"
				description="Nedoにも採択されている、次世代型軽量高速データベース開発のお手伝いを(株)高速屋さんの元で行っています。"
				href="/ultradata"
				tags={['Rust', 'React', 'PostgreSQL', 'TypeScript', 'Tauri']}
			>
				<img src={ultradataLogo} alt="ultradata" />
			</ThumbnailCard>
			<ThumbnailCard
				title="zup"
				year="2026"
				description="Githubからreleaseを取得しアプリケーションを更新するWindows向けのアプリケーションです。"
				href="https://zup.hiro.red"
				tags={['Windows', 'Flutter', 'Microsoft Store']}
			>
				<img src={ZupLogo} alt="zup" />
			</ThumbnailCard>
		</div>
	</section>

	<section class="section">
		<div class="section-head">
			<h4>Mini Projects</h4>
			<p>小さめのツールやライブラリ</p>
		</div>
		<div class="mini-grid">
			<MinCard
				title="UP HP"
				description="所属してたサークルのホームページです。"
				href="https://github.com/h-sumiya/up-hp"
				tags={['HTML', 'CSS', 'JavaScript']}
			></MinCard>
			<MinCard
				title="mise minecraft"
				description="miseを利用してMinecraftサーバーの環境を構築します。"
				href="https://github.com/h-sumiya/mise-minecraft"
				tags={['Minecraft', 'mise', 'ShellScript']}
			></MinCard>
			<MinCard
				title="Priority Semaphore"
				description="非同期Rust向けの優先度付きセマフォです。"
				href="https://github.com/h-sumiya/priority-semaphore"
				tags={['Rust', 'Async', 'Semaphore']}
			></MinCard>
			<MinCard
				title="2048AI"
				description="2048のAIです。"
				href="https://github.com/h-sumiya/2048AI"
				tags={['Rust', 'AI', '2048']}
			></MinCard>
			<MinCard
				title="Simple16"
				description="Rustで実装された、Simple16エンコード、デコードライブラリです。"
				href="https://github.com/h-sumiya/simple16"
				tags={['Rust', 'Simple16', 'Integer Compression']}
			></MinCard>
			<MinCard
				title="Sophia TOTP Autofill"
				description="上智大学 SSO（https://sso.sophia.ac.jp/）のログインフォームで、TOTP と Login ID / Password の入力を補助するブラウザ拡張です。"
				href="https://github.com/h-sumiya/sophia-totp-autofill"
				tags={['Browser Extension', 'Chrome', 'Firefox', 'TypeScript']}
			></MinCard>
			<MinCard
				title="bulxy"
				description="Tailscale上に非ルート権限でプロキシサーバーを構築するプログラムです。"
				href="https://github.com/h-sumiya/bulxy"
				tags={['Go', 'Tailscale', 'Proxy']}
			></MinCard>
			<MinCard
				title="h-sumiya's homepage"
				description="このホームページのリポジトリです。"
				href="https://github.com/h-sumiya/HomePage"
				tags={['Svelte']}
			></MinCard>
		</div>
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

	.featured-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 1rem;
		align-items: stretch;
	}

	.mini-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 0.85rem;
		align-items: stretch;
	}
</style>
