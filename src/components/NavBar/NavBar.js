import React, {useState} from 'react'
import './NavBar.css'
import logo from '../../assets/vin_logo.png'
import menu from '../../assets/menu-icon-navy.png'

const NavBar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
      mobileMenu? setMobileMenu(false): setMobileMenu(true);
  }
  return (
    <nav className='container'>
        <div className='logo-container'>
            <img src={logo} alt="" className='logo'/>
            <div className="logo-text">LIMIT LONG</div>
        </div>
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li>My Mission</li>
            <li>Services</li>
            <li>About Me</li>
            <li>Books</li>
            <li>Materials</li>
        </ul>
        <img src={menu} alt='' className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default NavBar
