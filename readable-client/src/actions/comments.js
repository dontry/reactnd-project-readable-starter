import * as api from '../utils/api';

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';

export const ADD_COMMENTS = 'ADD_COMMENTS';
export const ADD_COMMENTS_SUCCESS = 'ADD_COMMENTS_SUCCESS';
export const ADD_COMMENTS_FAILURE =  'ADD_COMMENTS_FAILURE';

export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const UPDATE_COMMENT_SUCCESS = 'UPDATE_COMMENT_SUCCESS';
export const UPDATE_COMMENT_FAILURE = 'UPDATE_COMMENT_FAILURE';

export const DELETE_COMMENT = 'DELETE_COMMENT';
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';
export const DELETE_COMMENT_FAILURE = 'DELETE_COMMENT_FAILURE';

export function fetchComments (id) {
    const request = api.getCommentsByPostId(id);
    return {
        type: FETCH_COMMENTS,
        payload: request
    }
}

export function fetchCommentsSuccess(comments) {
    return {
        type: FETCH_COMMENTS_SUCCESS,
        payload: comments
    }
}

export function fetchCommentsFailure(error) {
    return {
        type: FETCH_COMMENTS_FAILURE,
        payload: error
    }
}

export function addComments(comment) {
    const request = api.createComment(comment);
    return {
        type: ADD_COMMENTS,
        payload: request 
    }
}

export function addCommentsSuccess(comment) {
    return {
        type: ADD_COMMENTS_SUCCESS,
        payload: comment
    }
}

export function addCommentsFailure(error) {
    return {
        type: ADD_COMMENTS_FAILURE,
        payload: error
    }
}

export function updateComment (id, comment) {
    const request = api.updateCommentById(id, comment);
    return {
        type: UPDATE_COMMENT,
        payload: request
    }
}

export function updateCommentsSuccess(comment) {
    return {
        type: UPDATE_COMMENTS_SUCCESS,
        payload: comment
    }
}

export function updateCommentsFailure(error) {
    return {
        type: UPDATE_COMMENTS_FAILURE,
        payload: error
    }
}

export const deleteComment = (id) => {
    const request = api.deleteCommentById(id);
    return {
        type: DELETE_COMMENT,
        payload: request
    }
}

export function deleteCommentsSuccess(comment) {
    return {
        type: DELETE_COMMENTS_SUCCESS,
        payload: comment
    }
}

export function deleteCommentsFailure(error) {
    return {
        type: DELETE_COMMENT_FAILURE,
        payload: error
    }
}