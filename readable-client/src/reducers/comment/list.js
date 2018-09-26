import { combineReducers } from "redux";
import {
  REQUEST_FETCH_COMMENTS,
  REQUEST_ADD_COMMENT,
  REQUEST_DELETE_COMMENT,
  FETCH_COMMENT,
  FETCH_COMMENTS_SUCCESS,
  ADD_COMMENT_SUCCESS,
  DELETE_COMMENT_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  ADD_COMMENT_FAILURE,
  DELETE_COMMENT_FAILURE,
  RESET_COMMENTS,
  UPDATE_COMMENT_FAILURE,
  UPDATE_COMMENT_SUCCESS,
  REQUEST_UPDATE_COMMENT
} from "../../actions/comments";
import { createSelector } from "reselect";

const ids = (state = [], action) => {
  switch (action.type) {
    case FETCH_COMMENTS_SUCCESS:
      return action.payload.result;
    case ADD_COMMENT_SUCCESS:
      return [...state, action.payload.result];
    case DELETE_COMMENT_SUCCESS:
      return state.filter(comment => comment.id !== action.payload.result);
    case RESET_COMMENTS:
      return [];
    default:
      return state;
  }
};

const activeId = (state = null, action) => {
  switch (action.type) {
    case FETCH_COMMENT:
      return action.payload;
    default:
      return state;
  }
};

const loading = (state = false, action) => {
  switch (action.type) {
    case REQUEST_FETCH_COMMENTS:
    case REQUEST_ADD_COMMENT:
    case REQUEST_UPDATE_COMMENT:
    case REQUEST_DELETE_COMMENT:
      return true;
    case FETCH_COMMENTS_SUCCESS:
    case DELETE_COMMENT_SUCCESS:
    case UPDATE_COMMENT_SUCCESS:
    case ADD_COMMENT_SUCCESS:
    case FETCH_COMMENTS_FAILURE:
    case DELETE_COMMENT_FAILURE:
    case UPDATE_COMMENT_FAILURE:
    case ADD_COMMENT_FAILURE:
      return false;
    default:
      return state;
  }
};

const error = (state = null, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_FAILURE:
    case DELETE_COMMENT_FAILURE:
    case UPDATE_COMMENT_FAILURE:
    case ADD_COMMENT_FAILURE:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  ids,
  activeId,
  loading,
  error
});

export const getIds = state => state.ids;
export const getIsLoading = state => state.loading;
export const getError = state => state.error;
export const getTotal = createSelector(getIds, items => items.length);
