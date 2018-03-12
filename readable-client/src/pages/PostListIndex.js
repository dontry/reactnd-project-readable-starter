import React, { Component } from "react";
import NavHeader from '../components/NavHeader';
import PostsListContainer from '../containers/PostsListContainer';
import CategoryMenuContainer from '../containers/CategoryMenuContainer';


class PostListIndex extends Component {
    render() {
        return (
            <div>
                <NavHeader title="Home" />
                <CategoryMenuContainer />
                <PostsListContainer />
            </div>
        )
    }
}

export default PostListIndex;