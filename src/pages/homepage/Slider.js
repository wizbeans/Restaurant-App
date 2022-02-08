import React from 'react'
import SliderItem from './SliderItem'
import img from './SliderImagesContent'
import food1 from '../../img/sliderImages/food1.jpg'
import food2 from '../../img/sliderImages/food2.jpg'
import food3 from '../../img/sliderImages/food3.jpg'
import './header-footer-slider.css'


function CreateSlide(newSlide) {
  return (
    <SliderItem
      src1={newSlide.src1}
      src2={newSlide.src2}
      src3={newSlide.src3}
    />
  )
}
function Slider() {
  return (
    <div className='slider-carouse'>
      <div id='carouselExampleIndicators' class='carousel sz-slider scontainer' data-ride="carousel">
        <div class='carousel-inner' >
          <div className='carousel-item active l' style={{ marginTop: 103,marginBottom:30, paddingRight: 15, paddingLeft: 15 }}>
            <div style={{ display: 'flex' }}>
              <div className='mx-auto'>
                <img
                  className='d-block w-100 img-responsive'
                  height='100%'
                  style={{ paddingLeft: 30, paddingRight: 30 }}
                  src={food1}
                />
              </div>
              <div className='mx-auto'>
                <img
                  className='d-block w-100 img-responsive'
                  height='100%'
                  style={{ paddingLeft: 30, paddingRight: 30 }}
                  src={food2}

                />
              </div>
              <div className='mx-auto'>
                <img
                  className='d-block w-100 img-responsive'
                  height='100%'
                  style={{ paddingLeft: 30, paddingRight: 30 }}
                  src={food3}
                />
              </div>
            </div>
          </div>
          {img.map(CreateSlide)}
        </div>
        <div class='carousel-control-prev '
        >
          <a
            class='cs-arrow '
            href='#carouselExampleIndicators'
            role='button'
            data-slide='prev'
          >
            <span class='carousel-control-prev-icon' aria-hidden='true'></span>
          </a>
        </div>
        <div className='carousel-control-next'>
        <a
          class=' cs-arrow'
          href='#carouselExampleIndicators'
          role='button'
          data-slide='next'
          >
          <span class='carousel-control-next-icon' aria-hidden='true'></span>
        </a>
          </div>
      </div>
    </div>
  )
}

export default Slider;
