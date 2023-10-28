import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../feature/movies/movieSlice";
import MovieCard from "../movieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  console.log("movies:", movies);
  const shows = useSelector(getAllShows);
  console.log("shows:", shows);

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {movies.Response === "True" ? (
            movies.Search.map((movie, index) => (
              <MovieCard key={index} data={movie}></MovieCard>
            ))
          ) : (
            <div className="movies-error">
              <h3>{movies.Error}</h3>
            </div>
          )}
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
          {shows.Response === "True" ? (
            shows.Search.map((movie, index) => (
              <MovieCard key={index} data={movie} />
            ))
          ) : (
            <div className="shows-error">
              <h3>{shows.Error}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
