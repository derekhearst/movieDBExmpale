<script lang="ts">
	import type { PageData } from './$types';
	import MovieCard from '$lib/movieCard.svelte';
	export let data: PageData;
</script>

<div class="movies">
	{#each data.movies as movie, index (movie.id)}
		<MovieCard {movie} delay={index * 100} />
	{/each}
</div>

<style>
	.movies {
		display: flex;
		flex-wrap: wrap;
	}
</style>
