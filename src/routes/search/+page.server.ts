import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async ({ fetch, url }) => {
	const movies = await fetch(
		'https://api.themoviedb.org/3/search/movie?api_key=e437a7df3c32f744a666ae89e6b4653a&query=' +
			url.searchParams.get('key')
	).then((res) => res.json());

	return {
		movies: movies.results
	};
};
