import axios from "axios";
import {OmdbMovieV1} from "../model/OmdbMovieV1";
import {ImdbId} from "../../common/model/ImdbId";

const VERSION_PARAM = "v=1";
const API_PARAM = `apikey=${process.env.REACT_APP_OMDB_API_KEY}`
const TYPE_PARAM = `type=movie`;
const RETURN_PARAM = `r=json`;

const baseUrl = (): string =>
    `http://www.omdbapi.com/?${VERSION_PARAM}&${TYPE_PARAM}&${RETURN_PARAM}&${API_PARAM}`;

const queryMovies = async (query: string, page = 1): Promise<OmdbMovieV1[]> =>
    await axios.get(`${baseUrl()}&s=${query}&page=${page}`);

const getMovieByImdbId = async (imdbId: ImdbId): Promise<OmdbMovieV1> =>
    await axios.get(`${baseUrl()}&i=${imdbId}`);

export const OmdbRestServiceV1 = {
    queryMovies,
    getMovieByImdbId
}