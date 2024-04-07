import React, { FC } from "react";
import { useMovieDetails } from "../hook/useMovieDetails";
import { Box, CircularProgress, Grid, Stack, Typography } from "@mui/material";
import { MovieNotFound } from "../component/MovieNotFound";
import { Link } from "react-router-dom";
import { RoutePath } from "../../../common/model/RoutePath";

export const MovieDetailsContainer: FC = () => {
  const { movie, isLoading } = useMovieDetails();

  if (isLoading) {
    return <Box height="100vh" display="flex" justifyContent="center" alignItems="center"><CircularProgress /></Box>;
  }

  if (!movie) {
    return <MovieNotFound />;
  }

  return (
    <Grid container spacing={2} padding={4}>
      <Grid item xs={12}>
        <Link to={RoutePath.MOVIE_LIST}>Back to search</Link>
      </Grid>

      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={8} md={10}>
            <Typography variant="h5">{movie.title}</Typography>
            <Typography variant="body2">{movie.year} &#8226; {movie.runtime}</Typography>
          </Grid>
          <Grid item xs={4} md={2} textAlign="right">
            <Grid item xs={12}>
              <Typography variant="body1">IMDb Rating</Typography>
            </Grid>
            <Grid item xs={12}>
              <Stack>
                <Typography variant="body1"><strong>{movie.imdbRating}</strong> / 10</Typography>
                <Typography variant="caption">{movie.imdbVotes}</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <img src={movie.imageUrl} />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="body2">{movie.plot}</Typography>
      </Grid>

      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="subtitle1"><strong>Director</strong> {movie.director}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1"><strong>Stars</strong> {movie.actors.join(" \u2022 ")}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};