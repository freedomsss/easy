import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Register extends Component {
	render() {
		return (
			<div className="login">
				<div className="back-home"><Link to="/">返回首页</Link></div>
				<div className="login-block">
					<div className="block-title">
						<Link to="/login">登录</Link>
						<b>.</b>
						<Link to="/register" className="active">注册</Link>
					</div>
					<div className="input-item">
						<span><i className="iconfont">&#xe6a3;</i></span>
						<input placeholder="name" type="text"/>
					</div>
					<div className="input-item">
						<span><i className="iconfont">&#xe62a;</i></span>
						<input placeholder="phone" type="text"/>
					</div>
					<div className="input-item">
						<span><i className="iconfont">&#xe71c;</i></span>
						<input placeholder="code" type="text"/>
					</div>
					<div className="input-item">
						<span><i className="iconfont">&#xe664;</i></span>
						<input placeholder="password" type="password"/>
					</div>
					<div className="btns">注册</div>
				</div>
			</div>
		);
	}
}
export default Register;
