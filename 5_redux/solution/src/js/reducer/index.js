import { combineReducers } from 'redux';
import posts from './posts';
import comments from './comments';
import users from './users';
import filters from './filters';

export default combineReducers({
  posts,
  comments,
  users,
  filters,
});
