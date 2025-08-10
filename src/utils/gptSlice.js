import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        isOpen: false,
        gptMoviesData : null,
        moviesName: null
    },
    reducers: {
        toggleGpt: (state,action) => {
            state.isOpen = !state.isOpen
        },
        addGptMovies: (state,action) => {
            const {moviesName, moviesData} = action.payload
            state.gptMoviesData = moviesData;
            state.moviesName = moviesName
        }
    }
})

export const {toggleGpt, addGptMovies} = gptSlice.actions
export default gptSlice.reducer;