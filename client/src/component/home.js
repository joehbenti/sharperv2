import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/home.css';

import { bounceInLeft } from 'react-animations';
import styled, { keyframes } from 'styled-components';

// import Feature_image from '../img/me.png';

import { Row, Col, Button } from 'react-bootstrap';

class Home extends Component {
	render() {
		const h1Style = {
			fontSize: '4em'
		};

		const h3Style = {
			fontFamily: 'Quicksand',
			fontSize: '3em',
			color: 'white',
			marginBottom: '60px'
		};

		const mainText = {
			color: '#FFD000',
			fontFamily: 'Indie Flower'
		};

		const paddingDiv = {
			marginTop: '50px'
		};

		const listStyle = {
			listStyle: 'none',
			display: 'inline-block',
			color: 'white',
			fontSize: '1.5em',
			paddingLeft: '0'
		};

		// const liStyle = {
		// 	display:
		// }

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
								<h1 style={h1Style}>
									Front-End Developer <br /> & Brand Consultant
								</h1>
								<br />
								<br />
								<h3 style={h3Style}>
									I am a self-thought{' '}
									<span style={mainText}>multi-disciplinary</span> designer with
									a focus for{' '}
									<span style={mainText}>human centered design.</span>{' '}
								</h3>
								<div>
									<h3>Services</h3>
									<BounceService>
										<p>
											{/* <ul style={listStyle}> */}
											<li style={listStyle}>
												Website Dev, Android Dev, Consulting & Branding
											</li>
											{/* </ul> */}
										</p>
									</BounceService>
								</div>
								<div style={paddingDiv}>
									<Button variant='outline-warning' size='lg'>
										<Link to='/contact' className='contactLink'>
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
