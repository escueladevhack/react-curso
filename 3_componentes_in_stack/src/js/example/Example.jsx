/* eslint-disable */
import React, { PropTypes } from 'react';
import { Grid, Cell } from 'react-mdl';

const menuItems = [
  {
    title: 'Item 1',
    link: '/',
    id: 1
  },
  {
    title: 'Item 2',
    link: '/example-2',
    id: 2
  },
  {
    title: 'Item 3',
    link: '/example-3',
    id: 3
  },
];

export default class RenderList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: menuItems,
      value: 0 || '',
    };
  }


  render() {
    let menuItems = this.state.items || [];
    let itemsList = []

    menuItems.forEach(function (item) {
      itemsList.push((<li style={{listStyleType: 'none', fontSize: '2rem', lineHeight: '2.5rem'}} key={item.id}>test</li>))
    });

    return (
      <Grid style={{width:'600px', background: 'white', color: 'black', margin: '0 auto'}}>
        <Cell col={6}>
          <h1>My Great List</h1>
        </Cell>
        <Cell col={6}>
          <ul>
            {itemsList}
          </ul>
        </Cell>
      </Grid>
    );
  }
}

