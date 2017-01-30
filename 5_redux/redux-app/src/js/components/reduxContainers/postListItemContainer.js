import { connect } from 'react-redux';
import ListItem from '../PostList/ListItem/ListItem';
import { stringify } from '../../helpers/immutable-helpers';

import { getUserPosts } from '../../actions/posts';

const state = (data, ownProps) => ({
  user: data.users.get(stringify(ownProps.post.get('userId'))),
  commentsCount: 0,
  // check /react-curso/5_redux/redux-app/src/js/helpers/immutable-helpers.js line 11 getComments
  ...ownProps,
});
const dispatchMethods = dispatch => ({
  getUserPosts: user => getUserPosts(dispatch, user),
});

export default connect(state, dispatchMethods)(ListItem);
