import { OmdbRestServiceV1 } from "../../omdb-api/service/OmdbRestServiceV1";
import { Movie } from "../model/Movie";
import { OmdbMovieV1Mapper } from "../../omdb-api/mapper/OmdbMovieV1Mapper";
import { Maybe } from "../../common/model/Maybe";
import { OmdbApiV1Util } from "../../omdb-api/util/OmdbApiV1Util";

const queryMovies = async (query: string, page = 1): Promise<Movie[]> => {
  const response = await OmdbRestServiceV1.queryMovies(query, page);

  return response.Search.map(OmdbMovieV1Mapper.toMovie);
};

const getMovieByImdbId = async (imdbId: string): Promise<Maybe<Movie>> => {
  const response = await OmdbRestServiceV1.getMovieByImdbId(imdbId);

  if (OmdbApiV1Util.isResponseOmdbMovieV1(response)) {
    return OmdbMovieV1Mapper.toMovie(response);
  } else {
    return undefined;
  }
};

export const MovieService = {
  queryMovies,
  getMovieByImdbId
};