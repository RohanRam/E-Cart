import { configureStore } from "@reduxjs/toolkit";
import productSlice from './productSlice'
import wishlistSlice from './wishlistSlice';
import cart from './cart'

const smartStore=configureStore({
    reducer:{

        productReducer:productSlice,
        wishlistReducer:wishlistSlice,
        cartReducer:cart 


    }
})

export default smartStore