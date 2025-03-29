import { createSlice } from "@reduxjs/toolkit";

const muteBackgroundVideo = createSlice({
  name: "MuteUnmuteVideo",
  initialState: {
    muteVideo: false,
  },
  reducers: {
    togglemuteVideo: (state) => {
      state.muteVideo = !state.muteVideo;
    },
  },
});

export const { togglemuteVideo } = muteBackgroundVideo.actions;
export default muteBackgroundVideo.reducer;
