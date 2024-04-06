import { FC } from "react";
import { Box } from "@mui/material";
import { useMovieDetails } from "../hook/useMovieDetails";
import { Link } from "react-router-dom";

export const MovieDetailsContainer: FC = () => {
  const { movie, isLoading } = useMovieDetails();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <Box>
      <Link to="/">Back to search</Link>
      <p>{movie.title}</p>
      <p>Released in: {movie.year}</p>
      <p>Length: {movie.runtime}</p>
      <p>Directed by: {movie.director}</p>
      <p>Rating: {movie.imdbRating}</p>
      <p>Votes: {movie.imdbVotes}</p>
      <p>Cast:</p>
      <ul>{movie.actors.map(actor => <li key={actor}>{actor}</li>)}</ul>
      <img src={movie.imageUrl} />
      <p>{movie.plot}</p>

    </Box>
  );
};