import React, { Component } from 'react';
import '../style/home.css';
import Feature_image from '../img/me.png';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class Home extends Component {
	render() {
		const h1Style = {
			fontSize: '5em'
		};

		const h3Style = {
			fontFamily: 'Quicksand',
			fontSize: '3em',
			color: '#707070'
		};

		const mainText = {
			color: '#FFD000'
		};

		const paddingDiv = {
			marginTop: '100px'
		};

		const meBg = {
			backgroundImage: `url(${Feature_image})`,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'right',
			backgroundBlendMode: 'multiply',
			backgroundSize: 'contain',
			stroke: '#FFD000',
			marginBottom: '20px'
		};

		return (
			<div style={meBg}>
				<div className='parent-container'>
					<Row>
						<Col lg='7'>
							<h1 style={h1Style}>
								Front-End Developer & <br />
								Brand Consultant
							</h1>
							<br />
							<br />
							<h3 style={h3Style}>
								I am a <span style={mainText}>multi-disciplinary</span> designer
								with a focus on{' '}
								<span style={mainText}>human centered design</span> both
								digitally and in the real world.
							</h3>
							<div style={paddingDiv}>
								<Button variant='outline-warning' size='lg'>
									Let's work together
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
