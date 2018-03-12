import React, { Commponent } from "react";
import { connect } from "react-redux";
import {
  fetchCategories
} from "../actions/categories";
import CategoryMenu from "../components/CategoryMenu";

const mapStateToProps = state => {
  return {
    categories: state.categories.categoriesList.entity
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => {
      dispatch(fetchCategories());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryMenu);
