import React from 'react'
import table from '../../assets/images/little-empty-supermarket-cart.jpg';
// import Subtitle from '../Utility/Subtitle/Subtitle'

const HeroCart = () => {
  return (
    <div className='heroCart_section'>
    <img src={table} alt='' />
      <h3 className='titleCart'>shopping cart</h3>
    </div>
  )
}

export default HeroCart