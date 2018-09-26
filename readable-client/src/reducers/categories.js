import {
  REQUEST_FETCH_CATEGORIES,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE
} from "../actions/categories";
import { combineReducers } from "../../node_modules/redux";

const INITIAL_STATE = {
  categoriesList: { entity: [], error: null, loading: false }
};

const list = (state = [], action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const loading = (state = [], action) => {
  switch (action.type) {
    case REQUEST_FETCH_CATEGORIES:
      return true;
    case FETCH_CATEGORIES_FAILURE:
    case FETCH_CATEGORIES_SUCCESS:
    default:
      return false;
  }
};

const error = (state = null, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_FAILURE:
      return action.payload.message;
    default:
      return state;
  }
};

export default combineReducers({
  list,
  loading,
  error
});
