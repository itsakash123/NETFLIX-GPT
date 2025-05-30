import { API_options } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
const useTopRatedMovies = () => {
  //fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_options
    );
    const json = await data.json();
    
    

    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};
export default useTopRatedMovies;
