import React, { Component } from 'react';
// import axios from 'axios';

export default class blog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			blog: [],
		};
	}

	componentWillMount() {
		this.getBlog();
	}

	getBlog() {
		return fetch('http://localhost:1340/blogs')
			.then((response) => response.json())
			.then((data) => this.setState({ blog: data }));
	}

	render() {
		const marginTop = {
			marginTop: '2%',
		};

		const alittlespace = {
			padding: '15px 15px 0 15px',
		};

		return (
			<div className='container-fluid' style={marginTop}>
				<h1>Blog | News</h1> 
				<div className='row' style={marginTop}>
					<div className='col-lg-3 col-md-3 blog-catagory'>
						{this.state.blog.map((blog) => {
							const id = blog.id;
							return (
								// TODO: needs a filtering where the same categories will grouped together
								<li key={id}>
									<a href='#'>{blog.category}</a>
								</li>
							);
						})}
					</div>
					<div className='col-lg-9 col-md-9'>
						<div className='row'>
							{/* this is what repeats from the api */}
							{this.state.blog
								.map((blog) => {
									const id = blog.id;
									// if (blog.categroy === 'category') {
									// 	return <h1>it works </h1>;
									// } else {
									return (
										<div
											key={id}
											className='col-lg-4 col-md-4 col-sm-6'
											style={alittlespace}
										>
											<img
												src={'http://localhost:1340' + blog.headerImg.url}
												width='auto'
												className='blog_img'
												alt={blog.headerImg.name}
											/>
											<h3>{blog.Title}</h3>
											<p> {blog.Snippet}</p>
										</div>
									);
								})
								.reverse()}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
