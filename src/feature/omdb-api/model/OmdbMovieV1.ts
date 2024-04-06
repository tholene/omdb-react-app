import { ImdbId } from "../../common/model/ImdbId";

export type OmdbMovieV1 = {
  Title: string;
  Year: string;
  Runtime?: string;
  Genre?: string;
  Director?: string;
  Actors?: string;
  Plot?: string;
  Poster: string;
  imdbRating?: string;
  imdbVotes?: string;
  imdbID: ImdbId;
}