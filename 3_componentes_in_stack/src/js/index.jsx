import React from 'react';
import ReactDOM from 'react-dom';
import './todoApp/index.css';

import App from './todoApp/index';
import Posts from './refactor/Posts';
import Router from './router/solution/index';
import Example from './example/Example';

const mode = process.env.MODE;
const apps = {
  todo: App,
  refactor: Posts,
  router: Router,
  example: Example,
};

const SelectedApp = apps[mode];

const renderApp = () => {
  ReactDOM.render(
    <SelectedApp />,
    window.document.getElementById('root')
  );
};

if (module && module.hot && module.hot.accept) {
  module.hot.accept(App, renderApp);
}

renderApp();
