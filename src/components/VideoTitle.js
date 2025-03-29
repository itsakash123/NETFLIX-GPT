 import React from 'react'
 import { FaPlay } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
import { PiSpeakerHighDuotone, PiSpeakerHighLight } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { togglemuteVideo } from "../utils/muteBackgroundVideoSlice";

 const VideoTitle = ({title,overview}) => {
  const dispatch=useDispatch();
  const handleMuteandUnmute = () => {
      console.log("Icon clicked!");
      dispatch(togglemuteVideo());
    };
    
   return (
     <div className="relative w-full h-screen aspect-video flex items-center bg-cover bg-center ">
       {/* Content Section */}
       <div className="relative z-10 max-w-2xl px-6 sm:px-12 text-white">
         {/* Netflix Series Label */}
         <h3 className="text-red-600 text-lg font-bold">N SERIES</h3>

         {/* Show Title */}
         <h1 className="text-6xl font-extrabold uppercase leading-tight mt-2">
           {title}
         </h1>

         {/* Overview */}
         <h2 className="text-xl font-semibold mt-4">
           This Week: New Episodes Daily
         </h2>
         <p className="text-lg mt-2">{overview}</p>

         {/* Buttons */}
         <div className="flex space-x-4 mt-6">
           <button className="bg-white text-black px-8 py-2.5 rounded-md text-lg  font-semibold flex items-center cursor-pointer hover:opacity-70">
             <FaPlay /> Play
           </button>
           <button className="bg-[#4E4E4E] text-white px-8 py-2.5 rounded-md text-lg font-semibold flex items-center cursor-pointer hover:opacity-60">
             <BsInfoCircle /> <span className="ml-2"> More Info</span>
           </button>
           <div className="absolute top-100 right-40 z-50 flex items-center justify-center rounded-full border border-white bg-opacity-50 p-3  cursor-pointer">
             <PiSpeakerHighDuotone
               className="text-white "
               onClick={handleMuteandUnmute}
             />
           </div>
         </div>
       </div>
     </div>
   );
 }
 
 export default VideoTitle


 