import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material';
import React from 'react';
import { Provider } from 'react-redux';
import ListContainer from './components/TodoListContainer/index';
import store from './stores';
import './index.css';

const App = () => (
  <div className="main">
    <h3> Todo List</h3>
    <ListContainer />
  </div>
);

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);

