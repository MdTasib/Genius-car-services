import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo-black.png";

const Header = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
			<div className='container'>
				<Link className='navbar-brand' to='/'>
					<img src={logo} alt='' height='24' />
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav ms-auto'>
						<li className='nav-item'>
							<Link className='nav-link active' aria-current='page' to='/home'>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<a
								className='nav-link active'
								aria-current='page'
								href='/home#services'>
								Services
							</a>
						</li>
						<li className='nav-item'>
							<a
								className='nav-link active'
								aria-current='page'
								href='/home/#experts'>
								Experts
							</a>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='about'>
								About
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='login'>
								Login
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
