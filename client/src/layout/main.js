import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo from '../img/logo.png';
import '../style/navigation.css';

import Home from '../component/home';
import Footer from '../component/footer';
import Contact from '../component/contact';

export default class Main extends Component {
	render() {
		const mainTitle ={
			color: '#ffd000'
		}
		return (
			<React.Fragment>
				<div className='container-fluid custom-body'>
					<Router>
						<Navbar expand='lg' collapseOnSelect>
							<Navbar.Brand>
								<img
									src={Logo}
									width='80'
									height='80'
									alt='Logo'
									className='brand-img'
								/>{' '}
								<Link to='/' className='brand-name'>
									Joe H. Benti
								</Link>
							</Navbar.Brand>
							<Navbar.Toggle aria-controls='basic-navbar-nav' />
							<Navbar.Collapse className='justify-content-end'>
								<Nav>
									<Link to='/service' className='nav nav-link'>
										About
									</Link>

									<Link to='/work' className='nav nav-link'>
										Work
									</Link>

									<Link to='/contact' className='nav nav-link'>
										Contact
									</Link>
									<a
										href={Logo}
										target='_blank'
										rel='noopener noreferrer'
										className='nav nav-link'
									>
										Resume
									</a>
								</Nav>
							</Navbar.Collapse>
						</Navbar>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route path='/contact' component={Contact} />
							{/* <Route path='/work' component={Service} />
						<Route path='/contact' component={Mentor} />
						<Route component={NotFound} /> */}
						</Switch>
					</Router>
				</div>

				<Footer />
			</React.Fragment>
		);
	}
}
