import { Map, fromJS } from 'immutable';
import { arrayToObject, stringify } from './../helpers/immutable-helpers';
import { SET_USERS_DATA, SET_USER_DATA } from '../actions/users';

export default (state = new Map(), action) => {
  switch (action.type) {
    case SET_USERS_DATA:
      return fromJS(arrayToObject(action.users));
    case SET_USER_DATA:
      return action.user.id ? state.set(stringify(action.user.id), fromJS(action.user)) : state;
    default:
      return state;
  }
};
