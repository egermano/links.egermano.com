import React from 'react';

import './style.scss';

import obgLogo from '../images/bg-logo.png';

const Navbar = () => (
	<div className="hero-head is-hidden-mobile">
		<nav className="navbar">
			<div className="container">
				<div className="navbar-brand">
					<a
						className="navbar-item"
						href="/"
					>
						<img src={obgLogo} alt="obg-logo" />
					</a>
				</div>
				<div id="navbarMenuHeroA" className="navbar-menu">
					<div className="navbar-end">
						<span className="navbar-item">
							
						</span>
					</div>
				</div>
			</div>
		</nav>
	</div>
);

export default Navbar;
