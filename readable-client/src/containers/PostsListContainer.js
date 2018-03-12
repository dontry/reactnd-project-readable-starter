import { connect } from "react-redux";
import {
  fetchPosts,
  fetchPostsByCategory,
  resetFetchedPosts
} from "../actions/posts";
import PostsList from "../components/PostsList";

const mapStateToProps = (state, ownProps) => {
  const category = ownProps.category;
  const allPosts = state.posts.postsList.entity;
  return {
    posts: category
      ? allPosts.filter(post => post.category === category)
      : allPosts
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
