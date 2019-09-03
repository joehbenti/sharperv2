import React, { Component } from 'react';
import '../style/footer.css';

import Social from './social';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

class Footer extends Component {
	render() {
		const padding = {
			padding: '22px'
		};
		return (
			<footer style={padding}>
				<Row>
					<Col>
						<DropdownButton
							variant='outline-secondary'
							title='Website Versions'
							id='input-group-dropdown-1'
						>
							<Dropdown.Item
								href='https://rocky-oasis-38718.herokuapp.com'
								target='_blanck'
							>
								Version 1
							</Dropdown.Item>
							<Dropdown.Item href='#'>This Version</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Item href='#'>V3 Coming Very Soon</Dropdown.Item>
						</DropdownButton>
					</Col>

					<Col>
						<Social />
					</Col>
				</Row>
			</footer>
		);
	}
}

export default Footer;
