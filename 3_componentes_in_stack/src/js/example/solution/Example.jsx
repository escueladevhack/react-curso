// /* eslint-disable */
import React from 'react';
import { Cell } from 'react-mdl';
import Item from './Item';
import Wrapper from './Wrapper';

const menuItems = [
  {
    title: 'Item 1',
    link: '/',
    id: 1,
  },
  {
    title: 'Item 2',
    link: '/example-2',
    id: 2,
  },
  {
    title: 'Item 3',
    link: '/example-3',
    id: 3,
  },
];

export default class RenderList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: menuItems,
    };
  }


  render() {
    const { items = [] } = this.state;
    const itemsList = items.map(item =>
      <Item key={item.id} title={item.title} />
    );

    return (
      <Wrapper>
        <Cell col={6}>
          <h1>My Great List</h1>
        </Cell>
        <Cell col={6}>
          <ul>
            {itemsList}
          </ul>
        </Cell>
      </Wrapper>
    );
  }
}

