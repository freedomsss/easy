import React, { Component } from 'react';

class Write extends Component {
	constructor(props) {
	  super(props);
	  this.state = {};
	}
	componentDidMount() {
		// this.init();
	}
	render() {
		return (
			<div className="write">
				<div>
					<span>文章标题：</span>
					<input type="text"/>
				</div>
				<span>文章内容：</span>
				<textarea id="editor"></textarea>
				<div className="publish-btn">发布</div>
			</div>
		);
	}
}
export default Write;
