import { Movie } from "../../model/Movie";

const getDetailsLink = (movie: Movie) => `/movies/${movie.imdbId}`;

export const MovieListUtil = {
  getDetailsLink
};