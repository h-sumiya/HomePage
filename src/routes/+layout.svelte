<script>
	import "./styles.css";
	import "beercss/dist/cdn/beer.min.css";
	import Header from '../lib/header.svelte';
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
</div>


<style>
	.app {
		--app-max-width: 1000px;
		display: flex;
		flex-direction: column;
		height: 100vh;
		align-items: center;
	}

	main {
		overflow-x: hidden;
		overflow-y: auto;
		flex-grow: 1;
		width: 100%;
	}
</style>
