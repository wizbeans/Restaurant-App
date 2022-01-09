import React from 'react'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Slider from './components/homepage/Slider'
import Review from './components/review_page/Review.jsx'
import Variety from './components/homepage/Variety'

function App () {
  return (
    <div id='home-section'>
      <Header />
      {/* <br/>
    <Slider/>
    <Variety/> */}
      <Review />
      <br/>
      <Footer />
    </div>
  )
}

export default App
