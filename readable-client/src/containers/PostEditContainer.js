import React, { Component } from "react";
import { connect } from "react-redux";
import { updatePost } from "../actions/posts";
import PostForm from "../components/PostForm";

const mapStateToProps = state => {
  return {
    post: state.posts.activePost.post,
    categories: state.categories.categoriesList.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updatePost: (id, post) => {
      dispatch(updatePost(id, post));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
