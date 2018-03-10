import React, { Component } from "react";
import {connect} from "react-redux";
import {
  resetNewPost,
  addPost,
  addPostSuccess,
  addPostFailure
} from "../actions/posts";
import PostForm from "../components/PostForm";

const mapStateToProps = state => {
  return {
    post: state.posts.newPost
  };
};

const mapDispatchToProps = dispatch => {
  return {
    reset: () => {
      dispatch(resetNewPost());
    },
    onCreate: post => {
      dispatch(addPost(post)).then(res => {
        !res.error
          ? dispatch(addPostSuccess(res.data))
          : dispatch(addPostFailure(res.error));
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
