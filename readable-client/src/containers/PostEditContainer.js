import React, { Component } from 'react';
import { connect } from "react-redux";
import {
    createPost,
    createPostSuccess,
    createPostFailure
} from '../actions/posts'
import PostForm from '../components/PostForm';

const mapStateToProps = (state) => {
    return {
        post: state.posts.activePost
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createPost: () => {
            dispatch(createPost(post)).then(res => {
                !res.error
                ? dispatch(createPostSuccess(res.data))
                : dispatch(createPostFailure(res.error));
            })
        }        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);