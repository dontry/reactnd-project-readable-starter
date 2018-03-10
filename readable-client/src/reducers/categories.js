import {
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE
} from "../actions/categories";

const INITIAL_STATE = {
  categoriesList: { categories: [], error: null, laoding: false }
};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        categoriesList: { categories: [], error: null, loading: true }
      };
      break;
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categoriesList: { categories: [], error: null, loading: false }
      };
    case FETCH_CATEGORIES_FAILURE:
      error = action.payload || { message: action.payload.message };
      return {
        ...state,
        categoriesList: { categoriesList: [], error: error, loading: false }
      };
    default:
      return state;
  }
}
