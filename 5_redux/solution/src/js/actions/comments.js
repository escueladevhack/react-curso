import { get } from './../lib/api';

export const SET_COMMENTS_DATA = 'SET_COMMENTS_DATA';
export const SET_POST_COMMENTS_DATA = 'SET_POST_COMMENTS_DATA';

export const getAllComments = dispatch =>
  get('/comments')
    .then((comments) => {
      dispatch({
        type: SET_COMMENTS_DATA,
        comments,
      });
    });

export const getPostComments = (dispatch, postId) =>
  get(`/posts/${postId}/comments`)
  .then(comments => dispatch({
    type: SET_POST_COMMENTS_DATA,
    comments,
    postId,
  }));
