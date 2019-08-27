import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// import Social from './social';

export default class Contact extends Component {
	constructor(props) {
		super();
		this.state = {
			name: '',
			email: '',
			option: ''
		};
	}
	inputChange = e => this.setState({ [e.target.name]: e.target.value });

	submit = e => {
		e.preventDefault();
		console.log('clicked');
		fetch('', {
			method: 'POST',
			body: JSON.stringify({
				name: this.state.name,
				email: this.state.email,
				option: this.state.option
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(response => {
			if (response.status === 200) {
				console.log('it is working');
			} else {
				console.log('server error');
			}
		});
	};

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
						<Form onSubmit={this.submit}>
							<Form.Control
								style={formInput}
								size='lg'
								type='text'
								value={this.state.name}
								name='name'
								onChange={this.inputChange}
								placeholder='Whats your name?'
							/>
							<Form.Control
								style={emailInput}
								type='email'
								value={this.state.email}
								onChange={this.inputChange}
								name='email'
								placeholder='Where can i reach you @email?'
							/>
							<Form.Control
								as='select'
								style={dropStyle}
								size='lg'
								name='option'
								value={this.state.option}
								onChange={this.inputChange}
							>
								<option>Love your portfolio. I have a project for you.</option>
								<option>How much do you charge?</option>
								<option></option>
							</Form.Control>
							<Button size='lg' variant='outline-warning' type='submit'>
								Send Message
							</Button>
						</Form>
					</Col>
				</Row>
			</div>
		);
	}
}
