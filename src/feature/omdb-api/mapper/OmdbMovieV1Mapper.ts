import {Movie} from "../../movie/model/Movie";
import {OmdbMovieV1} from "../model/OmdbMovieV1";

const toMovie = (omdbMovie: OmdbMovieV1): Movie => Movie.from(
    omdbMovie.Title,
    omdbMovie.Year,
    omdbMovie.Runtime,
    omdbMovie.Genre,
    omdbMovie.Director,
    omdbMovie.Actors.split(", "),
    omdbMovie.Plot,
    omdbMovie.Poster,
    omdbMovie.imdbRating,
    omdbMovie.imdbVotes,
    omdbMovie.imdbID
)

export const OmdbMovieV1Mapper = {
    toMovie
};

