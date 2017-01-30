import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Cell } from 'react-mdl';
import './listItem.css';
import PostHeader from '../../post/PostHeader';

export default class ListItem extends React.Component {
  static propTypes = {
    post: ImmutablePropTypes.map,
    user: ImmutablePropTypes.map,
    removePost: React.PropTypes.func.isRequired,
    commentsCount: React.PropTypes.number.isRequired,
    getUserPosts: React.PropTypes.func.isRequired,
  };

  removePost = () => {
    const { post, removePost } = this.props;

    removePost(post.get('id'));
  };

  render() {
    const { post, user, commentsCount = 0, getUserPosts } = this.props;

    return (
      <Cell component="article" col={12} className="post-list-item">
        <PostHeader
          post={post}
          user={user}
          remove={this.removePost}
          commentsCount={commentsCount}
          getUserPosts={getUserPosts}
        />
        <div className="post-content">
          <p>
            {post.get('body')}
          </p>
        </div>
      </Cell>
    );
  }
}

