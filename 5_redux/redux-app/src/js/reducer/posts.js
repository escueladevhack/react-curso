import { fromJS, Map } from 'immutable';
import { stringify, arrayToObject } from './../helpers/immutable-helpers';
import { SET_POSTS, SET_POST, REMOVE_POST } from '../actions/posts';

export default (state = new Map(), action) => {
  switch (action.type) {
    case SET_POSTS:
      return fromJS(arrayToObject(action.posts));
    case REMOVE_POST:
      return state.delete(stringify(action.id));
    case SET_POST:
      return state.set(stringify(action.data.id), fromJS(action.data));
    default:
      return state;
  }
};
