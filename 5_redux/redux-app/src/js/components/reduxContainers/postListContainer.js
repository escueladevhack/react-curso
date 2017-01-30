import { connect } from 'react-redux';
import ListContainer from '../PostList/index';
import { getAllPosts, removePostById } from '../../actions/posts';
import { searchPosts, getUserPosts } from '../../actions/filters';
import { searchByFilters } from '../../helpers/immutable-helpers';

const state = (data, ownProps) => ({
  posts: searchByFilters(data.posts, data.filters),
  filters: data.filters,
  ...ownProps,
});
const dispatchMethods = dispatch => ({
  getPostsList: () => getAllPosts(dispatch),
  removePost: id => removePostById(dispatch, id),
  search: text => searchPosts(dispatch, text),
  clearUserFilter: () => getUserPosts(dispatch, null),
});

export default connect(state, dispatchMethods)(ListContainer);
