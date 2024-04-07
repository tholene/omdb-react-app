import React, { FC } from "react";
import { Box, Button, CircularProgress, Grid } from "@mui/material";
import { useMoviesSearch } from "../hook/useMoviesSearch";
import { SearchInput } from "../component/SearchInput";
import { MovieGrid } from "../component/MovieGrid";

export const MovieListContainer: FC = () => {
  const {
    value,
    onChange,
    onKeyDown,
    triggerSearch,
    movies,
    isLoading,
    hasNextPage,
    fetchNextPage
  } = useMoviesSearch();

  return (
    <Grid container spacing={4} padding={4}>
      <Grid item xs={12} md={6} mx={{ md: "25%" }}>
        <SearchInput value={value} onChange={onChange} onKeyDown={onKeyDown}
                     onSearch={triggerSearch} />
      </Grid>

      <MovieGrid movies={movies} />

      <Grid item xs={12}>
        <Box display="flex" justifyContent="center">
          {isLoading && <CircularProgress />}
          {hasNextPage && !isLoading &&
            (
              <Button variant="contained" disableElevation onClick={fetchNextPage}>
                Load more
              </Button>
            )
          }
        </Box>
      </Grid>
    </Grid>
  );
};