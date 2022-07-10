import React from 'react';
import './SectionTwo.css';
import { FaHouseUser } from 'react-icons/fa';
// import { GoLocation } from 'react-icons/Go';

const SectionTwo = () => {
	return (
		<div id='sectiontwo'>
			<div className='main-focus'>
				<div className='container2'>
					<h4>What We Do</h4>
					<h2>Our Main Focus</h2>

					<div className='cards-container'>
						<div className='cards'>
							<div className='home'>
								<FaHouseUser />
								<h2>Buy a Home</h2>
								<p>
									It is a long established fact that a render will be distracted
									readable content of a page
								</p>
								<button className='btn'>More</button>
							</div>
						</div>
						<div className='cards'>
							<div className='home'>
								<FaHouseUser />
								<h2>Rent a Home</h2>
								<p>
									It is a long established fact that a render will be distracted
									readable content of a page
								</p>
								<button className='btn'>More</button>
							</div>
						</div>
						<div className='cards'>
							<div className='home'>
								<FaHouseUser />
								<h2>Sell a Home</h2>
								<p>
									It is a long established fact that a render will be distracted
									readable content of a page
								</p>
								<button className='btn'>More</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='property'>
				<div className='container2'>
					<h4>Our Property</h4>
					<h2>Latest Property</h2>
					<div className='cards-container'>
						<div className='cards'>
							<div className='property-card'>
								<div className='property-text'>
									<h3>Duplex Apartment</h3>
									<h4>$140,000</h4>
								</div>
								<div className='property-location'>
									{/* <GoLocation /> */}
									<h3>Lagos, Nigeria</h3>
								</div>
							</div>
						</div>
						<div className='cards'>
							<div className='property-card'>
								<div className='property-text'>
									<h3>Duplex Apartment</h3>
									<h4>$140,000</h4>
								</div>
								<div className='property-location'>
									{/* <GoLocation /> */}
									<h3>Lagos, Nigeria</h3>
								</div>
							</div>
						</div>
						<div className='cards'>
							<div className='property-card'>
								<div className='property-text'>
									<h3>Duplex Apartment</h3>
									<h4>$140,000</h4>
								</div>
								<div className='property-location'>
									{/* <GoLocation /> */}
									<h3>Lagos, Nigeria</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionTwo;
