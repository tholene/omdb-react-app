import { createBrowserRouter, Outlet } from "react-router-dom";
import { MovieListPage } from "./feature/movie/movie-list/page/MovieListPage";
import { MovieDetailsPage } from "./feature/movie/movie-details/page/MovieDetailsPage";
import { ErrorPage } from "./feature/common/page/ErrorPage";
import { RoutePath } from "./feature/common/model/RoutePath";

export const router = createBrowserRouter([
  {
    path: RoutePath.ROOT,
    element: <Outlet />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: RoutePath.MOVIE_LIST,
        element: <MovieListPage />
      },
      {
        path: RoutePath.MOVIE_DETAILS,
        element: <MovieDetailsPage />
      }
    ]
  }
]);