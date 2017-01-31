import { connect } from 'react-redux';
import ListItem from '../PostList/ListItem/ListItem';
import { getComments, stringify } from '../../helpers/immutable-helpers';

import { getUserPosts } from '../../actions/posts';

const state = (data, ownProps) => ({
  user: data.users.get(stringify(ownProps.post.get('userId'))),
  commentsCount: getComments(data.comments, ownProps.post.get('id')).size,
  ...ownProps,
});
const dispatchMethods = dispatch => ({
  getUserPosts: user => getUserPosts(dispatch, user),
});

export default connect(state, dispatchMethods)(ListItem);
