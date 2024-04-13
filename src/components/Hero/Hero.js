import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-text'>
        <h1>
            Thoroughly understanding market dynamics, 
            pricing and execution is indispensable to thrive in the sector. Therefore,
            <span class="highlight"> professional education</span> is key.
        </h1>
        <p>
            My name is Vincent Vis and I've spent some time trading and teaching at leading proprietary trading firms.
            I provide customized programs for professionals and private clients.
        </p>
          <button className='btn-white'>
            <Link to='/my-mission'>
              Learn More<img src={dark_arrow} alt=""/>
            </Link>
          </button>
      </div>
    </div>
  )
}

export default Hero
