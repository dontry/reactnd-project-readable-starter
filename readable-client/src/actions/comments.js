import * as api from "../utils/api";

export const REQUEST_FETCH_COMMENTS = "REQUEST_FETCH_COMMENTS";
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
export const FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE";

export const FETCH_COMMENT = "FETCH_COMMENT";
export const RESET_FETCHED_COMMENT = "RESET_FETCHED_COMMENT";

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

export function fetchComments(postId) {
  return dispatch => {
    dispatch(requestFetchComments());
    api.getCommentsByPostId(postId).then(res => {
      !res.error
        ? dispatch(fetchCommentsSuccess(res.data))
        : dispatch(fetchCommentsFailure(res.error));
    });
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

export function fetchComment(postId) {
    return {
        type: FETCH_COMMENT,
        payload: postId
    }
}

export function resetFetchComment() {
    return {
        type: RESET_FETCHED_COMMENT
    }
}


export function addComment(comment) {
  return dispatch => {
    dispatch(requestAddComment());
    api.createComment(comment).then(res => {
      !res.error
        ? dispatch(addCommentsSuccess(res.data))
        : dispatch(addCommentsFailure(res.error));
    });
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

export function updateComment(id, comment) {
  return dispatch => {
    dispatch(requestUpdateComment());
    api.updateCommentById(id, comment).then(res => {
      !res.error
        ? dispatch(updateCommentsSuccess(res.data))
        : dispatch(updateCommentsFailure(res.error));
    });
  };
}

function requestUpdateComment() {
  return {
    type: REQUEST_UPDATE_COMMENT
  };
}

export function updateCommentsSuccess(comment) {
  return {
    type: UPDATE_COMMENT_SUCCESS,
    payload: comment
  };
}

export function updateCommentsFailure(error) {
  return {
    type: UPDATE_COMMENT_FAILURE,
    payload: error
  };
}

export function deleteComment(id) {
  return dispatch => {
    dispatch(requestDeleteComment());
    api.deleteCommentById(id).then(res => {
      !res.error
        ? dispatch(deleteCommentsSuccess(res.data))
        : dispatch(deleteCommentsFailure(res.error));
    });
  };
};

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
    }
}

export function closeCommentDialog() {
    return {
        type: CLOSE_COMMENT_DIALOG
    }
}
