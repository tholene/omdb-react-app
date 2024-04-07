import React, { FC } from "react";
import { Movie } from "../../model/Movie";
import { Grid } from "@mui/material";
import { MovieCard } from "./MovieCard";
import { Masonry } from "@mui/lab";

type MovieGridProps = {
  movies: Movie[];
}

export const MovieGrid: FC<MovieGridProps> = ({ movies }) => {
  return (
    <Grid item xs={12}>
      <Masonry columns={{ xs: 1, sm: 3, md: 4, lg: 5 }} spacing={2}>
        {movies.map((movie) => <MovieCard key={movie.imdbId} movie={movie} />)}
      </Masonry>
    </Grid>

  );
};