import {
  REQUEST_FETCH_CATEGORIES,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE
} from "../actions/categories";

const INITIAL_STATE = {
  categoriesList: { entity: [], error: null, loading: false }
};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
    case REQUEST_FETCH_CATEGORIES:
      return {
        ...state,
        categoriesList: { entity: [], error: null, loading: true }
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categoriesList: { entity: action.payload, error: null, loading: false }
      };
    case FETCH_CATEGORIES_FAILURE:
      error = action.payload || { message: action.payload.message };
      return {
        ...state,
        categoriesList: { entity: [], error: error, loading: false }
      };
    default:
      return state;
  }
}
