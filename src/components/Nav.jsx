import React from 'react'
import './nav.css'

const Nav = () => {
  return (
    <nav className='top'>
      <div className='logo'>

      </div>
      <div className='icons'>
        <a href='#menu'>Menu</a>
        <a href='#services'>Services</a>
        <a href='#table'>Reserve a table</a>
        <a href='#about'>About </a>
      </div>
    </nav>
  )
}

export default Nav