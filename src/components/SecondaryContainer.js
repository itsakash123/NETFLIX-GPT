import React from "react";
import MovieList from "../components/MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-[#141414]">
      <div className="-mt-52 relative z-20">
        <MovieList
          title="Now Playing Movies"
          movies={movies.nowPlayingMovies}
        />
        <MovieList title="Trending Movies" movies={movies.nowPlayingMovies} />
        <MovieList title="Top Rated Movies" movies={movies.topRatedMovies} />
        <MovieList title="Popular Movies" movies={movies.popularMovies} />
        <MovieList title="Upcoming Movies" movies={movies.upComingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
