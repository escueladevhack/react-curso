import React from 'react';
// First we import some modules...
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
// Then we delete a bunch of code from App and
// add some <Link> elements...
const App = props =>
  (
    <div>
      <h1>App</h1>
      {/* change the <a>s to <Link>s */}
      <ul>
        <li><Link activeStyle={{ color: 'blue' }} to="/about">About</Link></li>
        <li><Link activeStyle={{ color: 'blue' }} to="/inbox">Inbox</Link></li>
      </ul>

      {/*
       next we replace `<Child>` with `this.props.children`
       the router will figure out the children for us
       */}
      {props.children}
    </div>
  );

App.propTypes = {
  children: React.PropTypes.node,
};

const Home = () => (
  <div>
    Home
  </div>
);

const About = () => (
  <div>
    About
  </div>
);

const Inbox = () => (
  <div>
    Inbox
  </div>
);

// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox} />
    </Route>
  </Router>
);
