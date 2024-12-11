import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Footer from './components/Footer'
import View from './pages/View'
import Header from './components/Header'


function App() {
  

  return (
    <>
     
     <Header />

      <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Cart />} path="/cart" />
            <Route element={<Wishlist />} path="/wishlist" />
            <Route element={<View/>} path="/view/:id" />


            
            <Route element={<Navigate to={'/'}/>} path='/*' />


      </Routes>

      <Footer/>
    </>
  )
}

export default App
