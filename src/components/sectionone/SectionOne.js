import React from 'react';
import './SectionOne.css';
import HomeImage from '../../assets/home.png';

const SectionOne = () => {
	return (
		<div className='section-body'>
			<div className='container'>
				<h1>
					Find Your Best <br />
					Smart{' '}
					<span className='text-primary'>
						Real <br />
						Estate
					</span>
				</h1>
				<img src={HomeImage} alt='Home' />
			</div>
		</div>
	);
};

export default SectionOne;
