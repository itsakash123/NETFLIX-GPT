import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';
const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGptSearch);
     useNowPlayingMovies();
     usePopularMovies();
     useTopRatedMovies()
     useUpcomingMovies()
     
  return (
    <div>
      <Header/>
      {showGPTSearch ? (
          <GPTSearch/>
          ) :(
          <>
          <MainContainer/>
          <SecondaryContainer/>
          </>
         
          
        )
      }
      
    

      {/* 
      Main Character 
        -VideoBackground
        -Video Title

      Secondary Container
        -MoviesList * n
            -cards * n
      */}
    </div>
  );
}

export default Browse