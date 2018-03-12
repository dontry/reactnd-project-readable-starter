import React, { Component } from "react";
import { connect } from "react-redux";
import NavHeader from "../components/NavHeader";
import {
    addPost
} from '../actions/posts';

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPost());
        }
    }
}

export default connect(null, null)(NavHeader);
