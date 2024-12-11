import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



        export const fetchProducts=createAsyncThunk('products/fetchProducts',async()=>{
            const result= await axios.get('https://dummyjson.com/products')
            localStorage.setItem("products",JSON.stringify(result.data.products))
            return result.data.products;
            
        })

        const productSlice=createSlice({
            name:"products",
            initialState:{
                allProducts:[],
                pending:false,
                dummyAllProducts:[],
                error:""

            },
            reducers:{

                searchProducts:(state,action)=>{
                    state.allProducts=state.dummyAllProducts.filter(pro=>pro.title.toLowerCase().includes(action.payload))
                }



            },
            extraReducers:
                (builder)=>{
                    builder.addCase(fetchProducts.fulfilled,(state,action)=>{
                        state.allProducts=action.payload
                        state.dummyAllProducts=action.payload

                        state.pending=false
                        state.error=""
                    })
                    builder.addCase(fetchProducts.pending,(state,action)=>{
                        state.allProducts=[]
                        state.pending=true
                        state.error=""
                    })
                    builder.addCase(fetchProducts.rejected,(state,action)=>{
                        state.allProducts=[]
                        state.pending=false
                        state.error="API CALL FAILED! "
                    })
                }

            

        })

export default productSlice.reducer
export const {searchProducts}=productSlice.actions