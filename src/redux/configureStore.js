import { configureStore } from "@reduxjs/toolkit";
import homepageSlice from "./homepageSlice";

const store = configureStore ({
    reducer: {
        homepage: homepageSlice
    }
})

export default store;