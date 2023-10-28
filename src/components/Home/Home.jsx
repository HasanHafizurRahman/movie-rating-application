import { useEffect } from "react";
import MovieListing from "../movieListing/MovieListing";
import MovieApi from "../../common/apis/MovieApi";
import { APIKey } from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../feature/movies/movieSlice";

const Home = () => {
  const MovieText = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await MovieApi.get(
        `?apikey=${APIKey}&s=${MovieText}&type=movie`
      ).catch((err) => {
        console.log("ERR:", err);
      });
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
