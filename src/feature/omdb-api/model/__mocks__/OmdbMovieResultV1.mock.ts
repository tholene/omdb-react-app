import { OmdbMovieResultV1 } from "../OmdbMovieResultV1";
import { createMockCreator } from "../../../../test-utils/createMockCreator";

const baseMock: OmdbMovieResultV1 = {
  Response: "False",
  Error: "Incorrect IMDb ID."
};

export const createOmdbMovieResultV1Mock = createMockCreator(baseMock);