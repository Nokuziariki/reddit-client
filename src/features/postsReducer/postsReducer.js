import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        list: [],
        isLoading: false,
        error: null
    },
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        postsLoaded: (state, action) => {
            state.list = action.payload;
            state.isLoading = false;
        },
        postsError: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export const { startLoading, postsLoaded, postsError } = postsSlice.actions;

export default postsSlice.reducer;
