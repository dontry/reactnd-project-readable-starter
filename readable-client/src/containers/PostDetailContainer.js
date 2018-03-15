import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchPost,
  deletePost,
  resetFetchedPost,
  resetDeletedPost,
  votePost
} from "../actions/posts";
import PostDetail from "../components/PostDetail";
import { fetchCategories } from "../actions/categories";

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.posts.activePost,
    postId: ownProps.postId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    reset: () => {
      dispatch(resetFetchedPost());
      dispatch(resetDeletedPost());
    },
    fetchPost: id => {
      dispatch(fetchPost(id));
    },
    deletePost: id => {
      dispatch(deletePost(id));
    },
    votePost: (id, option) => {
      dispatch(votePost(id, option));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
