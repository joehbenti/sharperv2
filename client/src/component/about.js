import React, { Component } from 'react';

import { Row, Col, Button, Modal } from 'react-bootstrap';
// import Link from 'react-router-dom/Link';

import Company from './companys';

// Tools logos
import AdobeXD from '../img/designStack/adobeXD.png';
import AndroidStudio from '../img/designStack/androidStudio.png';
import Illustrator from '../img/designStack/illustrator.png';
import Indesign from '../img/designStack/indesign.png';
import Intellij from '../img/designStack/intellij.png';
import Vscode from '../img/designStack/vsCode.png';
import Photoshop from '../img/designStack/photoshop.png';
import Cinema4d from '../img/designStack/cinema4d.png';
import Slack from '../img/designStack/slack.png';

// tech stack images
import JavascriptImg from '../img/techStack/javascript.png';
import Html from '../img/techStack/html.png';
import Css from '../img/techStack/css.png';
import Bootstrap from '../img/techStack/bootstrap4.png';
import Git from '../img/techStack/git.png';
import Jquery from '../img/techStack/jquery.png';
import Mongo from '../img/techStack/mongoDB.png';
import Node from '../img/techStack/nodejs.png';
import Npm from '../img/techStack/npm.png';
import ReactImg from '../img/techStack/react.png';
import Sass from '../img/techStack/sass.png';

export default class About extends Component {
	constructor() {
		super();
		this.state = {
			toolsModal: false,
			techStackModal: false,
		};
	}

	render() {
		const padding = {
			padding: '20px',
			marginTop: '40px',
		};

		const h1Style = {
			fontSize: '3em',
			display: 'inline-block',
		};

		const h3Style = {
			fontFamily: 'Quicksand',
			fontSize: '2.5em',
			color: '#bdbdbd',
			cursor: 'context-menu',
		};

		const mainText = {
			color: '#FFD000',
			fontFamily: 'Indie Flower',
		};

		const marginBottom = {
			marginBottom: '6%',
		};
		const marginBtn = {
			marginRight: '10px',
		};

		const tools = () => {
			this.setState({ toolsModal: true });
		};

		const techstack = () => {
			this.setState({ techStackModal: true });
		};

		const toolsCloseModal = () => this.setState({ toolsModal: false });
		const techStackCloseModal = () => this.setState({ techStackModal: false });
		return (
			<div style={padding}>
				<Modal
					// {...props}
					size='lg'
					aria-labelledby='contained-modal-title-vcenter'
					centered
					show={this.state.toolsModal}
					onHide={toolsCloseModal}
					className='fullscreen-modal'
				>
					<Modal.Body>
						<Row>
							<Col lg='4' md='4' sm='4' xs='4' className='company-images'>
								<img src={AdobeXD} alt='ltv' width='100%' />
							</Col>
							<Col lg='4' md='4' sm='4' xs='4' className='company-images'>
								<img src={AndroidStudio} alt='ltv' width='100%' />
							</Col>
							<Col lg='4' md='4' sm='4' xs='4' className='company-images'>
								<img src={Illustrator} alt='ltv' width='100%' />
							</Col>
							<Col lg='4' md='4' sm='4' xs='4' className='company-images'>
								<img src={Intellij} alt='ltv' width='100%' />
							</Col>
							<Col lg='4' md='4' sm='4' xs='4' className='company-images'>
								<img src={Photoshop} alt='ltv' width='100%' />
							</Col>
							<Col lg='4' md='4' sm='4' xs='4' className='company-images'>
								<img src={Vscode} alt='ltv' width='100%' />
							</Col>
							<Col lg='4' md='4' sm='4' xs='4' className='company-images'>
								<img src={Indesign} alt='ltv' width='100%' />
							</Col>
							<Col lg='4' md='4' sm='4' xs='4' className='company-images'>
								<img src={Cinema4d} alt='ltv' width='100%' />
							</Col>
							<Col lg='4' md='4' sm='4' xs='4' className='company-images'>
								<img src={Slack} alt='ltv' width='100%' />
							</Col>
						</Row>
					</Modal.Body>
				</Modal>
				<Modal
					// {...props}
					size='lg'
					aria-labelledby='contained-modal-title-vcenter'
					centered
					show={this.state.techStackModal}
					onHide={techStackCloseModal}
					className='fullscreen-modal'
				>
					<Modal.Body>
						<Row>
							<Col lg='4' md='4' sm='4' xs='4' className='company-images'>
								<img src={Bootstrap} alt='ltv' width='100%' />
							</Col>
							<Col lg='4' md='4' sm='4' xs='4' className='company-images'>
								<img src={Css} alt='ltv' width='100%' />
							</Col>
							<Col lg='4' md='4' sm='4' xs='4' className='company-images'>
								<img src={Git} alt='ltv' width='100%' />
							</Col>
							<Col lg='4' md='4' sm='4' xs='4' className='company-images'>
								<img src={Html} alt='ltv' width='100%' />
							</Col>
							<Col lg='4' md='4' sm='4' xs='4' className='company-images'>
								<img src={JavascriptImg} alt='ltv' width='100%' />
							</Col>
							<Col lg='4' md='4' sm='4' xs='4' className='company-images'>
								<img src={Jquery} alt='ltv' width='100%' />
							</Col>
							<Col lg='4' md='4' sm='4' xs='4' className='company-images'>
								<img src={Mongo} alt='ltv' width='100%' />
							</Col>
							<Col lg='4' md='4' sm='4' xs='4' className='company-images'>
								<img src={Node} alt='ltv' width='100%' />
							</Col>
							<Col lg='4' md='4' sm='4' xs='4' className='company-images'>
								<img src={Npm} alt='ltv' width='100%' />
							</Col>
							<Col lg='4' md='4' sm='4' xs='4' className='company-images'>
								<img src={ReactImg} alt='ltv' width='100%' />
							</Col>
							<Col lg='4' md='4' sm='4' xs='4' className='company-images'>
								<img src={Sass} alt='ltv' width='100%' />
							</Col>
						</Row>
					</Modal.Body>
				</Modal>
				<div style={marginBottom}>
					<div className='about-tools'>
						<h1 style={h1Style}>Selam, Akaam Jirtu, Greetings</h1>
						<div className='float-right float-xs-left'>
							<Button
								variant='outline-light'
								size='lg'
								style={marginBtn}
								onClick={tools}
							>
								Tools
							</Button>
							<Button variant='outline-light' size='lg' onClick={techstack}>
								Tech Stack
							</Button>
						</div>
					</div>
					<br />
					<br />
					<Row>
						<Col lg='6'>
							<div>
								<h3 style={h3Style}>
									My Name is Jote Hailu. I am a self-motivated self-taught{' '}
									<span style={mainText}>
										{' '}
										UI/UX obsessed front-end developer and designer
									</span>{' '}
									here in Addis Ababa/ Finfinne who loves working out and
									reading books especially non-fiction and autobiographies.{' '}
									<span style={mainText}>
										Currently I am working as CTO at Elnet Technology.
									</span>{' '}
									<br />
									<br />I am very passionate to solve problem and create
									experiences using technologies, after all that’s what life is
									- <span style={mainText}>GREAT EXPERIENCE</span>
									<br />
									<br />
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
