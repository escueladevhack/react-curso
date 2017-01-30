import { getPostUser, getAllUsers } from './users';
import { getAllComments, getPostComments } from './comments';
import { get } from './../lib/api';

export const REMOVE_POST = 'REMOVE_POST';
export const SEARCH = 'SEARCH';
export const SET_POST = 'SET_POST';
export const SET_POSTS = 'SET_POSTS';
export const USER_SEARCH = 'USER_SEARCH';

const getPostsData = (dispatch) => {
  getAllComments(dispatch);
  getAllUsers(dispatch);
};

const getPostData = (dispatch, post) => {
  getPostComments(dispatch, post.id);
  getPostUser(dispatch, post.userId);
};


export const getAllPosts = (dispatch) => {
  const url = '/posts';

  return get(url)
    .then(posts =>
      dispatch({
        type: SET_POSTS,
        posts,
      })
    ).then(getPostsData(dispatch));
};

export const getSinglePost = (dispatch, postId) => {
  const url = `/posts/${postId}`;

  return get(url)
    .then((data) => {
      dispatch({
        type: SET_POST,
        data,
      });
      return data;
    })
    .then(post => getPostData(dispatch, post));
};

export const removePostById = (dispatch, id) => {
  dispatch({
    type: REMOVE_POST,
    id,
  });
};

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
