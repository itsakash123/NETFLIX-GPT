import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions';
import logo from "/src/utils/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_large.jpg";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute w-full">
              <img className="w-full " src={logo} alt="Background" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
      
        <GptSearchBar />
        <GptMovieSuggestions/>
      
    </div>
  );
}

export default GPTSearch