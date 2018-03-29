import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { doPostWithoutToken } from '../utils/asyncUtil';
import { requestStatus } from '../utils/requestStatus';
import { deleteSapce } from '../utils/commonFunc';
import history from '../utils/history';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNum: '',
      password: '',
    };
  }
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
            <input placeholder="phone" type="text" value={this.state.phoneNum} onChange={this.phoneNumChange.bind(this)}/>
          </div>
          <div className="input-item">
            <span><i className="iconfont">&#xe664;</i></span>
            <input placeholder="password" type="password" value={this.state.password} onChange={this.passwordChange.bind(this)}/>
          </div>
          <div className="login-btn" onClick={this.loginBtn.bind(this)}>登录</div>
        </div>
      </div>
    );
  }
  login(data) {
    const urlStr = `${G.reverseHost} + '/v1/pub/users/login'`;
    doPostWithoutToken(urlStr, data).then((result) => {
      const _status = requestStatus(result);
      if (_status === 'success') {
        localStorage.setItem('account', data.account);
        localStorage.setItem('token', result.data);
        history.push('/');
        window.location.href = '/';
      } else {
        alert(_status);
      }
    }, (err) => {
      console.log(err);
    });
  }
  phoneNumChange(e) {
    this.setState({
      phoneNum: e.target.value,
    });
  }
  passwordChange(e) {
    this.setState({
      password: e.target.value,
    });
  }
  loginBtn() {
    if (!this.state.phoneNum === '') {
      alert('请先填写手机号码！');
      return;
    }
    if (!this.state.password === '') {
      alert('请先填写密码！');
      return;
    }
    const loginData = {
      account: this.state.phoneNum,
      password: this.state.password,
    };
    this.login(loginData);
  }
}
export default Login;
