import { Movie } from "../../model/Movie";
import { useParams } from "react-router-dom";
import { MovieDetailsUrlParams } from "../model/MovieDetailsUrlParams";
import { MovieService } from "../../service/MovieService";
import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "../../../common/model/QueryKey";
import { isDefined } from "../../../common/util/isDefined";
import { ImdbId } from "../../../common/model/ImdbId";
import { Maybe } from "../../../common/model/Maybe";

type UseMovieDetailsHookReturn = {
  movie: Maybe<Movie>;
  isLoading: boolean;
};

export const useMovieDetails = (): UseMovieDetailsHookReturn => {
  const { id } = useParams<MovieDetailsUrlParams>();

  const queryFn = async () => MovieService.getMovieByImdbId(id as ImdbId);

  const { data, isLoading } = useQuery({
    queryKey: [QueryKey.MOVIE_BY_ID, id],
    queryFn,
    enabled: isDefined(id)
  });

  return {
    movie: data,
    isLoading
  };
};