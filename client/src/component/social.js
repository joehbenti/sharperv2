import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

export default class Social extends Component {
	render() {
		return (
			<div>
				<span className='social-media'>
					<a href='https://twitter.com/jotehbenti' target='_blanck'>
						<FontAwesome name='twitter' />
					</a>
				</span>
				<span className='social-media'>
					<a
						href='https://www.facebook.com/sharpercreativestudio'
						target='_blanck'
					>
						<FontAwesome name='facebook' />
					</a>
				</span>
				<span className='social-media'>
					<a href='https://www.instagram.com/_jbenti/' target='_blanck'>
						<FontAwesome name='instagram' />
					</a>
				</span>
				<span className='social-media'>
					<a href='https://github.com/joehbenti' target='_blanck'>
						<FontAwesome name='github' />
					</a>
				</span>
			</div>
		);
	}
}
