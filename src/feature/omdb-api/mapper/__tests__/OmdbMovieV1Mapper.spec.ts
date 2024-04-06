import {createOmdbMovieV1Mock} from "../../model/__mocks__/OmdbMovieV1.mock";
import {OmdbMovieV1Mapper} from "../OmdbMovieV1Mapper";

describe('OmdbMovieV1Mapper', () => {
    describe('toMovie', () => {
        it('should map OmdbMovieV1 to Movie', () => {
            const Title = "Hubba the movie";
            const Year = "2021";
            const Runtime = "120 min";
            const Genre = "Comedy";
            const Director = "John Doe";
            const Actors = "Hubba, Bubba";
            const Plot = "A movie about Hubba";
            const Poster = "http://hubba.com/poster.jpg";
            const imdbRating = "11/10";
            const imdbVotes = "1000";
            const imdbID = "tt1234567";

            // Arrange
            const omdbMovie = createOmdbMovieV1Mock({
                Title,
                Year,
                Runtime,
                Genre,
                Director,
                Actors,
                Plot,
                Poster,
                imdbRating,
                imdbVotes,
                imdbID
            });

            // Act
            const result = OmdbMovieV1Mapper.toMovie(omdbMovie);

            // Assert
            expect(result.title).toEqual(Title);
            expect(result.year).toEqual(Year);
            expect(result.runtime).toEqual(Runtime);
            expect(result.genre).toEqual(Genre);
            expect(result.director).toEqual(Director);
            expect(result.actors).toEqual(['Hubba', 'Bubba']);
            expect(result.plot).toEqual(Plot);
            expect(result.imageUrl).toEqual(Poster);
            expect(result.imdbRating).toEqual(imdbRating);
            expect(result.imdbVotes).toEqual(imdbVotes);
            expect(result.imdbID).toEqual(imdbID);
        });
    });
});