import React from 'react'
import Header from '../components/Header'

import { Col, Row } from 'react-bootstrap'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { removeWishlistItem } from '../Redux/wishlistSlice';
import { addCartItem } from '../Redux/cart';
 

function Wishlist() {

  const dispatch = useDispatch()
  const userWishlist = useSelector(state => state.wishlistReducer)

  const usercart = useSelector(state => state.cartReducer)

  console.log(userWishlist);

  const handlecart = (product) => {
    const existingProduct = usercart.find(item => item.id == product.id)

    if (existingProduct) {
      alert("product quantity incremented")
      dispatch(addCartItem(product))
      dispatch(removeWishlistItem(product.id))

    }
    else {
      dispatch(addCartItem(product))
      dispatch(removeWishlistItem(product.id))
    }
  }

  return (
    <>

      <Header />

      <div style={{ marginTop: '150px' }} className="container-fluid p-5">

        <h3 className='text-danger'>MY WISHLIST</h3>
        <Row className='mt-5 d-flex justify-content-center'>
          {
            userWishlist?.length > 0 ?
            userWishlist.map(item=>(
            

          <Col xl={3} lg={4} md={6} sm={12} className='mb-2 me-2' >


            <Card style={{ width: '18rem',backgroundColor:'#D4BEE4'}}>
              <Card.Img height={'250px'} variant="top" src={item.thumbnail} />
              <Card.Body>
                <Card.Title className='text-center fw-bold'>{item.title}</Card.Title>
                <div className='d-flex justify-content-center'>

                  <button onClick={()=>dispatch(removeWishlistItem(item?.id))} style={{ fontSize: '20px', color: 'red',backgroundColor:'#F4F6FF' }} className='btn btn-outlined me-3'> <i class="fa-solid fa-heart-circle-xmark"></i></button>
                  <button onClick={()=>handlecart(item)} className='btn btn-outlined me-3' style={{backgroundColor:'#F5F5F7' }}> <i class="fa-solid fa-cart-plus text-success"></i> </button>

                </div>
              </Card.Body>
            </Card>


          </Col>
            ))
            :
            <div className='text-success'>EMPTY CART LIST</div>


          }
        </Row>

      </div>
    </>
  )
}

export default Wishlist