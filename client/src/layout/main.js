import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo from '../img/logo.png';
import '../style/navigation.css';

import Home from '../component/home';

export default class Main extends Component {
	render() {
		return (
			<div className='container-fluid'>
				<Router>
					<Navbar
						bg='light'
						className='row navbar navbar-light bg-light justify-content-between'
						collapseOnSelect
					>
						<Navbar.Brand>
							<img src={Logo} width='80' height='80' alt='Logo' />{' '}
							<Link to='/' className='brand-name'>
								Joe H. Benti
							</Link>
						</Navbar.Brand>
						<Navbar.Toggle />
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
									href={'#'}
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
						{/* <Route path='/about' component={About} />
						<Route path='/work' component={Service} />
						<Route path='/contact' component={Mentor} />
						<Route component={NotFound} /> */}
					</Switch>
				</Router>
			</div>
		);
	}
}
