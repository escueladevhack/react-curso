// /* eslint-disable */
import React from 'react';
import { Grid, Cell, Textfield } from 'react-mdl';
import fetch from 'isomorphic-fetch';
import PostList from './PostsList';

export default class BadNameForClassYouCanCreateBetter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      filteredPosts: [],
      value: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then(posts =>
        this.setState({
          posts,
          filteredPosts: posts,
        })
      );
  }

  onChange = (e) => {
    const { value = '' } = e.target;
    const { posts } = this.state;

    this.setState({
      value,
      filteredPosts: value ?
        posts.filter(item => (item.title.indexOf(value) > 0)) :
        posts,
    });
  };

  render() {
    const { value, filteredPosts } = this.state;

    return (
      <Grid>
        <Cell col={12}>
          <h1>My posts</h1>
        </Cell>
        <Cell col={6}>
          <Textfield label="Search" onChange={this.onChange} value={value} />
        </Cell>
        <PostList posts={filteredPosts} />
      </Grid>
    );
  }
}

