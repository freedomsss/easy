import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { doPostWithoutToken } from '../utils/asyncUtil';
import { requestStatus } from '../utils/requestStatus';
import { deleteSapce } from '../utils/commonFunc';
class Register extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
			name:'',
			phone:'',
			email:'',
			pwd:'',
			againPwd:''
	  };
	}
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
						<input placeholder="name" type="text" value={this.state.name} onChange={this.nameChange.bind(this)}/>
					</div>
					<div className="input-item">
						<span><i className="iconfont">&#xe62a;</i></span>
						<input placeholder="phone" type="text" value={this.state.phone} onChange={this.phoneChange.bind(this)}/>
					</div>
					<div className="input-item">
						<span><i className="iconfont">&#xe647;</i></span>
						<input placeholder="email" type="text" value={this.state.email} onChange={this.emailChange.bind(this)}/>
					</div>
					{/* <div className="input-item">
						<span><i className="iconfont">&#xe71c;</i></span>
						<input placeholder="code" type="text"/>
					</div> */}
					<div className="input-item">
						<span><i className="iconfont">&#xe664;</i></span>
						<input placeholder="password" type="password" value={this.state.pwd} onChange={this.pwsChange.bind(this)}/>
					</div>
					<div className="input-item">
						<span><i className="iconfont">&#xe664;</i></span>
						<input placeholder="password again" type="password" value={this.state.againPwd} onChange={this.againPwdChange.bind(this)}/>
					</div>
					<div className="btns" onClick={this.registerBtn.bind(this)}>注册</div>
				</div>
			</div>
		);
	}
	nameChange(e){
		this.setState({
			name:e.target.value
		});
	}
	phoneChange(e){
		this.setState({
			phone:e.target.value
		});
	}
	emailChange(e){
		this.setState({
			email:e.target.value
		});
	}
	pwsChange(e){
		this.setState({
			pwd:e.target.value
		});
	}
	againPwdChange(e){
		this.setState({
			againPwd:e.target.value
		});
	}
	registerBtn(){
		if (deleteSapce(this.state.againPwd) !== deleteSapce(this.state.pwd)) {
			alert("两次密码输入不一致请重新输入");
			return;
		}
		const registerData = {
			account:deleteSapce(this.state.phone),
			password:deleteSapce(this.state.againPwd),
			nickname:deleteSapce(this.state.name),
			email:deleteSapce(this.state.email),
		}
		console.log(registerData);
	}
}
export default Register;
