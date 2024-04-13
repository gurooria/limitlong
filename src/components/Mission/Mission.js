import React from 'react'
import './Mission.css'
import teacher from '../../assets/Teacher1.jpg'

const Mission = () => {
  return (
    <div className='mission'>
      <div className='mission-left'>
        <img src={teacher} alt='' className='mission-img'/>
      </div>
      <div className='mission-right'>
        <h2>My Mission</h2>
        <p>
            During my role as educator in three market leading firms, 
            I saw it as my mission to organize and explain these basics to whoever requires them professionally, 
            but also to people unfamiliar to the business and even just the curious individual. 
            I spent years developing and hosting trading courses; for market makers and other prop firms, 
            but also at universities and investment associations. I developed a structured road map that doesn't 
            require any background in finance and accessible without a strong mathematical background. 
            Still it would be surprisingly new to the majority of any audience.
        </p>
        <a href="" class="read-more">Read more...</a>
      </div>
    </div>
  )
}

export default Mission
