import React, { useEffect } from "react";
import { API_options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  
 
   
  const dispatch = useDispatch(null);
  
    const getMoviesVideos = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
        API_options
      );
      const json = await data.json();
      
  
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[1] : json.results[0];
      
      dispatch(addTrailerVideo(trailer));
    };
    useEffect(() => {
      getMoviesVideos();
    }, []);
  };

export default  useMovieTrailer;
