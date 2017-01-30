// import { get } from './../lib/api';

export const SET_COMMENTS_DATA = 'SET_COMMENTS_DATA';
export const SET_POST_COMMENTS_DATA = 'SET_POST_COMMENTS_DATA';

/*
* Change next actions to server requests. Use get method from
* /react-curso/5_redux/solution/src/js/lib/api.js
* */

export const getAllComments = dispatch =>
  dispatch({
    type: SET_COMMENTS_DATA,
    comments: [],
  });

export const getPostComments = (dispatch, postId) =>
  dispatch({
    type: SET_POST_COMMENTS_DATA,
    comments: [],
    postId,
  });
