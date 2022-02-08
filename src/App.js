import React from 'react'
import './App.css'
import Header from './components/header/Header.js'
import Footer from './components/footer/Footer'
import Slider from './pages/homepage/Slider'
import Review from './pages/review_page/Review.jsx'
import Variety from './pages/homepage/Variety'
import WriteReview from './pages/review_page/WriteReview.jsx'
import { Reviews } from './pages/review_page/Reviews.jsx'
import Cart from './pages/Cart/Cart.js'
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import Login from './pages/login/login.js'
import Register from './pages/register/register.js'
// import Home from './pages/home.js'
import Contact from './pages/contact/contact'


function App () {
const user=localStorage.getItem("token")
  return (
    <>
    <Router>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Variety/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/review" element={<Review/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Register/>}/>
          <Route path="/contact" element={<Contact/>}/>

        </Routes>
      </main>
      <Footer />
    </Router>
  </>
  )
}

export default App
