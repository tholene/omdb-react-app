import { Movie } from "../Movie";
import { createOmdbMovieV1Mock } from "../../../omdb-api/model/__mocks__/OmdbMovieV1.mock";
import { OmdbMovieV1Mapper } from "../../../omdb-api/mapper/OmdbMovieV1Mapper";
import { createMockCreator } from "../../../../test-utils/createMockCreator";

const baseMock: Movie = OmdbMovieV1Mapper.toMovie(createOmdbMovieV1Mock());

export const createMovieMock = createMockCreator(baseMock);