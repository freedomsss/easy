import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import history from './utils/history';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Write from './views/Write';
const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact, linkClass }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <div className={match ? 'active ' + linkClass : '' + linkClass}>
      {
        // match ? '> ' : ''
      }
      <Link to={to}>{label}</Link>
    </div>
  )}/>
)
const App = () => (
  <Router>
    <div>
      <div className="common-menu">
        <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="首页"/>
        <OldSchoolMenuLink to="/login" label="登录" linkClass="fl-right"/>
        <OldSchoolMenuLink to="/register" label="注册" linkClass="fl-right"/>
        <OldSchoolMenuLink to="/write" label="写文章" linkClass="fl-right"/>
      </div>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/write" component={Write}/>
    </div>
  </Router>
);

export default App;
