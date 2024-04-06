import {Outlet, createBrowserRouter} from "react-router-dom";
import {MovieListPage} from "./feature/movie/movie-list/page/MovieListPage";
import {MovieDetailsPage} from "./feature/movie/movie-details/page/MovieDetailsPage";
import {ErrorPage} from "./feature/common/page/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Outlet/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '',
                element: <MovieListPage/>
            },
            {
                path: 'movies/:id',
                element: <MovieDetailsPage/>,
            }
        ]
    }
])