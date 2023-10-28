import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIKey } from "../../common/apis/MovieApiKey";

import MovieApi from "../../common/apis/MovieApi";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const MovieText = "Harry";
    const response = await MovieApi.get(
      `?apikey=${APIKey}&s=${MovieText}&type=movie`
    );
    return response.data;
  }
);

const initialState = {
  movies: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fullfilled");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;

export default movieSlice.reducer;
