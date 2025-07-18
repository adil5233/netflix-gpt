import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    taggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { taggleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;
