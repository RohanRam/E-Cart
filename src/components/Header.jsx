import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

import { useDispatch, useSelector } from 'react-redux';
import {searchProducts} from '../Redux/productSlice'





function Header({insideHome}) {

  const userWishlist=useSelector(state=>state.wishlistReducer)
  const cart=useSelector(state=>state.cartReducer)
  
  const dispatch = useDispatch()

  return (
    <>

    <Navbar expand="lg" className="bg- w-100 position-fixed top-0" style={{zIndex:'100',backgroundColor:'#9B7EBD'}}>
      <Container>
        <Navbar.Brand href="#home"> <Link className=' text-white text-decoration-none fs-3 logo'  to={'/'}> <i class="fa-solid fa-store"></i> smallBAZAAR  </Link>  </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">

            {insideHome &&
              <Nav.Link>
                <input type="text" onChange={e=>{dispatch(searchProducts(e.target.value.toLowerCase()))}} style={{width:'400px'}} className='rounded p-1 border border-white me-5' placeholder='Search Product '/>
            </Nav.Link>}

            <Nav.Link> <Link to={'/wishlist'} className='text-decoration-none'><i class="fa-solid fa-heart" style={{color:'white',fontSize:'25px'}}></i>  <Badge pill bg='dark'>{userWishlist?.length}</Badge> </Link> </Nav.Link>
            <Nav.Link> <Link to={'/cart'} className='text-decoration-none'><i class="fa-solid fa-shopping-bag" style={{color:'white',fontSize:'25px'}}></i>   <Badge pill bg='dark'>{cart?.length}</Badge></Link> </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default Header