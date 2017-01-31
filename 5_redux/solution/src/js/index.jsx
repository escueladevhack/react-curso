import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Header } from 'react-mdl';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import PostListContainer from './components/reduxContainers/postListContainer';
import PostDetail from './components/reduxContainers/postDetailContainer';
import store from './store';
import './index.css';

const App = props => (
  <div>
    <Header className="blog-header">
      <h1> Amazing posts</h1>
    </Header>
    <div className="main">
      {props.children}
    </div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};

const RouterComponent = () => (
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={PostListContainer} />
      <Route path="/post/:id" component={PostDetail} />
    </Route>
  </Router>
);

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <RouterComponent />
    </Provider>,
    window.document.getElementById('root')
  );
};

if (module && module.hot && module.hot.accept) {
  module.hot.accept(PostListContainer, renderApp);
}

renderApp();
