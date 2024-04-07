import { MovieService } from "../../../service/MovieService";
import { createMovieMock } from "../../../model/__mocks__/Movie.mock";
import { useMoviesQuery } from "../useMoviesQuery";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

describe("useMoviesQuery", () => {
  beforeEach(() => {
    jest.spyOn(MovieService, "queryMovies").mockResolvedValueOnce(
      [
        createMovieMock({ imdbId: "1" }),
        createMovieMock({ imdbId: "2" })
      ]
    ).mockResolvedValueOnce(
      [
        createMovieMock({ imdbId: "3" }),
        createMovieMock({ imdbId: "4" })
      ]
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should not fetch movies if no search term was provided", async () => {
    const serviceSpy = jest.spyOn(MovieService, "queryMovies");

    renderHook(() => useMoviesQuery(""), {
      wrapper: ({ children }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    });

    expect(serviceSpy).not.toHaveBeenCalled();
  });

  it("should return movies", async () => {
    const { result } = renderHook(() => useMoviesQuery("hubba"), {
      wrapper: ({ children }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    });

    await waitFor(() => expect(result.current.movies.map(({ imdbId }) => imdbId)).toEqual(["1", "2"]));
  });

  it("should fetch more movies", async () => {
    const { result } = renderHook(() => useMoviesQuery("hubba"), {
      wrapper: ({ children }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    });

    await waitFor(() => expect(result.current.movies.map(({ imdbId }) => imdbId)).toEqual(["1", "2"]));

    result.current.fetchNextPage();

    await waitFor(() => expect(result.current.movies.map(({ imdbId }) => imdbId)).toEqual(["1", "2", "3", "4"]));
  });
});