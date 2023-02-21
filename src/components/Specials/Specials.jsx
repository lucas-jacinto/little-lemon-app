import React from 'react'
import salad from '../../assets/greek salad.jpg'
import bruchetta from '../../assets/bruchetta.svg'
import lemon from '../../assets/lemon dessert.jpg'
import delivery from '../../assets/basket .svg'
import './specials.css'

const Specials = () => {
  return (
    <section>
      <div className='main-specials'>
        <h1 className='h1-main'>This weeks specials!</h1>
        <div className='btn-special'>
          <button href='#' className='btn-specials'>Online Menu</button>
        </div>
      </div>
      <div className='card-specials'>
        <div className='cards'>
          <img src={salad} alt="greek salad image" />
          <h4>Greek salad </h4> <span>$12.99</span>

          <p>The famous greek salad of crispy lettuce, pepers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>

          <a href="#delivery">Order delivery <img src={delivery} alt="" /></a>
        </div>
        <div className='cards bru'>
          <img src={bruchetta} alt="greek salad image" />
          <h4>Greek salad <span>$12.99</span> </h4>
        </div>
        <div className='cards lemo'>
          <img src={lemon} alt="greek salad image" />
          <h4>Greek salad </h4> <span>$12.99</span>
        </div>
      </div>
    </section>

  )
}

export default Specials