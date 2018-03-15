import * as api from "../utils/api";
//Get posts
export const REQUEST_FETCH_POSTS = "REQUEST_FETCH_POSTS";
export const REQUEST_FETCH_POSTS_BY_CATEGORY =
  "REQUEST_FETCH_POSTS_BY_CATEGORY";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";
export const RESET_FETCHED_POSTS = "RESET_FETCHED_POSTS";

//Get post
export const REQUEST_FETCH_POST = "REQUEST_FETCH_POST";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_FAILURE = "FETCH_POST_FAILURE";
export const RESET_FETCHED_POST = "RESET_FETCHED_POST";

//Add new post
export const REQUEST_ADD_POST = "REQUEST_ADD_POST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";
//Reset new post
export const RESET_NEW_POST = "RESET_NEW_POST";

//Update post
export const REQUEST_UPDATE_POST = "REQUEST_UPDATE_POST";
export const UPDATE_POST_SUCCESS = "UPDATE_POST_SUCCESS";
export const UPDATE_POST_FAILURE = "UPDATE_POST_FAILURE";

//Delete post
export const REQUEST_DELETE_POST = "REQUEST_DELETE_POST";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const DELETE_POST_FAILURE = "DELETE_POST_FAILURE";
export const RESET_DELETED_POST = "RESET_DELETED_POST";

//Vote post
export const REQUEST_VOTE_POST = "REQUEST_VOTE_POST";

//Fetch posts
export function fetchPosts() {
  return dispatch => {
    dispatch(requestFetchPosts());
    return api.getPosts().then(res => {
      !res.error
        ? dispatch(fetchPostsSuccess(res.data))
        : dispatch(fetchPostsFailure(res.error));
    });
  };
}

function requestFetchPosts() {
  return {
    type: REQUEST_FETCH_POSTS
  };
}

export function fetchPostsByCategory(category) {
  return dispatch => {
    dispatch(requestFetchPostsByCategory());
    return api.getPostsByCategory(category).then(res => {
      !res.error
        ? dispatch(fetchPostsSuccess(res.data))
        : dispatch(fetchPostsFailure(res.error));
    });
  };
}

function requestFetchPostsByCategory() {
  return {
    type: REQUEST_FETCH_POSTS_BY_CATEGORY
  };
}

function fetchPostsSuccess(posts) {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts
  };
}

function fetchPostsFailure(error) {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error
  };
}

export function resetFetchedPosts() {
  return {
    type: RESET_FETCHED_POSTS
  };
}

//Fetch a post
export function fetchPost(id) {
  return dispatch => {
    dispatch(requestFetchPost());
    return api
      .getPostById(id)
      .then(res => {
        dispatch(fetchPostSuccess(res.data));
      })
      .catch(res => {
        dispatch(fetchPostFailure(res.response));
      });
  };
}

function requestFetchPost() {
  return {
    type: REQUEST_FETCH_POST
  };
}

function fetchPostSuccess(post) {
  return {
    type: FETCH_POST_SUCCESS,
    payload: post
  };
}

function fetchPostFailure(error) {
  return {
    type: FETCH_POST_FAILURE,
    payload: error
  };
}

export function resetFetchedPost() {
  return {
    type: RESET_FETCHED_POST
  };
}

//Add a post
export function addPost(post) {
  return dispatch => {
    dispatch(requestAddPost());
    return api
      .createPost(post)
      .then(res => {
        dispatch(addPostSuccess(res.data));
      })
      .catch(res => {
        dispatch(addPostFailure(res.error));
      });
  };
}

function requestAddPost() {
  return {
    type: REQUEST_ADD_POST
  };
}

function addPostSuccess(post) {
  return {
    type: ADD_POST_SUCCESS,
    payload: post
  };
}

function addPostFailure(error) {
  return {
    type: ADD_POST_FAILURE,
    payload: error
  };
}

export function resetNewPost() {
  return {
    type: RESET_NEW_POST
  };
}

//Update a post
export function updatePost(id, post) {
  return dispatch => {
    dispatch(requestUpdatePost());
    return api.updatePostById(id, post).then(res => {
      !res.error
        ? dispatch(updatePostSuccess(res.data))
        : dispatch(updatePostFailure(res.error));
    });
  };
}

function requestUpdatePost() {
  return {
    type: REQUEST_UPDATE_POST
  };
}
export function votePost(id, option) {
  return dispatch => {
    dispatch(requestVotePost());
    return api.votePostById(id, option).then(res => {
      !res.error
        ? dispatch(updatePostSuccess(res.data))
        : dispatch(updatePostFailure(res.error));
    });
  };
}

function requestVotePost() {
  return {
    type: REQUEST_VOTE_POST
  };
}

function updatePostSuccess(post) {
  return {
    type: UPDATE_POST_SUCCESS,
    payload: post
  };
}

function updatePostFailure(error) {
  return {
    type: UPDATE_POST_FAILURE,
    payload: error
  };
}

//Delete a post
export function deletePost(id) {
  return dispatch => {
    dispatch(requestDeletePost());
    return api.deletePostById(id).then(res => {
      !res.error
        ? dispatch(deletePostSuccess(res.data))
        : dispatch(deletePostFailure(res.error));
    });
  };
}

export function requestDeletePost() {
  return {
    type: REQUEST_DELETE_POST
  };
}

export function deletePostSuccess(post) {
  return {
    type: DELETE_POST_SUCCESS,
    payload: post
  };
}

export function deletePostFailure(error) {
  return {
    type: DELETE_POST_FAILURE,
    payload: error
  };
}

export function resetDeletedPost() {
  return {
    type: RESET_DELETED_POST
  };
}
