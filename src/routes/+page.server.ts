import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, setHeaders }) => {
	const movies = await fetch(
		'https://api.themoviedb.org/3/trending/movie/day?api_key=e437a7df3c32f744a666ae89e6b4653a'
	).then((res) => res.json());

	setHeaders({
		'Cache-Control': `max-age=0, s-max-age=${60 * 60 * 24}` // 24 hours
	});

	return {
		movies: movies.results
	};
};
