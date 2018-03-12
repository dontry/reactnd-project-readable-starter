import React, { Component } from "react";
import { connect } from "react-redux";
import PostDetailContainer from "../containers/PostDetailContainer";
import NavHeader from "../components/NavHeader";

class PostShow extends Component {
  render() {
    return (
      <div>
        <NavHeader title="Blog Post" />
        <PostDetailContainer postId={this.props.match.params.id} />
      </div>
    );
  }
}

export default PostShow;
