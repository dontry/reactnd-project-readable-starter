import * as api from '../utils/api';
//Post list
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_BY_CATEGORY = 'FETCH_POSTS_BY_CATEGORY';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const RESET_FETCHED_POSTS = 'RESET_FETCHED_POSTS';

//Get post
export const FETCH_POST = 'FETCH_POST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';
export const RESET_FETCHED_POST = 'RESET_FETCHED_POST';

//Add new post
export const ADD_POST = 'ADD_POST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
//Reset new post
export const RESET_NEW_POST = 'RESET_NEW_POST';


//Update post
export const UPDATE_POST = 'UPDATE_POST';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';

//Delete post
export const DELETE_POST = 'DELETE_POST';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';
export const RESET_DELETED_POST = 'RESET_DELETED_POST';

//Vote post
export const VOTE_POST = 'VOTE_POST';
export const VOTE_POST_SUCCESS = 'VOTE_POST_SUCCESS';
export const VOTE_POST_FAILURE = 'VOTE_POST_FAILURE';

export function fetchPosts() {
    const request = api.getPosts();

    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function fetchPostsByCategory(category)  {
    const request = api.getPostsByCategory(category);

    return {
        type: FETCH_POSTS_BY_CATEGORY,
        payload: request
    }
}

export function fetchPostsSuccess(posts) {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: posts
    }
}

export function fetchPostsFailure(error) {
    return {
        type: FETCH_POSTS_FAILURE,
        payload: error
    }
}

export function resetFetchedPosts() {
    return {
        type: RESET_FETCHED_POSTS
    }
}

export function fetchPost(id) {
    const request = api.getPostById(id);
    return {
        type: FETCH_POST,
        payload: request
    }
}

export function fetchPostSuccess(post) {
    return {
        type: FETCH_POST_SUCCESS,
        payload: post
    }
}

export function fetchPostFailure(error) {
    return {
        type: FETCH_POST_ERROR,
        payload: error
    }
}

export function resetFetchedPost() {
    return {
        type: RESET_FETCHED_POST
    }
}

export function addPost(post) {
    const request = api.createPost(post);

    return {
        type: ADD_POST,
        payload: request
    }
}

export function addPostSuccess(post)  {
    return {
        type: ADD_POST_SUCCESS,
        payload: post
    }
}

export function addPostFailure(error) {
    return {
        type: ADD_POST_FAILURE,
        payload: error
    }
}

export function resetNewPost() {
    return {
        type: RESET_NEW_POST
    }
}

export function updatePost(id, post) {
    const request = api.updatePostById(id, post);
    return {
        type: UPDATE_POST,
        payload: request
    }
}

export function updatePostSuccess(post) {
    return {
        type: UPDATE_POST_SUCCESS,
        payload: post
    }
}

export function updatePostFailure(error) {
    return {
        type: UPDATE_POST_FAILURE,
        payload: error
    }
}

export function deletePost(id) {
    const request = api.deletePostById(id);
    return {
        type: DELETE_POST,
        payload: request
    }
}

export function deletePostSuccess(post) {
    return {
        type: DELETE_POST_SUCCESS,
        payload: post
    }
}

export function deletePostFailure(error) {
    return {
        type: DELETE_POST_ERROR,
        payload: error 
    }
}

export function resetDeletedPost() {
    return {
        type: RESET_DELETED_POST
    }
}

export function votePost(id, option) {
    const request = api.voteForPostById(id,option);
    return {
        type: VOTE_POST,
        payload: request
    };
}

export function votePostSuccess(post) {
    return {
        type: VOTE_POST_SUCCESS,
        payload: post
    }
}

export function votePostFailure(error) {
    return {
        type: VOTE_POST_FAILURE,
        payload: error
    }
}