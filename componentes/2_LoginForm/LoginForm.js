import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
    name: '',
    password: '',
  };

  onChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { name, password } = this.state;
    console.log(`Name is ${name}, Password is ${password}`)
  };

  render() {
    const { name, password } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <label>Name</label>
        <input name='name' value={name} onChange={this.onChange}/>
        <label>Password</label>
        <input name='password' value={password} onChange={this.onChange}/>
        <button>Submit</button>
      </form>
    );
  }
}

export default LoginForm;