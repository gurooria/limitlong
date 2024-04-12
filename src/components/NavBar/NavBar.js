import React from 'react'
import './NavBar.css'
import logo from '../../assets/vin_logo.png'

const NavBar = () => {
  return (
    <nav className='container'>
        <div className='logo-container'>
            <img src={logo} alt="" className='logo'/>
            <div className="logo-text">LIMIT LONG</div>
        </div>
        <ul>
            <li>My Mission</li>
            <li>Services</li>
            <li>About Me</li>
            <li>Books</li>
            <li>Materials</li>
        </ul>
    </nav>
  )
}

export default NavBar
