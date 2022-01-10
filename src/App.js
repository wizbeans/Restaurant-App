import React from 'react'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Slider from './components/homepage/Slider'
import Review from './components/review_page/Review.jsx'
import Variety from './components/homepage/Variety'
import WriteReview from './components/review_page/WriteReview.jsx'
import { Reviews } from './components/review_page/Reviews.jsx'

function App () {
  return (
    <div id='home-section'>
      <Header />
      {/* <br/>
    <Slider/>
    <Variety/> */}
      <Review />
      <br/>
      <WriteReview/>
      <br/>
      <Reviews/>
      <br/>
      <Footer />
    </div>
  )
}

export default App
