<script>
	import flutterOpenXRLogo from '$lib/assets/flutter_openxr.png';
	import othelloLogo from '$lib/assets/othello.png';
	import ultradataLogo from '$lib/assets/ultradata.webp';
	import ZupLogo from '$lib/assets/zup.png';
	import ThumbnailCard from '../lib/thumbnail_card.svelte';
</script>

<svelte:head>
	<title>h-sumiya</title>
	<meta name="description" content="h-sumiyaのホームページです。" />
</svelte:head>

<div class="padding limit">
	<div class="row wrap-row">
		<ThumbnailCard
			title="オセロ"
			description="AIと対戦できるオセロです。"
			href="/othello"
			tags={['Rust', 'WASM', 'Svelte', 'AI', 'CodinGame', 'PyTorch', 'SIMD']}
		>
			<img class="responsive small" src={othelloLogo} alt="othello" />
		</ThumbnailCard>
		<ThumbnailCard
			title="FlutterOpenXR"
			description="FlutterアプリケーションをOpenXR向けにビルドするライブラリです。"
			href="/flutter-openxr"
			tags={['Flutter', 'OpenXR', 'D3D11', 'VR', 'C++']}
		>
			<img class="responsive small" src={flutterOpenXRLogo} alt="flutter_openxr" />
		</ThumbnailCard>
		<ThumbnailCard
			title="Ultradata"
			description="Nedoにも採択されている、次世代型軽量高速データベース開発のお手伝いを(株)高速屋さんの元で手伝わせていただいています。"
			href="/ultradata"
			tags={['Rust', 'React', 'PostgreSQL', 'TypeScript', 'Tauri']}
		>
			<img class="responsive small" src={ultradataLogo} alt="ultradata" />
		</ThumbnailCard>
		<ThumbnailCard
			title="Zup"
			description="Githubからreleaseを取得しアプリケーションを更新するWindows向けのアプリケーションです。"
			href="/zup"
			tags={['Windows', 'Flutter', 'Microsoft Store']}
		>
			<img class="responsive small" src={ZupLogo} alt="zup" />
		</ThumbnailCard>
	</div>
</div>

<style>
	.limit {
		max-width: var(--app-max-width);
		width: 100%;
		margin: 0 auto;
	}

	.wrap-row {
		flex-wrap: wrap;
		justify-content: start;
		flex-shrink: 1;
	}
</style>
