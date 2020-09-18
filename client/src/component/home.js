import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/home.css';

import { bounceInLeft } from 'react-animations';
import styled, { keyframes } from 'styled-components';

// import Feature_image from '../img/me.png';

import { Row, Col, Button } from 'react-bootstrap';

class Home extends Component {
	componentWillMount() {
		// reveals the website - with animation
	}

	render() {
		const paddingDiv = {
			marginTop: '50px',
		};

		const BounceLeft = styled.div`
			animation: 1.5s ${keyframes`${bounceInLeft}`};
		`;

		const BounceService = styled.div`
			animation: 2s ${keyframes`${bounceInLeft}`};
		`;

		return (
			<div className='mebg'>
				<div className='parent-container'>
					<BounceLeft>
						<Row>
							<Col lg='7'>
								<h1 className='h1Style'>
									Front-End Developer <br /> & Brand Consultant
								</h1>
								<br />
								<br />
								<h3 className='h3Style'>
									I am a pro-active self-taught{' '}
									<span className='mainText'>multi-disciplinary</span> designer
									with a focus on{' '}
									<span className='mainText'>human centered design.</span>{' '}
								</h3>
								<div>
									<h3>Services</h3>
									<BounceService>
										<p>
											{/* <ul style={listStyle}> */}
											<li className='listStyle'>
												<span className='services'>Branding</span>
												<span className='services'>Web/Mobile Dev</span>
												<span className='services'>Graphics Design</span>
												<span className='services'>
													Social Media Management
												</span>
											</li>
											{/* </ul> */}
										</p>
									</BounceService>
								</div>
								<div style={paddingDiv}>
									<Button variant='outline-warning' size='lg'>
										<Link to='/contact' className='contactLink'>
											{/* <span role='img' arial-role='click me'>
												👉
											</span>{' '} */}
											Let's work together
										</Link>
									</Button>
								</div>
							</Col>
						</Row>
					</BounceLeft>
				</div>
			</div>
		);
	}
}

export default Home;
