import { OmdbMovieV1 } from "../model/OmdbMovieV1";
import { OmdbMovieResultV1 } from "../model/OmdbMovieResultV1";

const isResponseOmdbMovieV1 = (response: OmdbMovieV1 | OmdbMovieResultV1): response is OmdbMovieV1 =>
  !("Error" in response);

export const OmdbApiV1Util = {
  isResponseOmdbMovieV1
};