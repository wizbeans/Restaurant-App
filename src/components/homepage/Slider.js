import React from 'react'
import SliderItem from './SliderItem'
import img from './SliderImagesContent'
import food1 from '../../img/sliderImages/food1.jpg'
import food2 from '../../img/sliderImages/food2.jpg'
import food3 from '../../img/sliderImages/food3.jpg'
import './header-footer-slider.css'

function CreateSlide (newSlide) {
  return (
    <SliderItem
      src1={newSlide.src1}
      src2={newSlide.src2}
      src3={newSlide.src3}
    />
  )
}
function Slider () {
  return (
    <div>
      <div id='carouselExampleIndicators' class='carousel sz-slider' data-ride="carousel">
        <div class='carousel-inner'>
          <div className='carousel-item active '>
            <div style={{ display: 'flex' }}>
              <div className='mx-auto'>
                <img
                  className='d-block w-100 img-responsive'
                  height='95%'
                  src={food1}
                />
              </div>
              <div className='mx-auto'>
                <img
                  className='d-block w-100 img-responsive'
                  height='95%'
                  src={food2}
                />
              </div>
              <div className='mx-auto'>
                <img
                  className='d-block w-100 img-responsive'
                  height='95%'
                  src={food3}
                />
              </div>
            </div>
          </div>
          {img.map(CreateSlide)}
        </div>
        <a
          class='carousel-control-prev carousel-control-btn'
          href='#carouselExampleIndicators'
          role='button'
          data-slide='prev'
        >
          <span class='carousel-control-prev-icon' aria-hidden='true'></span>
      
        </a>
        <a
          class='carousel-control-next carousel-control-btn'
          href='#carouselExampleIndicators'
          role='button'
          data-slide='next'
        >
          <span class='carousel-control-next-icon' aria-hidden='true'></span>
   
        </a>
      </div>
    </div>
  )
}

export default Slider
