import React from 'react';
import ReactDOM from 'react-dom';

import Example from './example/solution/Example';

const renderApp = () => {
  ReactDOM.render(
    <Example />,
    window.document.getElementById('root')
  );
};

if (module && module.hot && module.hot.accept) {
  module.hot.accept(Example, renderApp);
}

renderApp();
