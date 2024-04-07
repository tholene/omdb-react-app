import { render, screen } from "@testing-library/react";
import { MovieDetailsContainer } from "../MovieDetailsContainer";
import * as MovieDetailsHooks from "../../hook/useMovieDetails";
import { BrowserRouter } from "react-router-dom";
import { createMovieMock } from "../../../model/__mocks__/Movie.mock";

const renderTestee = () => render(<MovieDetailsContainer />, {
  wrapper: ({ children }) => <BrowserRouter>{children}</BrowserRouter>
});

describe("MovieDetailsContainer", () => {
  it("should show error if no movie was found", () => {
    jest.spyOn(MovieDetailsHooks, "useMovieDetails").mockReturnValue({ movie: undefined, isLoading: false });

    renderTestee();

    expect(screen.queryByText(/your movie was not found/)).toBeInTheDocument();
  });

  it("should NOT show error if no movie has YET been found", () => {
    jest.spyOn(MovieDetailsHooks, "useMovieDetails").mockReturnValue({ movie: undefined, isLoading: true });

    renderTestee();

    expect(screen.queryByText(/your movie was not found/)).not.toBeInTheDocument();
  });

  it("should show movie details", () => {
    const mockMovie = createMovieMock(
      {
        title: "The title",
        year: "Release year",
        runtime: "Runtime",
        imdbRating: "8.5",
        imdbVotes: "1000",
        plot: "The plot",
        director: "Hubba director",
        actors: ["Ruben", "Bubba"]
      }
    );
    jest.spyOn(MovieDetailsHooks, "useMovieDetails").mockReturnValue({ movie: mockMovie, isLoading: false });

    renderTestee();

    expect(screen.queryByText(/The title/)).toBeInTheDocument();
    expect(screen.queryByText(/Release year/)).toBeInTheDocument();
    expect(screen.queryByText(/Runtime/)).toBeInTheDocument();
    expect(screen.queryByText(/8.5/)).toBeInTheDocument();
    expect(screen.queryByText(/1000/)).toBeInTheDocument();
    expect(screen.queryByText(/The plot/)).toBeInTheDocument();
    expect(screen.queryByText(/Hubba director/)).toBeInTheDocument();
    expect(screen.queryByText(/Ruben/)).toBeInTheDocument();
    expect(screen.queryByText(/Bubba/)).toBeInTheDocument();
  });

  it("should have a back button", async () => {
    const mockMovie = createMovieMock();

    jest.spyOn(MovieDetailsHooks, "useMovieDetails").mockReturnValue({ movie: mockMovie, isLoading: false });

    renderTestee();

    expect(screen.getByRole("link", {
      "name": "Back to search"
    })).toHaveAttribute("href", "/");
  });
});