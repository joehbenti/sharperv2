import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/home.css';

// import Feature_image from '../img/me.png';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class Home extends Component {
	render() {
		const h1Style = {
			fontSize: '4em'
		};

		const h3Style = {
			fontFamily: 'Quicksand',
			fontSize: '3em',
			color: '#707070',
			marginBottom: '60px'
		};

		const mainText = {
			color: '#FFD000'
		};

		const paddingDiv = {
			marginTop: '50px'
		};

		const listStyle = {
			listStyle: 'none',
			display: 'inline-block',
			color: '#707070',
			fontSize: '1.5em',
			paddingLeft: '0'
		};

		// const liStyle = {
		// 	display:
		// }

		return (
			<div className='mebg'>
				<div className='parent-container'>
					<Row>
						<Col lg='7'>
							<h1 style={h1Style}>
								Front-End Developer <br /> & Brand Consultant
							</h1>
							<br />
							<br />
							<h3 style={h3Style}>
								I am a self-thought{' '}
								<span style={mainText}>multi-disciplinary</span> designer with a
								focus for <span style={mainText}>human centered design.</span>{' '}
							</h3>
							<div>
								<h3>Services</h3>
								<p>
									<ul style={listStyle}>
										<li>Website Dev, Android Dev, Consulting & Branding</li>
									</ul>
								</p>
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
				</div>
			</div>
		);
	}
}

export default Home;
