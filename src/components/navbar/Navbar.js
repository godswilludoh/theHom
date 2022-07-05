import React from 'react';
import './Navbar.css';

const Navbar = () => {
	return (
		<div id='navbar'>
			<div className='logo'>
				<a to='#'>
					<div className='logo'>
						<span>The</span>
						<span className='text-primary'>Hom</span>
					</div>
				</a>
			</div>
			<div className='link-menu'>
				<a href='#'>Home</a>
				<a href='#'>About</a>
				<a href='#'>Service</a>
				<a href='#'>Blog</a>
				<a href='#'>Contact</a>
			</div>

			<button className='btn'>SIGN</button>
		</div>
	);
};

export default Navbar;
