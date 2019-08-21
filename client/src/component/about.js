import React, { Component } from 'react';

import { Row, Col, Button, Modal } from 'react-bootstrap';
// import Link from 'react-router-dom/Link';

import Company from './companys';

// import AdobeXD from '../img/designStack/adobeXD.png';
// import AndroidStudio from '../img/designStack/androidStudio.png';
// import Illustrator from '../img/designStack/illustrator.png';
// import Indesign from '../img/designStack/indesign.png';
// import Intellij from '../img/designStack/intellij.png';
// import Vscode from '../img/designStack/vsCode.png';

export default class About extends Component {
	render() {
		const padding = {
			padding: '20px',
			marginTop: '40px'
		};

		const h1Style = {
			fontSize: '3em',
			display: 'inline-block'
		};

		const h3Style = {
			fontFamily: 'Quicksand',
			fontSize: '2.5em',
			color: '#707070',
			cursor: 'context-menu'
		};

		const mainText = {
			color: '#FFD000',
			fontFamily: 'Indie Flower'
		};

		const marginBottom = {
			marginBottom: '6%'
		};
		const marginBtn = {
			marginRight: '10px'
		};

		return (
			<div style={padding}>
				<Modal
					// {...props}
					size='lg'
					aria-labelledby='contained-modal-title-vcenter'
					centered
				>
					<Modal.Body>
						<h4>Logos Here</h4>
					</Modal.Body>
				</Modal>
				<div style={marginBottom}>
					<h1 style={h1Style}>Selam, Akaam Jirtu, Greetings</h1>
					<div className='float-right'>
						<Button
							variant='outline-light'
							size='lg'
							style={marginBtn}
							onClick={''}
						>
							Tools I use
						</Button>
						<Button variant='outline-light' size='lg' onClick={''}>
							Design/Tech Stack
						</Button>
					</div>
					<br />
					<br />
					<Row>
						<Col lg='6'>
							<div>
								<h3 style={h3Style}>
									I am a self-motivated self-thought full-time{' '}
									<span style={mainText}> UI/UX designer</span> at Kifiya
									Financial Technology living and working out of Addis Ababa,
									Ethiopia. Currently I am working on a{' '}
									<span style={mainText}>first-of-its-kind e-commerce </span>
									and <span style={mainText}>payment solution,</span> guiding
									the team on delivering an exceptional digital product. <br />
									<br />I am passionate to create an unforgettable experience
									digitally and in real life; after all that’s what life is. -{' '}
									<span style={mainText}>GREAT EXPERIENCE</span>
									<br />
									<br />
									When I am not developing experiences, <br />I am usually @ the{' '}
									<span style={mainText}>gym & reading.</span>
								</h3>
							</div>
						</Col>
						<Col lg='6'>
							<div className='aboutMe-mainImage' />
						</Col>
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
					{/* <Row>
						<Col lg='6' className='company'>
							<h1 style={h1Style}>Tools</h1>

							<Row>
								<Col lg='3' md='2' sm='3' xs='3' className='company-images'>
									<img src={AdobeXD} alt='ltv' width='100%' />
								</Col>
								<Col lg='3' md='2' sm='3' xs='3' className='company-images'>
									<img src={AndroidStudio} alt='ltv' width='100%' />
								</Col>
								<Col lg='3' md='2' sm='3' xs='3' className='company-images'>
									<img src={Illustrator} alt='ltv' width='100%' />
								</Col>
								<Col lg='3' md='2' sm='3' xs='3' className='company-images'>
									<img src={Intellij} alt='ltv' width='100%' />
								</Col>
								<Col lg='3' md='2' sm='3' xs='3' className='company-images'>
									<img src={Vscode} alt='ltv' width='100%' />
								</Col>
								<Col lg='3' md='2' sm='3' xs='3' className='company-images'>
									<img src={Indesign} alt='ltv' width='100%' />
								</Col>
							</Row>
						</Col>
						<Col lg='6'>
							<h1 style={h1Style}>Tech/Design Stack</h1>
						</Col>
					</Row> */}
				</div>
			</div>
		);
	}
}
