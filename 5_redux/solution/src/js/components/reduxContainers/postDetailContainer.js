import { connect } from 'react-redux';
import PostDetail from '../PostDetail/index';
import { getSinglePost, removePostById } from '../../actions/posts';
import { getUserPosts } from '../../actions/filters';
import { getUser, getComments } from '../../helpers/immutable-helpers';

const state = (data, ownProps) => ({
  post: data.posts.getIn([ownProps.params.id]),
  comments: getComments(data.comments, ownProps.params.id),
  user: getUser(data, ownProps.params.id),
  id: ownProps.params.id,
});
const dispatchMethods = dispatch => ({
  getPost: id => getSinglePost(dispatch, id),
  getUserPosts: user => getUserPosts(dispatch, user),
  removePost: id => removePostById(dispatch, id),
});

export default connect(state, dispatchMethods)(PostDetail);
