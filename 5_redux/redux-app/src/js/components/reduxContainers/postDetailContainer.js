import { connect } from 'react-redux';
import PostDetail from '../PostDetail/index';
import { getSinglePost, removePostById } from '../../actions/posts';
import { getUserPosts } from '../../actions/filters';
import { getUser } from '../../helpers/immutable-helpers';

const state = (data, ownProps) => ({
  post: data.posts.getIn([ownProps.params.id]),
  // comments: .....
  // check /react-curso/5_redux/redux-app/src/js/helpers/immutable-helpers.js line 11 getComments
  user: getUser(data, ownProps.params.id),
  id: ownProps.params.id,
});
const dispatchMethods = dispatch => ({
  getPost: id => getSinglePost(dispatch, id),
  getUserPosts: user => getUserPosts(dispatch, user),
  removePost: id => removePostById(dispatch, id),
});

export default connect(state, dispatchMethods)(PostDetail);
