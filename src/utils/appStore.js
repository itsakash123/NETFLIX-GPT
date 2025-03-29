import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer  from "./movieSlice"
import gptReducer  from"./gptSlice";
import MuteVideoReducer from "./muteBackgroundVideoSlice"
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    MuteUnmuteVideo: MuteVideoReducer,
  },
});
export default appStore;