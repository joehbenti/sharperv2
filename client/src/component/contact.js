import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import * as emailjs from 'emailjs-com';

// import Social from './social';

export default class Contact extends Component {
	constructor(props) {
		super();
		this.state = {
			email: '',
			subject: '',
			message: '',
		};
	}
	inputChange = (e) => this.setState({ [e.target.name]: e.target.value });

	submit = (e) => {
		e.preventDefault();

		const { email, subject, message } = this.state;

		let templateParams = {
			from_name: email,
			to_name: 'joehbenti@gmail.com',
			subject: subject,
			message_html: message,
		};

		emailjs.send(
			'gmail',
			'template_G1aEguEA',
			templateParams,
			'user_FhN21AI3o0hivH6honAzo'
		);

		this.resetForm();
	};

	resetForm() {
		this.setState({
			email: '',
			subject: '',
			message: '',
		});
	}

	render() {
		const h1Style = {
			fontSize: '5em',
		};

		const h3Style = {
			fontFamily: 'Quicksand',
			fontSize: '3em',
			color: '#bdbdbd',
		};

		const formInput = {
			background: 'none',
			width: 'fit-content',
			marginBottom: '40px',
			border: 'none',
			borderBottom: '1px solid #ffd000',
			color: 'white',
			fontSize: '1.2em',
		};

		const emailInput = {
			background: 'none',
			width: '75%',
			marginBottom: '40px',
			border: 'none',
			borderBottom: '1px solid #ffd000',
			color: 'white',
			fontSize: '1.2em',
		};

		// const dropStyle = {
		// 	marginBottom: '50px',
		// 	width: 'fit-content',
		// 	background: 'none',
		// 	border: 'none',
		// 	borderBottom: '1px solid #ffd000'
		// };

		return (
			<div className='parent-container'>
				<Row>
					<Col lg='6'>
						<h1 style={h1Style}>Lets talk/ሰላም</h1>
						<br />
						<br />
						<h3 style={h3Style}>
							Do you have an awesome idea which you want to bring it to life. I
							love to work on new & exciting ideas.
							<br />{' '}
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
								value={this.state.subject}
								name='subject'
								onChange={this.inputChange}
								placeholder='Subject'
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
								style={emailInput}
								as='textarea'
								rows='5'
								value={this.state.message}
								onChange={this.inputChange}
								name='message'
								placeholder='Your message here'
							/>
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
