import React, { Component } from 'react';

class Write extends Component {
	constructor(props) {
	  super(props);
	  this.state = {};
	}
	componentDidMount() {
		this.init();
	}
	render() {
		return (
			<div>
				<textarea id="editor"></textarea>
			</div>
		);
	}
	init() {

	}
}
export default Write;
