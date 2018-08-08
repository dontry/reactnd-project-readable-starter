import { connect } from "react-redux";
import { updatePost } from "../actions/posts";
import PostForm from "../components/PostForm";
import { fetchCategories } from "../actions/categories";
import { getPostById, getIsLoading, getError } from "../reducers/post";

const mapStateToProps = (state, ownProps) => {
  return {
    post: getPostById(state.posts, ownProps.id),
    loading: getIsLoading(state.posts),
    error: getError(state.posts),
    categories: state.categories.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updatePost: (id, post) => {
      dispatch(updatePost(id, post));
    },
    fetchCategories: () => {
      dispatch(fetchCategories());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
