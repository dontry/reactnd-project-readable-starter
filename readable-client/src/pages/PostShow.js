import React, { Component } from "react";
import { connect } from "react-redux";
import NavHeader from "../components/NavHeader";
import PostDetail from "../components/PostDetail";

class PostShow extends Component {
  render() {
    return (
      <div>
        <NavHeader name="Post Detail" />
        <PostDetail id={this.props.match.params.id} />
      </div>
    );
  }
}

export default PostShow;
