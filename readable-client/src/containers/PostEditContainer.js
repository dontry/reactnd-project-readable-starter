import React, { Component } from "react";
import { connect } from "react-redux";
import { updatePost } from "../actions/posts";
import PostForm from "../components/PostForm";
import { fetchCategories } from "../actions/categories";

const mapStateToProps = state => {
  return {
    post: state.posts.activePost,
    categories: state.categories.categoriesList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updatePost: (id, post) => {
      dispatch(updatePost(id, post));
    },
    fetchCategories: () => {
      dispatch(fetchCategories());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
