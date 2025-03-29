import React from "react";

import { useDispatch, useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { PiSpeakerHighDuotone, PiSpeakerHighLight } from "react-icons/pi";


import { togglemuteVideo } from "../utils/muteBackgroundVideoSlice";




//fetch trailer video and updating the store with trailer video data
const VideoBackground = ({ movieId }) => {
  const dispatch=useDispatch();
 
   
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId); 
  const handleMuteandUnmute = () => {
    console.log("Icon clicked!");
    dispatch(togglemuteVideo());
  };
  
  return (
    <div className=" absolute top-0 left-0 w-screen  -z-10 ">
      <iframe
        className="w-screen  aspect-video overflow-hidden object-cover"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <div className=" w-screen  aspect-video absolute inset-0 bg-gradient-to-r from-black"></div>
      
      
    </div>
  );
};

export default VideoBackground;
