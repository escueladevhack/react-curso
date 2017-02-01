import React from 'react';
import { Grid, Cell } from 'react-mdl';
import fetch from 'isomorphic-fetch';
import User from './User';

export default class BadNameForClassYouCanCreateBetter extends React.Component {
  static propTypes = {
    users: React.PropTypes.arrayOf(React.PropTypes.object),
  };

  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then((users) => {
        this.setState({
          users,
        });
      });
  }

  render() {
    const { users = [] } = this.state;

    return (
      <Grid>
        <Cell col={12}>
          <h1>My Users</h1>
        </Cell>
        <Cell col={6}>
          {users.map(user => <User id={user.id} name={user.name} key={user.id} />)}
        </Cell>
      </Grid>
    );
  }
}

