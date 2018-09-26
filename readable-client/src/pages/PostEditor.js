import React from "react";
import PostCreateContainer from "../containers/PostCreateContainer";
import PostEditContainer from "../containers/PostEditContainer";
import NavHeader from "../components/NavHeader";

const PostEditor = props => {
  const id = props.match.params.id;
  return (
    <div>
      <NavHeader title="Editor" />
      {id ? <PostEditContainer id={id} /> : <PostCreateContainer />}
    </div>
  );
};

export default PostEditor;
