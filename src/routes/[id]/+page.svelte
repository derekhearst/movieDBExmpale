<script lang="ts">
	import MovieCard from '../../lib/movieCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<MovieCard movie={data.movie} />
