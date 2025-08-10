import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        isOpen: false
    },
    reducers: {
        toggleGpt: (state,action) => {
            state.isOpen = !state.isOpen
        }
    }
})

export const {toggleGpt} = gptSlice.actions
export default gptSlice.reducer;