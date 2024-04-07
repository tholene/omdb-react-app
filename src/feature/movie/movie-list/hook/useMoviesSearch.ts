import { useSearchParams } from "react-router-dom";
import { ChangeEvent, KeyboardEventHandler, useCallback, useEffect, useState } from "react";
import { useMoviesQuery, UseMoviesQueryHookReturn } from "./useMoviesQuery";
import { MovieListConstants } from "../model/MovieListConstants";
import { CallbackWith } from "../../../common/model/CallbackWith";

type UseMoviesSearchHookReturn = UseMoviesQueryHookReturn & {
  value: string;
  triggerSearch: CallbackWith<string>;
  onChange: CallbackWith<ChangeEvent<HTMLInputElement>>;
  onKeyDown: KeyboardEventHandler<HTMLInputElement>;
};

export const useMoviesSearch = (): UseMoviesSearchHookReturn => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputQuery, setInputQuery] = useState<string>("");
  const urlQuery = searchParams.get(MovieListConstants.SEARCH_TERM_PARAM) ?? "";

  const { movies, fetchNextPage, hasNextPage, isLoading } = useMoviesQuery(urlQuery);

  // On mount effect to set input value from URL
  useEffect(() => {
    if (urlQuery) {
      setInputQuery(urlQuery);
    }
  }, []);

  const updateSearchParam = useCallback((query: string) => setSearchParams(
    new URLSearchParams({ [MovieListConstants.SEARCH_TERM_PARAM]: query })
  ), []);

  const handleOnChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      const value = evt.target.value.trimStart();
      setInputQuery(value);
    },
    []
  );

  const handleOnKeyDown: KeyboardEventHandler<HTMLInputElement> = useCallback((evt) => {
    if (evt.key === "Enter") {
      updateSearchParam(inputQuery);
    }
  }, [inputQuery, updateSearchParam]);

  return {
    movies,
    fetchNextPage,
    hasNextPage,
    isLoading,
    value: inputQuery,
    triggerSearch: updateSearchParam,
    onChange: handleOnChange,
    onKeyDown: handleOnKeyDown
  };
};