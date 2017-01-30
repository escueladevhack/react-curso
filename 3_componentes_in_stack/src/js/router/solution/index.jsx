import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import Users from './Users';
import PostContainer from './PostContainer';

const App = props =>
  (
    <div>
      <h1>App</h1>
      <ul>
        <li><Link activeStyle={{ color: 'blue' }} to="/">Home</Link></li>
        <li><Link activeStyle={{ color: 'blue' }} to="/about">About</Link></li>
        <li><Link activeStyle={{ color: 'blue' }} to="/inbox">Inbox</Link></li>
      </ul>
      {props.children}
    </div>
  );

App.propTypes = {
  children: React.PropTypes.node,
};

const Inbox = () => (
  <div>
    Inbox
  </div>
);

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Users} />
      <Route path="posts/:userId" component={PostContainer} />
      <Route path="inbox" component={Inbox} />
    </Route>
  </Router>
);
