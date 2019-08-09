import React, { Component } from 'react';
// import Link from 'react-router-dom';

// import Ltv from '../projects/ltv.html';
export default class Work extends Component {
	render() {
		return (
			<div className='work-mian-container'>
				<div className='work-project'>
					<div className='work-relative-container ltv-img'>
						<div>
							<img
								src='https://image.flaticon.com/icons/svg/63/63337.svg'
								alt='TV Branding'
								width='50px'
								className='project-icons'
							/>
							<h1>LTV </h1>

							<a href='/projects/ltv.html'>View Project</a>
						</div>
					</div>
				</div>
				<div className='work-project'>
					<div className='work-relative-container mela-img'>
						<div>
							<img
								src='https://image.flaticon.com/icons/svg/114/114734.svg'
								alt='Front-End Development'
								width='50px'
								className='project-icons'
							/>
							<h1>Mela: Remit to Pay </h1>
							<a href='/projects/mela.html'>View Project</a>
						</div>
					</div>
				</div>
				<div className='work-project'>
					<div className='work-relative-container onekoo'>
						<div>
							<img
								src='https://image.flaticon.com/icons/svg/679/679720.svg'
								alt='Front-End Development'
								width='50px'
								className='project-icons'
							/>
							<h1>Onekoo Coffee</h1>
							<a href='/projects/onekoo.html'>View Project</a>
						</div>
					</div>
				</div>
				<div className='work-project'>
					<div className='work-relative-container stgiorgis-img'>
						<div>
							<img
								src='https://image.flaticon.com/icons/svg/977/977411.svg'
								alt='Front-End Development'
								width='50px'
								className='project-icons'
							/>
							<h1>St. Giorgis FC </h1>
							<a href='/projects/redCross.html'>View Project</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
