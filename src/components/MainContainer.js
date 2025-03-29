import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer=()=>{
    const movies=useSelector((store)=>store.movies?.nowPlayingMovies);

    if(!movies) return;

    const onemainMovie=movies[0];
    console.log(onemainMovie);

    const {original_title,overview,id}=onemainMovie;
      return (
        <div className="relative z-10 bg-black/80 pb-50">
          <VideoTitle title={original_title} overview={overview} />
          <VideoBackground movieId={id} className="" />
        </div>
      );
}
export default MainContainer;