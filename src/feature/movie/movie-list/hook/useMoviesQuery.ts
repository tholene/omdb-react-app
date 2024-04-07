import { Movie } from "../../model/Movie";
import { MovieService } from "../../service/MovieService";
import { useInfiniteQuery } from "@tanstack/react-query";
import { QueryKey } from "../../../common/model/QueryKey";

export type UseMoviesQueryHookReturn = {
  movies: Movie[];
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isLoading: boolean;
}

export const useMoviesQuery = (query: string): UseMoviesQueryHookReturn => {
  const queryFn = async ({ pageParam = 1 }: {
    pageParam?: number
  }): Promise<Movie[]> => MovieService.queryMovies(query.trim(), pageParam);

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    initialPageParam: undefined,
    queryKey: [QueryKey.MOVIE_SEARCH, query],
    queryFn,
    getNextPageParam: (lastPage, allPages) => lastPage.length > 0 ? allPages.length + 1 : undefined,
    enabled: query.trim().length > 0
  });

  return {
    movies: data?.pages.flatMap(movies => movies) ?? [],
    fetchNextPage,
    hasNextPage,
    isLoading: isLoading || isFetchingNextPage
  };
};