import React, { Component } from 'react';
import {
  // BrowserRouter as Router,
  Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import history from './utils/history';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Write from './views/Write';

const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact, linkClass }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <div className={match ? `'active ' + ${linkClass}` : `'' + ${linkClass}`}>
      {
        // match ? '> ' : ''
      }
      <NavLink to={to}>{label}</NavLink>
    </div>
  )}/>
);
const account = localStorage.getItem("account");
const token = localStorage.getItem("token");
const App = () => (
  <Router history={history}>
    <div>
      <div className="common-menu">
        <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="首页"/>
        {
          token ?
            <label>
              <div
                className="fl-right"
                onClick={
                  () => {
                    localStorage.removeItem("account");
                    localStorage.removeItem("token");
                    window.location.href = '/';
                    console.log(token);
                  }
                }
              >
              登出
              </div>
              <OldSchoolMenuLink to="/write" label="写文章" linkClass="fl-right"/>
            </label> :
            <label>
              <OldSchoolMenuLink to="/login" label="登录" linkClass="fl-right"/>
              <OldSchoolMenuLink to="/register" label="注册" linkClass="fl-right"/>
            </label>
        }
      </div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/write" component={Write}/>
      </Switch>
    </div>
  </Router>
);

export default App;
