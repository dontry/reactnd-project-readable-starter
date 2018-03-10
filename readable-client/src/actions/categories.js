import * as api from '../utils/api';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

export function fetchCategories() {
    const request = api.getCategories();

    return {
        type: FETCH_CATEGORIES,
        payload: request
    }
}

export function fetchCategoriesSuccess() {
    return {
        type: FETCH_CATEGORIES_SUCCESS,
        payload: categories
    };
}

export function fetchCategoriesFailure() {
    return {
        type: FETCH_CATEGORIES_FAILURE,
        payload: error
    }
}