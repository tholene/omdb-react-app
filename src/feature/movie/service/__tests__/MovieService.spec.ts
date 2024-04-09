import { createOmdbMovieV1Mock } from "../../../omdb-api/model/__mocks__/OmdbMovieV1.mock";
import { OmdbRestServiceV1 } from "../../../omdb-api/service/OmdbRestServiceV1";
import { MovieService } from "../MovieService";
import { createOmdbSearchResult1Mock } from "../../../omdb-api/model/__mocks__/OmdbSearchResultV1.mock";
import { createOmdbMovieResultV1Mock } from "../../../omdb-api/model/__mocks__/OmdbMovieResultV1.mock";

describe("MovieService", () => {
  describe("queryMovies", () => {
    it("should call OmdbMovieV1Service and return an array of movies", async () => {
      // Arrange
      const query = "hubba";
      const page = 1;
      const queryMoviesSpy = jest.spyOn(OmdbRestServiceV1, "queryMovies").mockResolvedValue(createOmdbSearchResult1Mock({
        Search: [
          createOmdbMovieV1Mock({ imdbID: "A" }),
          createOmdbMovieV1Mock({ imdbID: "B" })
        ]
      }));

      // Act
      const result = await MovieService.queryMovies(query, page);

      // Assert
      expect(queryMoviesSpy).toHaveBeenCalledWith(query, page);
      expect(result).toHaveLength(2);
      expect(result.map(movie => movie.imdbId)).toEqual(["A", "B"]);
    });
  });

  describe("getMovieByImdbId", () => {
    it("should call OmdbMovieV1Service and return a movie", async () => {
      // Arrange
      const Director = "Hubba";
      const imdbID = "A";
      const getMovieByImdbIdSpy = jest.spyOn(OmdbRestServiceV1, "getMovieByImdbId").mockResolvedValue(createOmdbMovieV1Mock({
        Director,
        imdbID
      }));

      // Act
      const result = await MovieService.getMovieByImdbId(imdbID);

      // Assert
      expect(getMovieByImdbIdSpy).toHaveBeenCalledWith(imdbID);
      expect(result?.director).toEqual(Director);
      expect(result?.imdbId).toEqual(imdbID);
    });
  });

  it("should return undefined if no movie was found", async () => {
    // Arrange
    const imdbID = "A";
    const Error = "Hubba Error";
    const getMovieByImdbIdSpy = jest.spyOn(OmdbRestServiceV1, "getMovieByImdbId").mockResolvedValue(createOmdbMovieResultV1Mock({
      Error
    }));

    // Act
    const result = await MovieService.getMovieByImdbId(imdbID);

    // Assert
    expect(getMovieByImdbIdSpy).toHaveBeenCalledWith(imdbID);
    expect(result).toBeUndefined();
  });
});
