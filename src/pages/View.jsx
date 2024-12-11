import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addTowishlist } from '../Redux/wishlistSlice';
import { addCartItem } from '../Redux/cart'



function View() {

  const dispatch=useDispatch()

const [product,setProduct]=useState({})
const {id}=useParams()

const cart=useSelector(state=>state.cartReducer)


const handleCart=()=>{


  const existingProduct=cart.find(item=>item.id==product.id)
  if(existingProduct){
    alert("Item already in CART")
  
    dispatch(addCartItem(product))
  }
  else{dispatch(addCartItem(product))
  
  }
    }

  useEffect(() => {

    if(localStorage.getItem("products")){
      const allProducts=JSON.parse(localStorage.getItem("products"))
      console.log(allProducts);
      setProduct(allProducts.filter(item=>item.id==Number(id)) [0])
     }
  
  },[])

  const userWishlist=useSelector(state=>state.wishlistReducer)
  
  
  const handleWishlist=()=>{

    console.log("WI 1");
    

    if(userWishlist?.includes(product)){
      
      alert("Item already in WishList")
      console.log("WI 2");


  }
  else{
      dispatch(addTowishlist(product))
      console.log("WI 3");

  }
  };


  return (
    <>
    
    <Header/>

    <div className="row p-5 " style={{marginTop:'100px'}}>

        <div className="col-lg-1"></div>

        <div className="col-lg-4 d-flex ">
            <img src={product?.thumbnail} alt="" />
        </div>

        <div className="col-lg-1"></div>

        <div className="col-lg-6  ">

        <h5 className='text-secondary' style={{marginTop:'50px'}}>Product ID: <span>{product?.id}</span> </h5>
        <h1>{product.title}</h1>
        <h2 className='text-danger'>$ {product?.price}</h2>
        <p className='text-align-justify'>{product?.description} </p>

             <div className="d-flex justify-content-start align items-center">
                    <button onClick={handleWishlist} style={{color:'red'}} className='btn btn-outlined me-3'> Wishlist <i class="fa-solid fa-heart-circle-plus "></i> </button>
                    <button onClick={handleCart} style={{color:'green'}} className='btn btn-outlined me-3' >Cart <i class="fa-solid fa-cart-plus "></i> </button>
             </div>


        </div>

    </div>
    
    
    </>
  )
}

export default View