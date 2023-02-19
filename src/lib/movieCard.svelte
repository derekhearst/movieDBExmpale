<script lang="ts">
	export let movie: {
		id: string;
		title: string;
		overview: string;
		backdrop_path: string;
	};
	export let delay = 0;
	import { fly } from 'svelte/transition';
</script>

<a href={movie.id} in:fly={{ delay: delay, y: 200, duration: 1000 }}>
	<div class="movieCard">
		<h1>{movie.title}</h1>
		<img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
		<p>{movie.overview}</p>
	</div>
</a>

<style>
	.movieCard {
		width: 300px;
		height: 500px;
		background-color: #fff;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
		margin: 10px;
		padding: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
