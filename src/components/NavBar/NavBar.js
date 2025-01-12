import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/vin_logo.png";
import menu from "../../assets/menu-icon-navy.png";

const NavBar = () => {
	const [mobileMenu, setMobileMenu] = useState(false);
	const toggleMenu = () => {
		mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
	};
	return (
		<nav className="container">
			<div className="logo-container">
				<Link to="/">
					<img src={logo} alt="" className="logo" />
				</Link>
				<Link to="/">
					<div className="logo-text">LIMITLONG</div>
				</Link>
			</div>
			<ul className={mobileMenu ? "" : "hide-mobile-menu"}>
				<li>
					<Link to="my-mission" className="menu-btn">
						My Mission
					</Link>
				</li>
				<li>
					<Link to="services" className="menu-btn">
						Services
					</Link>
				</li>
				<li>
					<Link to="about-me" className="menu-btn">
						About Me
					</Link>
				</li>
				<li>
					<Link to="books" className="menu-btn">
						Books
					</Link>
				</li>
				<li>
					<Link to="materials" className="menu-btn">
						Materials
					</Link>
				</li>
			</ul>
			<img src={menu} alt="" className="menu-icon" onClick={toggleMenu} />
		</nav>
	);
};

export default NavBar;
