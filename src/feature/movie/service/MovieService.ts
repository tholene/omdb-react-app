import {OmdbRestServiceV1} from "../../omdb-api/service/OmdbRestServiceV1";
import {Movie} from "../model/Movie";
import {OmdbMovieV1Mapper} from "../../omdb-api/mapper/OmdbMovieV1Mapper";

const queryMovies = async (query: string, page: number): Promise<Movie[]> => {
    const response = await OmdbRestServiceV1.queryMovies(query, page);

    return response.map(OmdbMovieV1Mapper.toMovie)
}

const getMovieByImdbId = async (imdbId: string): Promise<Movie> => {
    const response = await OmdbRestServiceV1.getMovieByImdbId(imdbId);

    return OmdbMovieV1Mapper.toMovie(response)
}

export const MovieService = {
    queryMovies,
    getMovieByImdbId
}