import React, { Component } from "react";
import PostCreateContainer from "../containers/PostCreateContainer";
import PostEditContainer from "../containers/PostEditContainer";
import NavHeaderContainer from '../containers/NavHeaderContainer';

class PostEditor extends Component {
  render() {
    const id = this.props.match.params.id;
    return (
      <div>
        <NavHeaderContainer title="Editor"/>
        {id ? <PostEditContainer /> : <PostCreateContainer />}
      </div>
    );
  }
}

export default PostEditor;
