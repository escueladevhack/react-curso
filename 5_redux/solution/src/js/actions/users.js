import { get } from './../lib/api';

export const SET_USERS_DATA = 'SET_USERS_DATA';
export const SET_USER_DATA = 'SET_USER_DATA';

export const getPostUser = (dispatch, userId) => {
  const url = `/users/${userId}`;

  return get(url)
    .then(user => dispatch({
      type: SET_USER_DATA,
      user,
    }));
};

export const getAllUsers = dispatch =>
  get('/users')
    .then((users) => {
      dispatch({
        type: SET_USERS_DATA,
        users,
      });
    });
