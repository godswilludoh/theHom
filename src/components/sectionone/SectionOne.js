import React from 'react';
import './SectionOne.css';
import HomeImage from '../../assets/home.png';

const SectionOne = () => {
	return (
		<div id='section-body'>
			<div className='container'>
				<div className='home-text'>
					<h1>
						Find Your Best <br />
						Smart{' '}
						<span className='text-primary'>
							Real <br />
							Estate
						</span>
					</h1>
				</div>
				<div className='image'></div>

				{/* <img src={HomeImage} alt='Home' /> */}
			</div>
		</div>
	);
};

export default SectionOne;
