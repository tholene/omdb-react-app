import { OmdbMovieV1 } from "./OmdbMovieV1";

export type OmdbSearchResultV1 = {
  Response: "True" | "False",
  Search: Pick<OmdbMovieV1, "Title" | "Year" | "imdbID" | "Poster">[]
  totalResults: string
}