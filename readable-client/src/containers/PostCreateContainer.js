import React, { Component } from "react";
import { connect } from "react-redux";
import { resetNewPost, addPost } from "../actions/posts";
import PostForm from "../components/PostForm";

const mapStateToProps = state => {
  return {
    post: state.posts.newPost.post,
    categories: state.categories.categoriesList.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    reset: () => {
      dispatch(resetNewPost());
    },
    addPost: post => {
      dispatch(addPost(post));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
