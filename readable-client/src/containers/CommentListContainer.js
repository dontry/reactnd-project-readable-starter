import { connect } from "react-redux";
import { fetchComments, deleteComment, fetchComment, openCommentDialog } from "../actions/comments";
import CommentList from "../components/CommentList";
const mapStateToProps = (state, ownProps) => {
  return {
    comments: state.comments.commentsList.entity
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
    deleteComment: commentId => {
      dispatch(deleteComment(commentId));
    },
    openDialog: () => {
        dispatch(openCommentDialog());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
