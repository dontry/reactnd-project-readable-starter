import { connect } from "react-redux";
import {
  fetchComments,
  deleteComment,
  fetchComment,
  openCommentDialog,
  voteComment
} from "../actions/comments";
import CommentList from "../components/CommentList";
import {
  getCommentByParentId,
  getIsLoading,
  getError
} from "../reducers/comment";

const mapStateToProps = (state, ownProps) => {
  return {
    comments: getCommentByParentId(state.comments, ownProps.postId),
    loading: getIsLoading(state.comments),
    error: getError(state.comments)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: postId => {
      dispatch(fetchComments(postId));
    },
    fetchComment: id => {
      dispatch(fetchComment(id));
    },
    deleteComment: id => {
      dispatch(deleteComment(id));
    },
    voteComment: (id, option) => {
      dispatch(voteComment(id, option));
    },
    openDialog: () => {
      dispatch(openCommentDialog());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList);
