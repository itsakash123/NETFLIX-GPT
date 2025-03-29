import React, { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies = [] }) => {
  const [showArrow, setShowArrow] = useState(false);
  const sliderRef = useRef(null);

  // Function to scroll left
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: sliderRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="px-4 py-4 relative"
      onMouseEnter={() => setShowArrow(true)}
      onMouseLeave={() => setShowArrow(false)}
    >
      <h1 className="text-white text-xl font-bold mb-3">{title}</h1>

      {/* Movie Cards Container */}
      <div
        ref={sliderRef}
        className="flex space-x-2 overflow-x-scroll scrollbar-hide scroll-smooth"
      >
        {movies &&
          movies.map((movie) => (
            <MovieCard key={movie.id} posterpath={movie.poster_path} />
          ))}
      </div>

      {/* Left & Right Arrows (Appear on Hover) */}
      {showArrow && (
        <>
          <button
            onClick={scrollLeft}
            className="absolute top-1/2 -translate-y-1/2 left-6 flex items-center justify-center 
        size-10 bg-black/25 hover:bg-black/50 text-white rounded-full z-30 cursor-pointer"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={scrollRight}
            className="absolute top-1/2 -translate-y-1/2 right-6 flex items-center justify-center 
        size-10 bg-black/25 hover:bg-black/50 text-white rounded-full z-30 cursor-pointer"
          >
            <FaChevronRight />
          </button>
        </>
      )}
    </div>
  );
};

export default MovieList;
