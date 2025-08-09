import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        movies: null,
        trailer: null,
        popularMovies: null
    },
    reducers: {
        addMovies: (state, action) => {
            state.movies = action.payload
        },
        addTrailer: (state,action) => {
            state.trailer = action.payload
        },
        addPopularMovies: (state,action)=> {
            state.popularMovies = action.payload
        }
    }
})

export const {addMovies, addTrailer, addPopularMovies} = movieSlice.actions
export default movieSlice.reducer