import React, { Component } from 'react';

import { Row, Col } from 'react-bootstrap';
// import Link from 'react-router-dom/Link';

import Company from './companys';

export default class About extends Component {
	render() {
		const padding = {
			padding: '20px',
			marginTop: '40px'
		};

		const h1Style = {
			fontSize: '4em'
		};

		const h3Style = {
			fontFamily: 'Quicksand',
			fontSize: '2.5em',
			color: '#707070'
		};

		const mainText = {
			color: '#FFD000'
		};

		const marginBottom = {
			marginBottom: '10%'
		};

		return (
			<div style={padding}>
				<div style={marginBottom}>
					<Row>
						<Col lg='6'>
							<h1 style={h1Style}>Hi There</h1>

							<br />
							<br />
							<h3 style={h3Style}>
								I am a self-motivated self learning full-time{' '}
								<span style={mainText}> UI/UX designer</span> at Kifiya
								Financial Technology living and working out of Addis Ababa,
								Ethiopia. Currently I am working on a{' '}
								<span style={mainText}>first-its-kind e-commerce </span>
								and payment solution, guiding the team on delivering an
								exceptional digital product. <br />
								<br />I am passionate to create an unforgettable experience
								digitally and in real life; after all that’s what life is. -{' '}
								<span style={mainText}>GREAT EXPERIENCE</span>
								<br />
								<br />
								When I am not developing exceptional experiences, I am usually @
								the <span style={mainText}>gym & reading.</span>
							</h3>
						</Col>
						<Col lg='6'>Pic here</Col>
					</Row>
				</div>
				<div style={marginBottom}>
					<Row>
						<h1 style={h1Style}>Company I have worked with</h1>
						<Col lg='12'>
							<Company />
						</Col>
					</Row>
				</div>

				<div style={marginBottom}>
					<Row>
						<Col lg='6'>
							<h1 style={h1Style}>Tech Stack</h1>

							<br />
							<br />
						</Col>
						<Col lg='6'>
							<h1 style={h1Style}>Design Stack</h1>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}
