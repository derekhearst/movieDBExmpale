<script lang="ts">
	import { json } from '@sveltejs/kit';
	import MovieCard from '../lib/movieCard.svelte';
	import type { PageData } from './$types';
	import { navigating, page } from '$app/stores';
	import { onMount } from 'svelte';
	export let data: PageData;

	let loaded = false;
	onMount(() => {
		loaded = true;
	});
</script>

{#key loaded}
	<div class="movies">
		{#each data.movies as movie, index (movie.id)}
			<MovieCard {movie} delay={index * 100} />
		{/each}
	</div>
{/key}

<style>
	.movies {
		display: flex;
		flex-wrap: wrap;
	}
</style>
