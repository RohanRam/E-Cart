import { createSlice } from "@reduxjs/toolkit";

        const wishlistSlice=createSlice({
            name:"mywishlist",
            initialState:[],
            reducers:{
                addTowishlist:(state,action)=>{
                    state.push(action.payload)
                },
                removeWishlistItem:(state,action)=>{
            
            
                    return state.filter(item=>item.id!=action.payload)
                }
            }
        })

    export const {addTowishlist,removeWishlistItem}=wishlistSlice.actions
    export default wishlistSlice.reducer