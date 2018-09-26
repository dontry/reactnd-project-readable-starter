import { connect } from "react-redux";
import {
  updateComment,
  addComment,
  closeCommentDialog,
  resetComment
} from "../actions/comments";
import CommentDialog from "../components/CommentDialog";
import { getCommentById, getIsLoading, getError } from "../reducers/comment";

const mapStateToProps = state => {
  return {
    comment: getCommentById(state.comments, state.comments.list.activeId),
    loading: getIsLoading(state.comments),
    error: getError(state.comments),
    open: state.comments.dialog.open
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateComment: (id, comment) => {
      dispatch(updateComment(id, comment));
    },
    addComment: comment => {
      dispatch(addComment(comment));
    },
    closeDialog: () => {
      dispatch(closeCommentDialog());
    },
    reset: () => {
      dispatch(resetComment());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentDialog);
