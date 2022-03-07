import { configureStore } from "@reduxjs/toolkit";
import homepageSlice from "./homepageSlice";
import apiSlice from "./apiSlice";

const store = configureStore ({
    reducer: {
        homepage: homepageSlice,       
        api: apiSlice,
        
    }
})

export default store;