import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import LtvProject from '../component/projects/ltv';

export default class Work extends Component {
	render() {
		// function readMarkdown(file) {
		// 	const rawFile = new XMLHttpRequest();
		// 	rawFile.open('GET', file, false);
		// 	rawFile.onreadystatechange = function() {
		// 		if (rawFile.readyState === 4) {
		// 			if (rawFile.status === 200 || rawFile.status === 0) {
		// 				var allText = rawFile.responseText;
		// 				alert(allText);
		// 			}
		// 		}
		// 	};
		// }

		// fetch('../project_content.md')
		// 	.then(response => response.json())
		// 	.then(
		// 		result =>
		// 			(document.getElementById('projectMarkdown').innerHTML = marked(
		// 				result
		// 			))
		// 	);

		// console.log(markdownConverted);
		// const markdown = '# h1style \n\n **Bold**';
		// const markdownConverted = readMarkdown('../project_content.md');

		return (
			<div className='work-mian-container'>
				<div className='work-project'>
					<div className='work-relative-container ltv-img'>
						<div>
							<h1>LTV Branding</h1>
							<Link to='/work/ltv'>View Project</Link>
						</div>
					</div>
				</div>
				<div className='work-project'>
					<div className='work-relative-container mela-img'>
						<div>
							<h1>Mela: Remit to Pay </h1>
						</div>
					</div>
				</div>
				<div className='work-project'>
					<div className='work-relative-container '>
						<div>
							<h1>Onekoo Coffee</h1>
						</div>
					</div>
				</div>
				<div className='work-project'>
					<div className='work-relative-container redcrossApp-img'>
						<div>
							<h1>Ethiopia Red Cross Society Android App</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
