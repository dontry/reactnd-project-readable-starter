import React, { Component } from "react";
import {
  resetNewPost,
  createPost,
  createPostSuccess,
  createPostFailure
} from "../actions/posts";
import PostForm from "../components/PostForm";

const mapStateToProps = (state) => {
  return {
    post: state.posts.newPost
  }
}

const mapDispatchToProps = dispatch => {
  return {
    reset: () => {
      dispatch(resetNewPost());
    },
    onCreate: post => {
      dispatch(api.createPost(post)).then(res => {
        !res.error
          ? dispatch(createPostSuccess(res.data))
          : dispatch(createPostFailure(res.error));
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
