import mockAxios from "jest-mock-axios";
import { OmdbRestServiceV1 } from "../OmdbRestServiceV1";

const expectedBaseUrl = "http://www.omdbapi.com/?v=1&type=movie&r=json&apikey=API_KEY";

describe("OmdbRestServiceV1", () => {
  beforeEach(() => {
    mockAxios.get.mockResolvedValueOnce({ data: {} });
  });

  afterEach(() => {
    mockAxios.reset();
  });

  describe("queryMovies", () => {
    it("should call axios.get with the correct URL", async () => {
      // Arrange
      const query = "hubba";
      const page = 1;
      const expectedUrl = `${expectedBaseUrl}&s=${query}&page=${page}`;

      // Act
      await OmdbRestServiceV1.queryMovies(query, page);

      // Assert
      expect(mockAxios.get).toHaveBeenCalledWith(expectedUrl);
    });
  });

  describe("getMovieByImdbId", () => {
    it("should call axios.get with the correct URL", async () => {
      // Arrange
      const imdbId = "hubbaBubba123";
      const expectedUrl = `${expectedBaseUrl}&i=${imdbId}`;

      // Act
      await OmdbRestServiceV1.getMovieByImdbId(imdbId);

      // Assert
      expect(mockAxios.get).toHaveBeenCalledWith(expectedUrl);
    });
  });
});