import React, { Component } from "react";
import PostCreateContainer from "../containers/PostCreateContainer";
import PostEditContainer from "../containers/PostEditContainer";
import NavHeader from "../components/NavHeader";

class PostEditor extends Component {
  render() {
    const name = this.props.match.params.name
      ? this.props.match.params.name
      : "New Post";
    return (
      <div>
        <NavHeader name={name} />
        {name === "New Post" ? <PostCreateContainer /> : <PostEditContainer />}
      </div>
    );
  }
}
