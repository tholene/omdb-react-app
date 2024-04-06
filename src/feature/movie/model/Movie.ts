import {ImdbId} from "../../common/model/ImdbId";

export type Movie = {
    title: string;
    year: string;
    runtime: string;
    genre: string;
    director: string;
    actors: string[];
    plot: string;
    imageUrl: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: ImdbId;
}

const from = (title: string, year: string, runtime: string, genre: string, director: string, actors: string[], plot: string, imageUrl: string, imdbRating: string, imdbVotes: string, imdbID: ImdbId): Movie => ({
    title,
    year,
    runtime,
    genre,
    director,
    actors,
    plot,
    imageUrl,
    imdbRating,
    imdbVotes,
    imdbID
});

export const Movie = {
    from
}