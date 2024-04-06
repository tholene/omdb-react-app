import { Movie } from "../../movie/model/Movie";
import { OmdbMovieV1 } from "../model/OmdbMovieV1";

const NOT_AVAILABLE = "N/A";

const toMovie = (omdbMovie: OmdbMovieV1): Movie => Movie.from(
  omdbMovie.Title,
  omdbMovie.Year,
  omdbMovie.Runtime ?? NOT_AVAILABLE,
  omdbMovie.Genre ?? NOT_AVAILABLE,
  omdbMovie.Director ?? NOT_AVAILABLE,
  omdbMovie.Actors?.split(", ") ?? [],
  omdbMovie.Plot ?? "",
  omdbMovie.Poster,
  omdbMovie.imdbRating ?? NOT_AVAILABLE,
  omdbMovie.imdbVotes ?? NOT_AVAILABLE,
  omdbMovie.imdbID
);

export const OmdbMovieV1Mapper = {
  toMovie
};

