import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { decQuantity, emptyCart, inQuantity, remove } from '../Redux/cart'




function Cart() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userCart = useSelector(state => state.cartReducer)

  const [totalCartItem, setTotalCartItem] = useState(0)
  const [totalCartAmount, setTotalCartAmount] = useState(0)
  useEffect(() => {
    if (userCart?.length > 0) {
      setTotalCartItem(userCart.length)
      setTotalCartAmount(userCart.map(pro => pro.totalprice).reduce((t1, t2) => t1 + t2))

    }
  }, [userCart])



  console.log(totalCartAmount);

  const handleDecrementQuantity = (product) => {
    if (product.quantity > 1) {
      dispatch(decQuantity(product.id))
    }
    else {
      dispatch(remove(product.id))
    }
  }

  const checkout = () => {
    dispatch(emptyCart())
    alert("your order has been placed successfully ")
    navigate('/')

  }

  const handleEmptyCart=()=>{
    dispatch(emptyCart()) 
    alert("CART EMPTIED SUCESSFULLY")
    navigate('/')  

  }

  return (

    <>
    <Header />
    <div style={{ marginTop: '150px' }} className="container-fluid p-5">
    <h2>Cart Summary</h2>

{
      userCart?.length>0 ?
      
      
      
    <div className="row">
    <div className="col-8">
    
    <table className='table ' >
            <thead>
              <tr >
                <th>#</th>
                <th>Title</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>price</th>
                <th>...</th></tr>
            </thead>
            {
               userCart.map(product=>(


<tbody>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td><img src={product.thumbnail} style={{height:'60px'}} alt="" /></td>
              <td>  
                <button  onClick={()=>dispatch(inQuantity(product.id))}><i class="fa-solid fa-plus"></i></button >
                 <input className='border border-white' type="text" readOnly style={{width:'30px'}} value={product.quantity}/> 
                <button onClick={()=>handleDecrementQuantity(product)}><i class="fa-solid fa-minus"></i></button>
              </td>
              <td>{product.totalprice.toFixed(2)}</td>
              <td><i  onClick={()=>dispatch(remove(product.id))} className="fa-solid fa-trash" style={{color:'red'}}></i></td>
            </tbody>
    



               ))

                 
            }
          </table>
    <div className='div d-flex justify-content-end '><button onClick={handleEmptyCart} className='btn btn-danger' >Empty cart</button>
    </div>
    
    </div>
    <div className="col-4">
         <div  className='shadow p-2'>
    
          <h5>Total items:<span className='text-danger'>  {totalCartItem} </span></h5>
    
          <h4>total amount: <span className='text-danger'> $ {totalCartAmount.toFixed(2)}</span></h4>
          <button onClick={()=>checkout()} className='btn btn-info w-100 p-2'>Check Out!</button>
         </div>
        </div>
    
        </div>
      
      
      
      :

       <div><img src="https://tse2.mm.bing.net/th?id=OIP.D6W-oBbXwD0xSNp6XInukQAAAA&pid=Api&P=0&h=180" alt="" />
       </div>

       


}
       
</div>
    </>

  )
}

export default Cart