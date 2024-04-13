import React from 'react'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import Title from '../components/Title/Title'
import Mission from '../components/Mission/Mission'
import Positions from '../components/Positions/Positions'
import Testimonials from '../components/Testimonials/Testimonials'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Hero/>
      <div className='container'>
        <Title title='Services'/>
        <Services/>
        <Mission/>
        <Title title='Past Positions'/>
        <Positions/>
        <Title title='Testimonials'/>
        <Testimonials/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
