import React, { Component } from 'react';
import { Link,Route,BrowserRouter as Router } from 'react-router-dom';
class Carousel extends Component {
	componentDidMount() {
		this.autoPlay('banner', 'img', 'focus', 'span', 'left', 'right');
	}
	render() {
		return (
			<div className="home">
				<div className="banner-block">
					<div id="banner" className="home-banner">
						<img src="../../public/images/bg.jpeg"/>
						<img src="../../public/images/bg2.jpeg"/>
						{
							// <img src="../../public/images/bg2.jpeg"/>
						}
					</div>
					<div id="focus" className="banner-focus">
						<span></span>
						<span></span>
						{
							// <span></span>
						}
					</div>
					<div id="right" className="right">&gt;</div>
					<div id="left" className="left">&lt;</div>
				</div>
			</div>
		);
	}
	// 首页banner图
	autoPlay(parentId, childTag, parentFocusId, focusTag, leftId, rightId) {
		const parent = document.getElementById(parentId);
		const items = parent.getElementsByTagName(childTag);
		const parentFocus = document.getElementById(parentFocusId);
		const itemsFocus = parentFocus.getElementsByTagName(focusTag);
		const leftBtn = document.getElementById(leftId);
		const rightBtn = document.getElementById(rightId);
		parent.style.position = 'absolute';
		const width = items[0].offsetWidth;
		let index = 0;
		let moveWidth = '';
		let timer;
		for (let i = 0; i < items.length; i++) {
			itemsFocus[i].onclick = () => {
				index = i;
				moveWidth = -width * index;
				parent.style.left = moveWidth + 'px';
				for (let j = 0; j < items.length; j++) {
					itemsFocus[j].style.backgroundColor = '#000';
				}
				itemsFocus[index].style.backgroundColor = '#fff';
			}
		}
		const slider = () => {
			if (index > items.length - 2) {
				index = 0;
			} else {
				index++;
			}
			for (let i = 0; i < items.length; i++) {
				itemsFocus[i].style.backgroundColor = '#000';
			}
			moveWidth = -width * index;
			parent.style.left = moveWidth + 'px';
			itemsFocus[index].style.backgroundColor = '#fff';
			timer = setTimeout(slider, 3000);
		}
		slider();
		leftBtn.onclick = () => {
			index--;
			if (index < 0) {
				index = items.length;
			}
			moveWidth = -width * (index === items.length ? index-1 : index);
			parent.style.left = moveWidth + 'px';
			for (let k = 0; k < items.length; k++) {
				itemsFocus[k].style.backgroundColor = '#000';
			}
			itemsFocus[index === items.length ? index-1 : index].style.backgroundColor = '#fff';
		}
		rightBtn.onclick = () => {
			index++;
			if (index > items.length - 1) {
				index = 0;
			}
			moveWidth = -width * index;
			parent.style.left = moveWidth + 'px';
			for (let k = 0; k < items.length; k++) {
				itemsFocus[k].style.backgroundColor = '#000';
			}
			itemsFocus[index].style.backgroundColor = '#fff';
		}
		parent.onmouseover = () => {
			clearTimeout(timer);
		}
		parent.onmouseout = () => {
			timer = setTimeout(slider, 5000);
		}
	}
}
export default Carousel;
