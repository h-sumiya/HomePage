<script>
	import { createEventDispatcher } from 'svelte';
	import darkModeIcon from './dark.svg';
	import lightModeIcon from './light.svg';

	export let name;

	const dispatch = createEventDispatcher();
	const handleClick = () => {
		dispatch('click');
	};

	$: iconPath = name === 'dark_mode' ? darkModeIcon : name === 'light_mode' ? lightModeIcon : null;
</script>

<button class="icon-button" aria-label={name} on:click={handleClick} type="button">
	{#if iconPath}
		<img src={iconPath} alt="" aria-hidden="true" />
	{:else}
		<span aria-hidden="true">•</span>
	{/if}
</button>

<style>
	.icon-button {
		width: 2.2rem;
		height: 2.2rem;
		border: 1px solid var(--outline-variant);
		border-radius: 999px;
		background-color: var(--surface-container);
		color: var(--on-surface);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition:
			background-color 0.18s ease,
			border-color 0.18s ease;
	}

	.icon-button:hover {
		background-color: var(--surface-container-high);
		border-color: var(--outline);
	}

	.icon-button img {
		width: 1.1rem;
		height: 1.1rem;
		display: block;
		object-fit: contain;
	}
</style>
