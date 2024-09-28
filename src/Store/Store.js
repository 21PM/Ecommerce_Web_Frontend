import { configureStore } from "@reduxjs/toolkit";
import { productreducer } from "../Slices/ProductListSlice";

const store = configureStore({
    reducer:{
        products:productreducer,
    }
})


export default store;