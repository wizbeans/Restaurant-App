import React from 'react'
import './homepage/header-footer-slider.css'

function Footer () {
  return (
    <footer id='contact-section'>
      <div className='jg-contact'>
        <div className='jg-contact-flex-div'>
          <h3>CONTACT</h3>
          <div className='jg-contact-us-icons'>
            <div>
              <p>ABC- abc@gmail.com</p>
              <p> (+123 456 789) </p>
            </div>
            <div>
              <p>DEF- def@gmail.com</p>
              <p> (+123 456 789) </p>
            </div>
          </div>
        </div>
        <div className='jg-contact-flex-div jg-reach-us'>
          <h3>REACH US</h3>
          <div>
            <a href='https://www.facebook.com/'>
              <img src='https://img.icons8.com/ios-glyphs/30/000000/facebook-new.png' />
            </a>
          </div>
          <div>
            <a href='https://www.instagram.com/'>
              <img src='https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png' />
            </a>
          </div>
          <div>
            <a href='https://www.youtube.com/'>
            <img src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png"/>
            </a>
          </div>
        </div>
        <div className='jg-contact-flex-div'>
          <h3>COPYRIGHT</h3>
          <p>Team TECHNOCRATS </p>
          <p>(Netaji Subhash University of Technology)</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
