import { configureStore } from "@reduxjs/toolkit";
import homepageSlice from "./homepageSlice";
import addcardpageSlice from "./addcardpageSlice";

const store = configureStore ({
    reducer: {
        homepage: homepageSlice,
        addcard: addcardpageSlice
    }
})

export default store;