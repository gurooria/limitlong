import React from 'react'
import './Positions.css'
import { Link } from 'react-router-dom'

const Positions = () => {
  return (
    <div className='positions'>
      <div className='position'>
        <h1>Optiver</h1>
        <h2>2011 - 2016</h2>
        <p>Trader & In-house Trainer</p>
        <hr/>
      </div>
      <div className='position'>
        <h1>IMC</h1>
        <h2>2018 - 2021</h2>
        <p>Trader & In-house Trainer</p>
        <hr/>
      </div>
      <div className='position'>
        <h1>Maven</h1>
        <h2>2022 - 2023</h2>
        <p>Trader & In-house Trainer</p>
        <hr/>
      </div>
      <Link to='/about-me'>
        <div className='learn-more'>
          <h1>Learn More →</h1>
        </div>
      </Link>
    </div>
  )
}

export default Positions
