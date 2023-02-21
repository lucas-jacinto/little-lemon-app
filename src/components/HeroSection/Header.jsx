import React from 'react'
import './header.css'
import logo2 from '../../assets/restauranfood.jpg'

const Header = () => {
  return (
    <header className='hero-header'>
      <div className='hero'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditionl recipes served with a modern twist.</p>
        <button className='btn-header'>Reserve a Table
        </button>
      </div>
      <div className='img-header'>
        <img src={logo2} alt="" />
      </div>
    </header>
  )
}

export default Header