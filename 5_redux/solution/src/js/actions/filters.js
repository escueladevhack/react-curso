export const SEARCH = 'SEARCH';
export const USER_SEARCH = 'USER_SEARCH';

export const searchPosts = (dispatch, search) => {
  dispatch({
    type: SEARCH,
    search,
  });
};

export const getUserPosts = (dispatch, user) => {
  dispatch({
    type: USER_SEARCH,
    user,
  });
};
