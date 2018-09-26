import { connect } from "react-redux";
import {
  fetchPost,
  deletePost,
  resetFetchedPost,
  resetDeletedPost,
  votePost
} from "../actions/posts";
import PostDetail from "../components/PostDetail";
import { getPostById, getError, getIsLoading } from "../reducers/post";

const mapStateToProps = (state, ownProps) => {
  return {
    post: getPostById(state.posts, ownProps.postId),
    error: getError(state.posts),
    loading: getIsLoading(state.posts)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    reset: () => {
      dispatch(resetFetchedPost());
      dispatch(resetDeletedPost());
    },
    fetchPost: id => {
      dispatch(fetchPost(id));
    },
    deletePost: id => {
      dispatch(deletePost(id));
    },
    votePost: (id, option) => {
      dispatch(votePost(id, option));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
