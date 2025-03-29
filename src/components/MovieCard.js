import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterpath}) => {
  return (
    <div className=" min-w-[150px] md:min-w-[150px] lg:min-w-[150px] rounded-sm overflow-hidden cursor-pointer">
      <img
        alt="Movie Card"
        src={IMG_CDN_URL + posterpath}
        className="transform transition duration-300 ease-in-out hover:scale-125"
      />
    </div>
  );
}

export default MovieCard