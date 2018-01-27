import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Login extends Component {
	render() {
		return (
			<div className="login">
				<div className="back-home"><Link to="/">返回首页</Link></div>
				<div className="login-block">
					<div className="block-title">
						<Link to="/login" className="active">登录</Link>
						<b>.</b>
						<Link to="/register">注册</Link>
					</div>
					<div className="input-item">
						<span><i className="iconfont">&#xe6a3;</i></span>
						<input placeholder="phone" type="text"/>
					</div>
					<div className="input-item">
						<span><i className="iconfont">&#xe664;</i></span>
						<input placeholder="password" type="password"/>
					</div>
					<div className="login-btn">登录</div>
				</div>
			</div>
		);
	}
}
export default Login;
