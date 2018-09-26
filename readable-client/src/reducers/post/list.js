import { createSelector } from "reselect";
import { combineReducers } from "redux";
import {
  REQUEST_FETCH_POSTS,
  REQUEST_ADD_POST,
  REQUEST_FETCH_POST,
  REQUEST_DELETE_POST,
  FETCH_POSTS_SUCCESS,
  FETCH_POST_SUCCESS,
  DELETE_POST_SUCCESS,
  ADD_POST_SUCCESS,
  FETCH_POST_FAILURE,
  FETCH_POSTS_FAILURE,
  DELETE_POST_FAILURE,
  ADD_POST_FAILURE,
  RESET_POSTS,
  REQUEST_UPDATE_POST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE
} from "../../actions/posts";

const ids = (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
    case FETCH_POST_SUCCESS:
      return action.payload.result;
    case ADD_POST_SUCCESS:
      return [...state, action.payload.result];
    case DELETE_POST_SUCCESS:
      return state.filter(post => post.id !== action.payload.result);
    case RESET_POSTS:
      return [];
    default:
      return state;
  }
};

const loading = (state = false, action) => {
  switch (action.type) {
    case REQUEST_FETCH_POSTS:
    case REQUEST_FETCH_POST:
    case REQUEST_ADD_POST:
    case REQUEST_UPDATE_POST:
    case REQUEST_DELETE_POST:
      return true;
    case FETCH_POST_SUCCESS:
    case FETCH_POSTS_SUCCESS:
    case DELETE_POST_SUCCESS:
    case UPDATE_POST_SUCCESS:
    case ADD_POST_SUCCESS:
    case FETCH_POST_FAILURE:
    case FETCH_POSTS_FAILURE:
    case DELETE_POST_FAILURE:
    case UPDATE_POST_FAILURE:
    case ADD_POST_FAILURE:
      return false;
    default:
      return state;
  }
};

const error = (state = null, action) => {
  switch (action.type) {
    case FETCH_POST_FAILURE:
    case FETCH_POSTS_FAILURE:
    case DELETE_POST_FAILURE:
    case UPDATE_POST_FAILURE:
    case ADD_POST_FAILURE:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  ids,
  loading,
  error
});

export const getIds = state => state.ids;
export const getIsLoading = state => state.loading;
export const getError = state => state.error;
export const getTotal = createSelector(getIds, items => items.length);
