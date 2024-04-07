import { createMockCreator } from "../../../../test-utils/createMockCreator";
import { OmdbSearchResultV1 } from "../OmdbSearchResultV1";
import { createOmdbMovieV1Mock } from "./OmdbMovieV1.mock";

const baseMock: OmdbSearchResultV1 = {
  Response: "True",
  Search: [
    createOmdbMovieV1Mock({
      Title: "No Country for Old Men",
      Year: "2007",
      imdbID: "tt0477348",
      Poster: "https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg"
    }),
    createOmdbMovieV1Mock({
      Title: "X-Men: Days of Future Past",
      Year: "2014",
      imdbID: "tt1877832",
      Poster: "https://m.media-amazon.com/images/M/MV5BNjk3MGZhMjEtOTM4NC00NzE2LTk2NzctZDc4YTUwN2E3NDhhXkEyXkFqcGdeQXVyNDc2NjEyMw@@._V1_SX300.jpg"
    })
  ],
  totalResults: "2"
};

export const createOmdbSearchResult1Mock = createMockCreator(baseMock);