import { connect } from "react-redux";
import { resetNewPost, addPost } from "../actions/posts";
import PostForm from "../components/PostForm";
import { fetchCategories } from "../actions/categories";


const mapStateToProps = state => {
  return {
    post: state.posts.newPost,
    categories: state.categories.categoriesList
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
