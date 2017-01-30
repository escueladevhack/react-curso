import React from 'react';
import ReactDOM from 'react-dom';
import img from '.../path/file.jpeg';

class Hello extends React.Component {

  render() {
    return <h1>Hello World"</h1>;
  }
}

const renderApp = () => {
  ReactDOM.render(<Hello/>, document.getElementById('hello'));
};

if (module && module.hot && module.hot.accept) {
  module.hot.accept(Hello, renderApp);
}

renderApp();