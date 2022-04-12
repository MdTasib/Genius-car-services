import React from "react";
import logo from "../../../images/logo-black.png";

const Header = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<div className='container-fluid'>
				<a class='navbar-brand' href='#'>
					<img src={logo} alt='' height='24' />
				</a>
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
							<a className='nav-link active' aria-current='page' href='#'>
								Home
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								Features
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								Pricing
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link disabled'>Disabled</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
