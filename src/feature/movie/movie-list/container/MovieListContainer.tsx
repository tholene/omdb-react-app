import { ChangeEvent, FC, KeyboardEventHandler, useCallback, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Box } from "@mui/material";
import { useMovieSearch } from "../hook/useMovieSearch";
import { MovieListUtil } from "../util/MovieListUtil";

const SEARCH_TERM_PARAM = "q";

export const MovieListContainer: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [typedSearchTerm, setTypedSearchTerm] = useState<string>("");
  const searchTerm = searchParams.get(SEARCH_TERM_PARAM) ?? "";

  const { movies, fetchNextPage, hasNextPage, isLoading } = useMovieSearch(searchTerm);

  useEffect(() => {
    if (searchTerm) {
      setTypedSearchTerm(searchTerm);
    }
  }, []);

  const updateSearchParam = useCallback((query: string) => setSearchParams(
    new URLSearchParams({ [SEARCH_TERM_PARAM]: query })
  ), []);

  const handleOnChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      const value = evt.target.value.trimStart();
      setTypedSearchTerm(value);
    },
    []
  );

  const handleOnKeyDown: KeyboardEventHandler<HTMLInputElement> = useCallback((evt) => {
    if (evt.key === "Enter") {
      updateSearchParam(typedSearchTerm);
    }
  }, [typedSearchTerm, updateSearchParam]);

  return (
    <Box>
      <input type="text" placeholder="Search for a movie title" value={typedSearchTerm ?? undefined}
             onChange={handleOnChange} onKeyDown={handleOnKeyDown} />

      <button onClick={() => updateSearchParam(typedSearchTerm)}>Search</button>

      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbId}>
            <Link to={MovieListUtil.getDetailsLink(movie)}>{movie.title}</Link>
          </li>
        ))}
      </ul>

      {isLoading && <p>Loading...</p>}
      {hasNextPage && !isLoading && <button onClick={fetchNextPage}>Load more</button>}
    </Box>
  );
};