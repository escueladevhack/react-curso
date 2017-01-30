import { fromJS, Map } from 'immutable';
import { arrayToObject } from './../helpers/immutable-helpers';
import { SET_COMMENTS_DATA, SET_POST_COMMENTS_DATA } from '../actions/comments';

export default (state = new Map(), action) => {
  switch (action.type) {
    case SET_COMMENTS_DATA:
      return fromJS(arrayToObject(action.comments));
    case SET_POST_COMMENTS_DATA:
      return state.merge(fromJS(arrayToObject(action.comments)));
    default:
      return state;
  }
};
