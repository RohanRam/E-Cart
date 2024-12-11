import { createSlice } from "@reduxjs/toolkit";


const cart=createSlice({

    name:"mycart",
    initialState:[],

    reducers:{
      addCartItem:(state,action)=>{
          
            const existingproduct=state.find(item=>item.id==action.payload.id)


            if(existingproduct){

              const remainingProduct=state.filter(item=>item.id!=existingproduct.id)
              existingproduct.quantity++

              existingproduct.totalprice=existingproduct.quantity*existingproduct.price
              state=[...remainingProduct,existingproduct]

            }
              else{

                state.push({...action.payload,quantity:1,totalprice:action.payload.price})
              }
           
        },

        remove:(state,action)=>{
          return state.filter(item=>item.id!=action.payload)

        },
        inQuantity:(state,action)=>{
          const existingProduct=state.find(item=>item.id==action.payload)
          existingProduct.quantity++
          existingProduct.totalprice=existingProduct.quantity*existingProduct.price
          const remainingProducts=state.filter(item=>item.id!=existingProduct.id)
          state=[...remainingProducts,existingProduct]
      },
      decQuantity:(state,action)=>{
          const existingProduct=state.find(item=>item.id==action.payload)
          existingProduct.quantity--
          existingProduct.totalprice=existingProduct.quantity*existingProduct.price
          const remainingProducts=state.filter(item=>item.id!=existingProduct.id)
          state=[...remainingProducts,existingProduct]
        },
            emptyCart:(state)=>{

              return state=[]
            }
    }


})
 
export const {addCartItem,remove,inQuantity,decQuantity,emptyCart}=cart.actions

export default cart.reducer