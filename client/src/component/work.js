import React, { Component } from 'react';
// import ReactMarkdown from 'react-markdown';

// import { marked } from 'marked';

// import * as fs from 'fs';

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
					<div className='work-relative-container'>
						<div>
							<h1>LTV Branding</h1>
						</div>
					</div>
				</div>
				<div className='work-project'>
					<div className='work-relative-container'>
						<div>
							<h1>Mela: Remit to Pay </h1>
						</div>
					</div>
				</div>
				<div className='work-project'>
					<div className='work-relative-container onekoo'>
						<div>
							<h1>Onekoo Coffee</h1>
						</div>
					</div>
				</div>
				<div className='work-project'>
					<div className='work-relative-container'>
						<div>
							<h1>Ethiopia Red Cross Society Android App</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
