import React from 'react'
import './nav.css'

const Nav = () => {
  return (
    <nav className='top'>
      <div className='logo'>

      </div>
      <ul className='icons'>
        <li>
          <a href='#home'>HOME</a>
          <a href='#about'>ABOUT</a>
          <a href='#menu'>MENU</a>
          <a href='#reserve'>RESERVATIONS</a>
          <a href='#order'>ORDER ONLINE</a>
          <a href='#login'>LOGIN</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav