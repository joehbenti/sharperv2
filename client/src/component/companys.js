/* eslint-disable no-useless-concat */
import React, { Component } from 'react';

import { Row, Col } from 'react-bootstrap';

import ltv from '../img/logos/ltv.png';
import cbo from '../img/logos/cbo.png';
import kifiya from '../img/logos/kifiya.png';
import stgeorge from '../img/logos/stgeorge.png';
import redcross from '../img/logos/redcross.png';
import efda from '../img/logos/efda.png';
import ocfcu from '../img/logos/ocfcu.png';
import psi from '../img/logos/psi.png';
import bonna from '../img/logos/bonna.png';
import onekoo from '../img/logos/onekoo.png';
import fili from '../img/logos/fili.png';
import elnet from '../img/logos/elnet.png';
// add logo of  bonna, ogeto, onekoo, maya,

export default class companys extends Component {
	render() {
		return (
			// for listing companys i have worked with
			<React.Fragment>
				<Row className='company'>
					<Col lg='2' md='2' sm='4' xs='6' className='company-images'>
						<img src={ltv} alt='ltv' width='100%' />
					</Col>
					<Col lg='2' md='2' sm='4' xs='6' className='company-images'>
						<img src={cbo} alt='Cooperative Bank of Oromia' width='100%' />
					</Col>
					<Col lg='2' md='2' sm='4' xs='6' className='company-images'>
						<a href={'//' + 'www.kifiya.com'} target='_blanck'>
							<img
								src={kifiya}
								alt='Kifiya Financial Technology'
								width='100%'
							/>
						</a>
					</Col>
					<Col lg='2' md='2' sm='4' xs='6' className='company-images'>
						<img src={stgeorge} alt='St Giogis FC' width='100%' />
					</Col>
					<Col lg='2' md='2' sm='4' xs='6' className='company-images'>
						<img src={redcross} alt='Ethiopia Red Cross' width='100%' />
					</Col>
					<Col lg='2' md='2' sm='4' xs='6' className='company-images'>
						<a href={'//' + 'www.education4devt.com'} target='_blanck'>
							<img
								src={efda}
								alt='Education for Development Association'
								width='100%'
							/>
						</a>
					</Col>
					<Col lg='2' md='2' sm='4' xs='6' className='company-images'>
						<a href={'//' + 'www.oromiacoffeeunion.org.com'} target='_blanck'>
							<img src={ocfcu} alt='Oromia coffee farmers union' width='100%' />
						</a>
					</Col>
					<Col lg='2' md='2' sm='4' xs='6' className='company-images'>
						<img src={psi} alt='PSI' width='100%' />
					</Col>
					<Col lg='2' md='2' sm='4' xs='6' className='company-images'>
						<img src={bonna} alt='Bonna Coffee' width='100%' />
					</Col>
					<Col lg='2' md='2' sm='4' xs='6' className='company-images'>
						<a
							href={'//' + 'www.oromiacoffeeunion.org/onekoo-coffee.com'}
							target='_blanck'
						>
							<img src={onekoo} alt='Bonna Coffee' width='100%' />
						</a>
					</Col>
					<Col lg='2' md='2' sm='4' xs='6' className='company-images'>
						<img src={fili} alt='ltv' width='100%' />
					</Col>
					<Col lg='2' md='2' sm='4' xs='6' className='company-images'>
						<img src={elnet} alt='ltv' width='100%' />
					</Col>
					{/* <Col className="company-images">
            <img src={ltv} alt="ltv" width="100%" />
          </Col>
          <Col className="company-images">
            <img src={cbo} alt="ltv" width="100%" />
          </Col> */}
				</Row>
			</React.Fragment>
		);
	}
}
