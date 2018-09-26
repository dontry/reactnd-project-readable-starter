import { normalize } from "normalizr";
import * as schema from "./schema";
import * as api from "../utils/api";

export const REQUEST_FETCH_COMMENTS = "REQUEST_FETCH_COMMENTS";
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
export const FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE";

export const FETCH_COMMENT = "FETCH_COMMENT";
export const RESET_COMMENTS = "RESET_COMMENTS";

export const REQUEST_ADD_COMMENT = "REQUEST_ADD_COMMENT";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const REQUEST_UPDATE_COMMENT = "REQUEST_UPDATE_COMMENT";
export const UPDATE_COMMENT_SUCCESS = "UPDATE_COMMENT_SUCCESS";
export const UPDATE_COMMENT_FAILURE = "UPDATE_COMMENT_FAILURE";

export const REQUEST_DELETE_COMMENT = "REQUEST_DELETE_COMMENT";
export const DELETE_COMMENT_SUCCESS = "DELETE_COMMENT_SUCCESS";
export const DELETE_COMMENT_FAILURE = "DELETE_COMMENT_FAILURE";

export const OPEN_COMMENT_DIALOG = "OPEN_COMMENT_DIALOG";
export const CLOSE_COMMENT_DIALOG = "CLOSE_COMMENT_DIALOG";

//Fetch comments
export function fetchComments(postId) {
  return dispatch => {
    dispatch(requestFetchComments());
    api.getCommentsByPostId(postId).then(
      res => {
        dispatch(
          fetchCommentsSuccess(normalize(res.data, schema.arrayOfComments))
        );
      },
      error => {
        dispatch(fetchCommentsFailure(error.message));
      }
    );
  };
}

function requestFetchComments() {
  return {
    type: REQUEST_FETCH_COMMENTS
  };
}

function fetchCommentsSuccess(comments) {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: comments
  };
}

function fetchCommentsFailure(error) {
  return {
    type: FETCH_COMMENTS_FAILURE,
    payload: error
  };
}

export function fetchComment(id) {
  return {
    type: FETCH_COMMENT,
    payload: id
  };
}

export function resetComment() {
  return {
    type: RESET_COMMENTS
  };
}

//Add comment
export function addComment(comment) {
  return dispatch => {
    dispatch(requestAddComment());
    api.createComment(comment).then(
      res => {
        dispatch(addCommentsSuccess(normalize(res.data, schema.comment)));
      },
      error => {
        dispatch(addCommentsFailure(error.message));
      }
    );
  };
}

function requestAddComment(comment) {
  return {
    type: REQUEST_ADD_COMMENT
  };
}

function addCommentsSuccess(comment) {
  return {
    type: ADD_COMMENT_SUCCESS,
    payload: comment
  };
}

function addCommentsFailure(error) {
  return {
    type: ADD_COMMENT_FAILURE,
    payload: error
  };
}

//Update comment
export function updateComment(id, comment) {
  return dispatch => {
    dispatch(requestUpdateComment());
    api.updateCommentById(id, comment).then(
      res => {
        console.log("Normalized response:");
        console.dir(normalize(res.data, schema.comment));
        dispatch(updateCommentSuccess(normalize(res.data, schema.comment)));
      },
      error => {
        dispatch(updateCommentFailure(error.message));
      }
    );
  };
}

function requestUpdateComment() {
  return {
    type: REQUEST_UPDATE_COMMENT
  };
}

//Vote comment
export function voteComment(comment, option) {
  return dispatch => {
    const newComment = {
      ...comment,
      voteScore:
        option === "upVote" ? comment.voteScore + 1 : comment.voteScore - 1
    };
    dispatch(updateCommentSuccess(normalize(newComment, schema.comment)));
    api.voteCommentById(comment.id, option).catch(error => {
      dispatch(updateCommentFailure(error.message));
      dispatch(updateCommentSuccess(normalize(comment, schema.comment)));
    });
  };
}

function updateCommentSuccess(comment) {
  return {
    type: UPDATE_COMMENT_SUCCESS,
    payload: comment
  };
}

function updateCommentFailure(error) {
  return {
    type: UPDATE_COMMENT_FAILURE,
    payload: error
  };
}

//Delete comment
export function deleteComment(id) {
  return dispatch => {
    dispatch(requestDeleteComment());
    api.deleteCommentById(id).then(
      res => {
        console.log("Normalized response:");
        console.dir(normalize(res.data, schema.comment));
        dispatch(deleteCommentsSuccess(normalize(res.data, schema.comment)));
      },
      error => {
        dispatch(deleteCommentsFailure(error.message));
      }
    );
  };
}

function requestDeleteComment() {
  return {
    type: REQUEST_DELETE_COMMENT
  };
}

function deleteCommentsSuccess(comment) {
  return {
    type: DELETE_COMMENT_SUCCESS,
    payload: comment
  };
}

function deleteCommentsFailure(error) {
  return {
    type: DELETE_COMMENT_FAILURE,
    payload: error
  };
}

export function openCommentDialog() {
  return {
    type: OPEN_COMMENT_DIALOG
  };
}

export function closeCommentDialog() {
  return {
    type: CLOSE_COMMENT_DIALOG
  };
}
