import React from 'react'
import logo from '../img/logo.png'

function Header () {
  return (
    <header>
      <nav
        className='navbar navbar-expand-lg navbar-light bg-light'
        style={{ dispaly: 'flex' }}
      >
        <div className='jg-logo-div'>
          <a className='navbar-brand' href='#home-section'>
            <img className='jg-logo' src={logo} />
          </a>
        </div>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <div className='jg-item-bg'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item '>
                <a className='nav-link' href='#home-section'>
                  HOME
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  CART
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  CONTACT
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#' style={{ width: '200%' }}>
                  OTHER SERVICES
                </a>
              </li>
            </ul>
          </div>
          <div className='jg-header-icon'>
            <div>
              <a href='#'>
                <img src='https://img.icons8.com/windows/32/ffffff/user.png' />
              </a>
            </div>
            <div>
              <a href='#'>
                <img src='https://img.icons8.com/ios-glyphs/30/ffffff/search--v1.png' />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Header
