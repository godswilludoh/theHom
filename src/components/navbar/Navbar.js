import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/TheHomlogo.PNG';

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='logo'>
				<Link to='/'>
					<img src={Logo} alt='logo' />
				</Link>
			</div>
			<div>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
				<Link to='/service'>Service</Link>
				<Link to='/blog'>Blog</Link>
				<Link to='/contact'>Contact</Link>
				<button className='sign'>Sign</button>
			</div>
		</div>
	);
};

export default Navbar;
