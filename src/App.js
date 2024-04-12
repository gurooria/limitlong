import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Title from './components/Title/Title'
import Mission from './components/Mission/Mission'
import Positions from './components/Positions/Positions'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <div className='container'>
        <Title title='Services'/>
        <Services/>
        <Mission/>
        <Title title='Past Positions'/>
        <Positions/>
      </div>

    </div>
  )
}

export default App
