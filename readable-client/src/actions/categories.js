
import * as api from "../utils/api";

export const REQUEST_FETCH_CATEGORIES = "REQUEST_FETCH_CATEGORIES";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_FAILURE = "FETCH_POST_FAILURE";

export function fetchCategories() {
  return dispatch => {
    dispatch(requestFetchCategories());
    return api.getCategories().then(res => {
      !res.error
        ? dispatch(fetchCategoriesSuccess(res.data))
        : dispatch(fetchCategoriesFailure(res.error));
    });
  };
}

function requestFetchCategories() {
  return {
    type: REQUEST_FETCH_CATEGORIES,
  };
}

function fetchCategoriesSuccess(categories) {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload: categories
  };
}

function fetchCategoriesFailure(error) {
  return {
    type: FETCH_CATEGORIES_FAILURE,
    payload: error
  };
}
