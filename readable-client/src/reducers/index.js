import {
    ADD_POSTS,
    UPDATE_POST,
    UPVOTE_POST,
    DOWNVOTE_POST,
    DELETE_POST,
    ADD_COMMENTS,
    UPDATE_COMMENT,
    DELETE_COMMENT 
} from '../actions'

import {
    combineReducers
} from 'redux';


function addPosts(newPosts = [], oldPosts) {
    const posts = {
        ...newPosts,
        oldPosts
    }

    return posts;
}


function posts(state={}, action) {
    switch (action.type) {
        case ADD_POSTS: 
            state = [...state, ...action.posts]
            return state;
        case UPDATE_POST:
        break;
        case DELETE_POST:
        break;
        case UPVOTE_POST:
        break;
        case DOWNVOTE_POST:
        break;
        default:
        return state;
    }
}

export default posts;