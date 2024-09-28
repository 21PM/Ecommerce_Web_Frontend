import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:'Products',
    initialState:{
        ProductList:[],
        isLoading:false,
    },
    reducers:{
        setProductList:(state,action)=>{
            state.ProductList = action.payload;
        },
        setIsloading:(state,action)=>{
            state.isLoading = action.payload;
        }
    }
})


export const  {setProductList,setIsloading}  = productSlice.actions;
export const  productreducer  = productSlice.reducer;;

