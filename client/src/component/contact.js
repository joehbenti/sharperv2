import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Social from './social';

export default class Contact extends Component {
	render() {
		const h1Style = {
			fontSize: '5em'
		};

		const h3Style = {
			fontFamily: 'Quicksand',
			fontSize: '3em',
			color: '#707070'
		};

		const formInput = {
			background: 'none',
			width: 'fit-content',
			marginBottom: '40px',
			border: 'none',
			borderBottom: '1px solid #ffd000',
			color: 'white',
			fontSize: '1.2em'
		};

		const emailInput = {
			background: 'none',
			width: '75%',
			marginBottom: '40px',
			border: 'none',
			borderBottom: '1px solid #ffd000',
			color: 'white',
			fontSize: '1.2em'
		};

		const dropStyle = {
			marginBottom: '50px',
			width: 'fit-content',
			background: 'none',
			border: 'none',
			borderBottom: '1px solid #ffd000'
		};

		return (
			<div className='parent-container'>
				<Row>
					<Col lg='6'>
						<h1 style={h1Style}>Lets talk/ሰላም</h1>
						<br />
						<br />
						<h3 style={h3Style}>
							Do you have an awesome idea which you want to bring it to life.
							Then holla at me. <br /> I love to hear from you.{' '}
						</h3>

						<br />
						<br />
						<h4>Lets do this. :-)</h4>
						{/* <Social /> */}
					</Col>

					<Col lg='6'>
						<Form>
							<Form.Control
								style={formInput}
								size='lg'
								type='text'
								placeholder='Whats your name?'
							/>
							<Form.Control
								style={emailInput}
								type='email'
								placeholder='Where can i reach you @email?'
							/>
							<Form.Control as='select' style={dropStyle} size='lg'>
								<option>Love your portfolio. I have a project for you.</option>
								<option>How much do you charge?</option>
							</Form.Control>
							<Button size='lg' variant='outline-warning'>
								Send Message
							</Button>
						</Form>
					</Col>
				</Row>
			</div>
		);
	}
}
