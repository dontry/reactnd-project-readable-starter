import { connect } from "react-redux";
import {
  updateComment,
  addComment,
  closeCommentDialog,
  resetFetchComment
} from "../actions/comments";
import CommentDialog from "../components/CommentDialog";

const mapStateToProps = (state, ownProps) => {
  return {
    comment: state.comments.activeComment.entity,
    open: state.comments.dialog.open,
    postId: ownProps.postId
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
      dispatch(resetFetchComment());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentDialog);
