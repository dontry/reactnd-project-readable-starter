import React, { Component } from "react";
import NavHeader from '../components/NavHeader'
import PostsListContainer from '../containers/PostsListContainer';


class PostListIndex extends Component {
    render() {
        return (
            <div>
                <NavHeader name="Udacity Blog" />
                <PostsListContainer />
            </div>
        )
    }
}

export default PostListIndex;