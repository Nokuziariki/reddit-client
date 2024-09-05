import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/searchReducer/searchReducer";
import postsReducer from "./features/postsReducer/postsReducer"

const store = configureStore({
    reducer: {
        search: searchReducer,
        posts: postsReducer
    }
});

export default store;