import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async ({ params }) => {
	const movie = await fetch(
		`https://api.themoviedb.org/3/movie/${params.id}?api_key=e437a7df3c32f744a666ae89e6b4653a`
	).then((res) => res.json());

	if (movie.status_code) {
		throw error(404, 'Movie not found');
	}
	return {
		movie: movie
	};
};
