import { connect } from "react-redux";
import { resetNewPost, addPost } from "../actions/posts";
import PostForm from "../components/PostForm";
import { fetchCategories } from "../actions/categories";
import { getError, getIsLoading } from "../reducers/post";


const mapStateToProps = state => {
  return {
    loading: getIsLoading(state.posts),
    error: getError(state.posts),
    categories: state.categories.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    reset: () => {
      dispatch(resetNewPost());
    },
    addPost: post => {
      dispatch(addPost(post));
    },
    fetchCategories: () => {
      dispatch(fetchCategories());
    }

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
