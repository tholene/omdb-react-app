import { Movie } from "../../model/Movie";
import { generatePath } from "react-router-dom";
import { RoutePath } from "../../../common/model/RoutePath";

const getDetailsLink = (movie: Movie) => generatePath(RoutePath.MOVIE_DETAILS, { id: movie.imdbId });

export const MovieListUtil = {
  getDetailsLink
};