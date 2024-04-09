import axios from "axios";
import { OmdbMovieV1 } from "../model/OmdbMovieV1";
import { ImdbId } from "../../common/model/ImdbId";
import { OmdbSearchResultV1 } from "../model/OmdbSearchResultV1";
import { OmdbMovieResultV1 } from "../model/OmdbMovieResultV1";

const VERSION_PARAM = "v=1";
const API_PARAM = `apikey=${process.env.REACT_APP_OMDB_API_KEY}`;
const TYPE_PARAM = `type=movie`;
const RETURN_PARAM = `r=json`;

const baseUrl = (): string =>
  `http://www.omdbapi.com/?${VERSION_PARAM}&${TYPE_PARAM}&${RETURN_PARAM}&${API_PARAM}`;

const queryMovies = async (query: string, page = 1): Promise<OmdbSearchResultV1> => {
  const { data } = await axios.get(`${baseUrl()}&s=${query}&page=${page}`);
  return data;
};

const getMovieByImdbId = async (imdbId: ImdbId): Promise<OmdbMovieV1 | OmdbMovieResultV1> => {
  const { data } = await axios.get(`${baseUrl()}&i=${imdbId}`);
  return data;
};

export const OmdbRestServiceV1 = {
  queryMovies,
  getMovieByImdbId
};