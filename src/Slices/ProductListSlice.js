import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:'Products',
    initialState:{
        ProductList:[],
        productIdData:["paras"],
        isLoading:false,
    },
    reducers:{
        setProductList:(state,action)=>{
            state.ProductList = action.payload;
        },
        setIsloading:(state,action)=>{
            state.isLoading = action.payload;
        },
        setproductIdData:(state,action)=>{
            state.productIdData = action.payload;
        }
    }
})


export const  {setProductList,setproductIdData,setIsloading}  = productSlice.actions;
export const  productreducer  = productSlice.reducer;;

