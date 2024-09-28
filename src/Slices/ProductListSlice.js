import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:'Products',
    initialState:{
        ProductList:[],
        productIdData:["paras"],
        isLoading:false,
        hasMoreData:true,
        skipCount:0,
        previousSelectedCategory:"",
        searchTerm:"",
        selectedCategory:""


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
        },
        setHasMoreData:(state,action)=>{
            state.hasMoreData = action.payload;
        },
        setSkipCount:(state,action)=>{
            state.skipCount = action.payload;
        },
        setPreviousSelectedCategory:(state,action)=>{
            state.previousSelectedCategory = action.payload;
        },
        setSearchTerm:(state,action)=>{
            state.searchTerm = action.payload
        },
        setSelectedCategory:(state,action)=>{
            state.selectedCategory = action.payload;
        }
    }
})

// const [searchTerm, setSearchTerm] = useState('');
// const [selectedCategory, setSelectedCategory] = useState('');


export const  {setProductList,setproductIdData,setIsloading,setHasMoreData,setSkipCount,setPreviousSelectedCategory,setSearchTerm,setSelectedCategory}  = productSlice.actions;
export const  productreducer  = productSlice.reducer;;

