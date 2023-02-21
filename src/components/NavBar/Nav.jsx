import React from 'react'
import './nav.css'
import logo from '../../assets/Logo.svg'

const Nav = () => {
  return (
    <nav>

      <div className='top'>

        <div className='logo'>
          <img src={logo} alt="logo little lemon" />
        </div>

        <div className='icons'>
              <a href='#home'>Home</a>
              <a href='#about'>About</a>
              <a href='#menu'>Menu</a>
              <a href='#reserve'>Reservtions</a>
              <a href='#order'>Order Online</a>
              <a href='#login'>Login</a>
        </div>
      </div>
    </nav>
  )
}

export default Nav