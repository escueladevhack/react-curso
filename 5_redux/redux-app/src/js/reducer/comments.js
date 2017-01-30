import { Map } from 'immutable';

/*
* Create Redux store similar to User store
* */

export default (state = new Map(), action) => {
  switch (action.type) {
    default:
      return state;
  }
};
