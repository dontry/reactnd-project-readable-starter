import React, { Commponent } from "react";
import {connect} from 'react-redux';
import {
  fetchCategories,
  fetchCategoriesSuccess,
  fetchCategoriesFailure
} from "../actions/categories";
import CategoryMenu from "../components/CategoryMenu";

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => {
      dispatch(fetchCategories()).then(res => {
        return !res.error
          ? dispatch(fetchCategoriesSuccess(res.data))
          : dispatch(fetchCategoriesFailure(res.error));
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryMenu);
