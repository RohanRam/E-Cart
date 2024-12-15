import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux/productSlice';

import Spinner from 'react-bootstrap/Spinner'
import Pagination from './../components/Pagination';
import Button from 'react-bootstrap/Button';

import { Toaster, toast } from 'sonner'






function Home() {

  const {allProducts,loading,error}= useSelector(state=>state.productReducer)
  const [currentPage,setCurrentPage]=useState(1)
  const [cardPerPage,setCardPerPage]=useState(6)

  const dispatch = useDispatch()
  useEffect(() => {

    dispatch(fetchProducts())
   
  }, [])

  let endingIndex=currentPage*cardPerPage
  let startingIndex=endingIndex-cardPerPage
  let currentPost=allProducts.slice(startingIndex,endingIndex)

  
  return (
    <>

      <Header insideHome={true} />
      <Toaster richColors   position="top-center" />


      <div style={{ marginTop: '150px' }} className="container-fluid">

      {
        loading ?

        <div style={{justifyContent:'center'}}>
          <Spinner animation="border" variant="danger" />
        </div>
        :

        <Row className='mt-5 d-flex justify-content-center'>
        {   
            currentPost?.length>0?
            currentPost.map(product=>(
              <Col key={product?.id} xl={3} lg={4} md={6} sm={12} className='mb-2 me-2' >

                <Card className='m-3' style={{ width: '18rem',backgroundColor:'#D4BEE4' }}>
                  <Card.Img height={'250px'} variant="top" src={product.thumbnail} />
                    <Card.Body>
                      <Card.Title className='text-center fw-bold'>{product.title.slice(0,15)}</Card.Title>
                        <div className='text-center'>
                          <Link className='text-decoration-none text-success' style={{fontWeight:'500'}} to={`/view/${product?.id}`}>View More</Link>
                        </div>
                    </Card.Body>
                </Card>

                

              </Col>))

              :
              <div className='text-center mt-5 text-success fw-bold'>NOTHING TO DISPLAY</div>
          
        }
        </Row>
      }

      {
              currentPost?.length>0 &&
               <Pagination totalp={allProducts.length} totalc={cardPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            }

      </div>


    </>
  )
}
export default Home