import React from 'react';
import ReactDOM from 'react-dom';

class World extends React.Component {
  render() {
    return <h1>World</h1>
  }
}

const renderApp = () => {
  ReactDOM.render(<World/>, document.getElementById('world'));
};

renderApp();

if (module && module.hot && module.hot.accept) {
  module.hot.accept(World, renderApp);
}