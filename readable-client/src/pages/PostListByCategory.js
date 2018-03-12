import React, { Component } from "react";
import NavHeader from "../components/NavHeader";
import PostsListContainer from "../containers/PostsListContainer";
import CategoryMenuContainer from "../containers/CategoryMenuContainer";

class PostListByCategory extends Component {
  render() {
    const category = this.props.match.params.category;
    return (
      <div>
        <NavHeader title={category} />
        <CategoryMenuContainer />
        <PostsListContainer category={category} />
      </div>
    );
  }
}

export default PostListByCategory;
