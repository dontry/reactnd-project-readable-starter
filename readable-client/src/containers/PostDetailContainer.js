import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  fetchPost,
  fetchPostSuccess,
  fetchPostFailure,
  resetFetchedPost,
  deletePost,
  deletePostSuccess,
  deletePostFailure,
  resetDeletedPost,
  fetchPostsSuccess,
  votePost,
  votePostSuccess,
  votePostFailure
} from "../actions/posts";
import PostDetail from '../components/PostDetail';

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.posts.activePost,
    postId: id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    reset: () => {
      dispatch(resetFetchedPost());
      dispatch(resetDeletedPost());
    },
    fetchPost: id => {
      dispatch(fetchPost(id)).then(res => {
        !res.error
          ? dispatch(fetchPostSuccess(res.data))
          : dispatch(fetchPostsFailure(res.error));
      });
    },
    deletePost: id => {
      dispatch(deletePost(id)).then(res => {
        !res.error
          ? dispatch(deletePostSuccess(res.data))
          : dispatch(deletePostFailure(res.error));
      });
    },
    votePost: (id, option) => {
      dispatch(votePost(id, option)).then(res => {
        !res.error
        ? dispatch(votePostSuccess(res.data))
        : dispatch(votePostFailure(res.error));
      })
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
