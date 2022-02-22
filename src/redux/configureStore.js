import { configureStore } from "@reduxjs/toolkit";
import homepageSlice from "./homepageSlice";
import addcardpageSlice from "./addcardpageSlice";
import apiSlice from "./apiSlice";

const store = configureStore ({
    reducer: {
        homepage: homepageSlice,
        addcard: addcardpageSlice,
        api: apiSlice,
        
    }
})

export default store;