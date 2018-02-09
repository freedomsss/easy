import React, { Component } from 'react';
import { Link,Route,BrowserRouter as Router } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Article from '../components/Article';
class Test extends Component {
	render() {
		return (
			<div>
				<Carousel/>
				<div style={{height: '30px'}}></div>
				<Article/>
				<Article/>
				<Article/>
				<Article/>
			</div>
		);
	}
}
export default Test;
