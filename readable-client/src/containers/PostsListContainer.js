import { connect } from "react-redux";
import {
  fetchPosts,
  fetchPostsByCategory,
  resetFetchedPosts
} from "../actions/posts";
import PostsList from "../components/PostsList";

const mapStateToProps = (state, ownProps) => {
  const category = ownProps.category;
  const allPostsEntity = state.posts.postsList.entity;
  return {
    posts: category
      ? {
          ...state.posts.postsList,
          entity: allPostsEntity.filter(post => post.category === category)
        }
      : state.posts.postsList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    reset: () => {
      dispatch(resetFetchedPosts());
    },
    fetchPosts: () => {
      dispatch(fetchPosts());
    },
    fetchPostsByCategory: category => {
      dispatch(fetchPostsByCategory(category));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
