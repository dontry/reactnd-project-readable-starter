import * as schema from "./schema";
import { normalize } from "normalizr";
import * as api from "../utils/api";
import { getIsLoading } from "../reducers/post";
//Get posts
export const REQUEST_FETCH_POSTS = "REQUEST_FETCH_POSTS";
export const REQUEST_FETCH_POSTS_BY_CATEGORY =
  "REQUEST_FETCH_POSTS_BY_CATEGORY";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";
export const RESET_POSTS = "RESET_POSTS";

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
  return (dispatch, getState) => {
    //Avoid racing condition
    // if (getIsLoading(getState())) {
    // return Promise.resolve();
    // }
    dispatch(requestFetchPosts());
    return api.getPosts().then(
      res => {
        dispatch(fetchPostsSuccess(normalize(res.data, schema.arrayOfPosts)));
      },
      res => dispatch(fetchPostsFailure(res.error))
    );
  };
}

function requestFetchPosts() {
  return {
    type: REQUEST_FETCH_POSTS
  };
}

export function fetchPostsByCategory(category) {
  return (dispatch, getState) => {
    //Avoid racing condition
    // if (getIsLoading(getState())) {
    // return Promise.resolve();
    // }
    dispatch(requestFetchPostsByCategory());
    return api.getPostsByCategory(category).then(
      res => {
        dispatch(fetchPostsSuccess(normalize(res.data, schema.arrayOfPosts)));
      },
      res => dispatch(fetchPostsFailure(res.error))
    );
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

function fetchPostsFailure(error = "Something goes wrong when fetching posts") {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error
  };
}

export function resetFetchedPosts() {
  return {
    type: RESET_POSTS
  };
}

//Fetch a post
export function fetchPost(id) {
  return dispatch => {
    dispatch(requestFetchPost());
    return api.getPostById(id).then(
      res => {
        if (isEmptyObject(res.data)) {
          throw {
            error: "The post does not exist."
          };
        }
        dispatch(fetchPostSuccess(normalize(res.data, schema.post)));
      },
      res => dispatch(fetchPostFailure(res.error))
    );
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

function fetchPostFailure(
  error = "Something went wrong when fetching the post"
) {
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
        console.log("Normalized:");
        console.dir(normalize(res.data, schema.post));
        dispatch(addPostSuccess(normalize(res.data, schema.post)));
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

function addPostFailure(error = "Something went wrong when adding the post") {
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
    return api.updatePostById(id, post).then(
      res => {
        console.log("Normalized:");
        console.dir(normalize(res.data, schema.post));
        dispatch(updatePostSuccess(res.data));
      },
      res => dispatch(updatePostFailure(res.error))
    );
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
    return api.votePostById(id, option).then(
      res => {
        dispatch(updatePostSuccess(normalize(res.data, schema.post)));
      },
      res => dispatch(updatePostFailure(res.error))
    );
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

function updatePostFailure(
  error = "Something went wrong when updating the post"
) {
  return {
    type: UPDATE_POST_FAILURE,
    payload: error
  };
}

//Delete a post
export function deletePost(id) {
  return dispatch => {
    dispatch(requestDeletePost());
    return api.deletePostById(id).then(
      res => {
        console.log("Normalized:");
        console.dir(normalize(res.data, schema.post));
        dispatch(deletePostSuccess(res.data));
      },
      res => dispatch(deletePostFailure(res.error))
    );
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

export function deletePostFailure(
  error = "Something went wrong when deleting the post"
) {
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

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}
