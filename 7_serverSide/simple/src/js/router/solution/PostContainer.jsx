import React from 'react';
import { Grid } from 'react-mdl';
import fetch from 'isomorphic-fetch';
import PostsList from '../../refactor/solution/PostsList';

export default class PostContainer extends React.Component {
  static propTypes = {
    params: React.PropTypes.shape({
      userId: React.PropTypes.string,
    }),
  };

  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.params.userId}`)
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

  render() {
    const { posts } = this.state;

    return (
      <Grid>
        <PostsList posts={posts} />
      </Grid>
    );
  }
}

