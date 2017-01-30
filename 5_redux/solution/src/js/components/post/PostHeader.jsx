import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Link, withRouter } from 'react-router';
import Icon from 'react-mdl/lib/Icon/index';
import Button from 'react-mdl/lib/Button';
import Tooltip from 'react-mdl/lib/Tooltip';
import { Map } from 'immutable';
import './postHeader.css';

class PostHeader extends React.Component {
  filterPostsByUser = () => {
    const { user, getUserPosts } = this.props;

    getUserPosts(user);
    this.props.router.push('/');
  };

  render() {
    const { post, user, remove, commentsCount } = this.props;

    return (
      <header className="post-header">
        <h1>
          <Link to={`/post/${post.get('id')}`}>
            {post.get('title')}
          </Link>
        </h1>
        <Tooltip label="Remove this post!" className="remove-post">
          <Icon
            name="delete"
            onClick={remove}
            className="remove-post-icon"
          />
        </Tooltip>
        <Tooltip
          label={`This post has ${commentsCount} comment${commentsCount > 0 && 's'}`}
          className="comment-tooltip"
        >
          <Link to={`/post/${post.get('id')}`}>
            <Icon
              name="comment"
              className={'comment-icon'}
            />
          </Link>
        </Tooltip>
        <div className="meta-data">
          <Button
            className="username"
            onClick={this.filterPostsByUser}
          >
            {user.get('name')}
          </Button>

        </div>
      </header>
    );
  }
}

PostHeader.propTypes = {
  post: ImmutablePropTypes.map,
  user: ImmutablePropTypes.map,
  remove: React.PropTypes.func.isRequired,
  commentsCount: React.PropTypes.number.isRequired,
  getUserPosts: React.PropTypes.func.isRequired,
  router: React.PropTypes.shape({
    push: React.PropTypes.func,
  }),
};

PostHeader.defaultProps = {
  user: new Map(),
};

export const PostHeaderComponent = PostHeader;

export default withRouter(PostHeader);
