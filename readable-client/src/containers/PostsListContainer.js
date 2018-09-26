import { connect } from "react-redux";
import {
  fetchPosts,
  fetchPostsByCategory,
  resetFetchedPosts
} from "../actions/posts";
import PostsList from "../components/PostsList";
import { getPostsByCategory, getIsLoading, getError } from "../reducers/post";

const mapStateToProps = (state, ownProps) => {
  return {
    posts: getPostsByCategory(state.posts, ownProps.category),
    loading: getIsLoading(state.posts),
    error: getError(state.posts)
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList);
