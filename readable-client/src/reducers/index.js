import {
    CREATE_POST,
    UPDATE_POST,
    UPVOTE_POST,
    DOWNVOTE_POST,
    DELETE_POST,
    CREATE_COMMENT,
    UPDATE_COMMENT,
    DELETE_COMMENT 
} from '../actions'

import {
    combineReducers
} from 'redux';

function posts(state={}, action) {
    switch (action.type) {
        case CREATE_POST: 
            break;
        case UPDATE_POST:
        break;
        case DELETE_POST:
        break;
        case UPVOTE_POST:
        break;
        case DOWNVOTE_POST:
        break;
        default:
            break;
    }
}

export default posts;