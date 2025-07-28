import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    volumeMute: true,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addVolumeMute: (state) => {
      state.volumeMute = !state.volumeMute;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo, addVolumeMute } =
  moviesSlice.actions;
export default moviesSlice.reducer;
