import React, { Component } from 'react';
class Article extends Component {
	render() {
		return (
			<div className="article-item">
				<div className="user-detail">
					<img className="user-atavar" src="../../public/images/user.png"/>
					<span>冬菇的小白兔</span>
					<span>6分钟以前</span>
				</div>
				<div className="content">
					<h3>莫言用小说谋杀了“摩西”</h3>
					<p>文章文章文章内容内容内容文章内容</p>
				</div>
				<img className="article-img" src="../../public/images/user.png"/>
				<div className="footer">
					<span>浏览量：1</span>
					<span>评论量：1</span>
					<span>点赞量：1</span>
				</div>
			</div>
		);
	}
}

export default Article;
