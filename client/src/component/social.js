import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

export default class Social extends Component {
	render() {
		return (
			<div>
				<span className='social-media'>
					<a href='https://twitter.com/jotehbenti' target='_blanck'>
						<FontAwesome name='twitter' size='2x' />
						Twitter
					</a>
				</span>
				<span className='social-media'>
					<a
						href='https://www.facebook.com/sharpercreativestudio'
						target='_blanck'
					>
						<FontAwesome name='facebook' size='2x' />
						Facebook
					</a>
				</span>
				<span className='social-media'>
					<a href='https://www.instagram.com/_jbenti/' target='_blanck'>
						<FontAwesome name='instagram' size='2x' />
						Instagram
					</a>
				</span>
				<span className='social-media'>
					<a href='https://github.com/joehbenti' target='_blanck'>
						<FontAwesome name='github' size='2x' />
						Github
					</a>
				</span>
			</div>
		);
	}
}
