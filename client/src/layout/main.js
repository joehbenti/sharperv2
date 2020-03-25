import React, { Component } from 'react';

import Routes from '../route/Routes';
import Footer from '../component/footer';

export default class Main extends Component {
	render() {
		return (
			<React.Fragment>
				<div className='container-fluid custom-body'>
					<Routes />
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}
