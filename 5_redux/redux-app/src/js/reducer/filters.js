import { fromJS, Map } from 'immutable';
import { SEARCH, USER_SEARCH } from '../actions/posts';

const defaultTree = {
  userId: null,
  user: {},
  search: '',
};

export default (state = new Map(fromJS(defaultTree)), action) => {
  switch (action.type) {
    case SEARCH:
      return state.set('search', action.search);
    case USER_SEARCH:
      return state
        .set('userId', action.user ? action.user.get('id') : null)
        .set('user',
          action.user ?
            action.user :
            fromJS({})
        );
    default:
      return state;
  }
};
