import React, { FC, useState } from "react";
import { Movie } from "../../model/Movie";
import { Card, CardMedia } from "@mui/material";
import { MovieListUtil } from "../util/MovieListUtil";
import { Link } from "react-router-dom";

type MovieCardProps = {
  movie: Movie;
}

const DEFAULT_ELEVATION = 1;
const HOVER_ELEVATION = 20;

const ROTATION_DEGREES = 5;
const getRandomRotation = () => Math.floor(Math.random() * (2 * ROTATION_DEGREES + 1)) - ROTATION_DEGREES;

export const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card elevation={isHovered ? HOVER_ELEVATION : DEFAULT_ELEVATION}
          sx={{
            transition: "transform 0.2s",
            transform: `scale(${isHovered ? 1.1 : 1}) rotate(${isHovered ? getRandomRotation() : 0}deg)`,
            zIndex: isHovered ? 100 : undefined
          }}
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}>
      <Link to={MovieListUtil.getDetailsLink(movie)}>
        <CardMedia src={movie.imageUrl} component="img" alt={movie.title} />
      </Link>
    </Card>
  );
};