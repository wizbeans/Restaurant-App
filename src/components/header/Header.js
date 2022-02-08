import React from 'react'
// import logo from '../img/logo.png'
import logo from '../logo.png'
import './header.css'
import {NavLink} from 'react-router-dom';
import './header.css'
function Header () {
  return (
    <header>
      <nav
        className='navbar navbar-expand-lg navbar-light bg-light'
        style={{ dispaly: 'flex' }}
      >
        <div className='jg-logo-div'>
          <NavLink to="/"className='navbar-brand'>
            <img className='jg-logo' src={logo} />
          </NavLink>
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
                <NavLink to="/"className='nav-link' >
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  About 
                </a>
              </li>
              <li className='nav-item'>
                <NavLink to="/review" className='nav-link'>
                  Reviews
                </NavLink>
                
              </li>
              <li className='nav-item'>
                <NavLink to="/contact"className='nav-link' style={{ width: '200%' }}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='jg-header-icon'>
            <div>
              <NavLink to="/login">
                <img src='https://img.icons8.com/windows/32/ffffff/user.png' />
              </NavLink>
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
