import { createMockCreator } from "../../../../test-utils/createMockCreator";
import { OmdbMovieV1 } from "../OmdbMovieV1";

const baseMock: OmdbMovieV1 = {
  Title: "Harry Potter and the Deathly Hallows: Part 2",
  Year: "2011",
  Runtime: "130 min",
  Genre: "Adventure, Family, Fantasy",
  Director: "David Yates",
  Actors: "Daniel Radcliffe, Emma Watson, Rupert Grint",
  Plot: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
  Poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
  imdbRating: "8.1",
  imdbVotes: "941,773",
  imdbID: "tt1201607"
};

export const createOmdbMovieV1Mock = createMockCreator(baseMock);