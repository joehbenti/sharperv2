import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo from '../img/logo.png';
import Resume from '../img/Resume.pdf';
import '../style/navigation.css';

import Home from '../component/home';

import Contact from '../component/contact';
import About from '../component/about';
import Work from '../component/work';
import Blog from '../component/blog';

export default class Routes extends Component {
	render() {
		return (
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
							<Link to='/about' className='nav nav-link'>
								About
							</Link>

							<Link to='/work' className='nav nav-link'>
								Work
							</Link>

							<Link to='/contact' className='nav nav-link'>
								Contact
							</Link>
							<Link to='/blog' className='nav nav-link'>
								Blog
							</Link>
							<a
								href={Resume}
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
					<Route path='/about' component={About} />
					<Route path='/work' component={Work} />
					<Route path='/blog' component={Blog} />
					{/* <Route exact path='work/ltv' component={LtvProject} /> */}
					{/* <Route component={NotFound} /> */}
				</Switch>
			</Router>
		);
	}
}
