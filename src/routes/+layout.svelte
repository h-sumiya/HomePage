<script>
	import Header from '../lib/header.svelte';
	import './styles.css';
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
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	main {
		overflow-x: hidden;
		overflow-y: auto;
		flex-grow: 1;
		width: 100%;
		padding: 0 1rem 1.5rem;
	}
</style>
