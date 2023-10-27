import { useEffect } from "react";
import MovieListing from "../movieListing/MovieListing";
import MovieApi from "../../common/apis/MovieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

const Home = () => {
  useEffect(() => {
    const MovieText = "Harry";
    const fetchMovies = async () => {
      const response = await MovieApi.get(
        `?apikey=${APIKey}&s=${MovieText}&type=movie`
      ).catch((err) => {
        console.log("ERR:", err);
      });
      console.log("The Api Response:", response);
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
