import './variety.css'
import { continental } from './continental'
import { chinese } from './chinese'
import { dessert } from './dessert'
import { north } from './north'
import { south } from './south'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Slider from './Slider'

const Variety = () => {
  const [content, setContent] = useState(continental)
  function handleContinental () {
    setContent(continental)
  }
  function handleChinese () {
    setContent(chinese)
  }
  function handleNorth () {
    setContent(north)
  }
  function handleSouth () {
    setContent(south)
  }
  function handleDessert () {
    setContent(dessert)
  }
  return (
    <div>
      <Slider/>
      <div className=' select'>
        <div className='select-inner' onClick={handleContinental}>
          Continental
        </div>
        <div className='select-inner' onClick={handleChinese}>
          Chinese
        </div>
        <div className='select-inner' onClick={handleNorth}>
          North Indian
        </div>
        <div className='select-inner' onClick={handleSouth}>
          South Indian
        </div>
        <div className='select-inner' onClick={handleDessert}>
          Desserts
        </div>
      </div>
      <div style={{marginLeft:50,marginRight:50}}>
        <div className='row row-cols-1 row-cols-md-3 g-4 m-3'>
          {content.map(info => (
            <div className='col'>
              <div className='card h-100 align-items-center ssb-bg'>
                <img
                  style={{
                    objectFit: 'cover',
                    width: '143px',
                    height: '215px',
                    borderTopLeftRadius: '15px',
                    borderBottomLeftRadius: '15px'
                  }}
                  src={info.img}
                  class='card-img-top'
                  alt='...'
                />
                <div className='card-body d-flex flex-column justify-content-between ssb-content'>
                  <h5 className='card-title fw-bold fs-2'>{info.variety}</h5>
                  <p class='fst-italic'>{info.desc.slice(0, 500 )}</p>
                  <p className='card-text'>{info.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=''>
        <NavLink to="/cart "className='cart-button '>Go To Cart</NavLink>
      </div>
    </div>
  )
}

export default Variety
