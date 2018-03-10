import { connect } from "react-redux";
import {
  fetchPosts,
  fetchPostsByCategory,
  fetchPostsSuccess,
  fetchPostsFailure,
  resetFetchedPosts
} from "../actions/posts";
import PostsList from "../components/PostsList";

const mapStateToProps = state => {
  return {
    postsList: state.posts.postsList
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
      dispatch(fetchPostsByCategory(category))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
