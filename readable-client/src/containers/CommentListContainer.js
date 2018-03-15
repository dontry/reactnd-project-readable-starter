import { connect } from "react-redux";
import {
  fetchComments,
  deleteComment,
  fetchComment,
  openCommentDialog,
  voteComment
} from "../actions/comments";
import CommentList from "../components/CommentList";
const mapStateToProps = (state, ownProps) => {
  return {
    comments: state.comments.commentsList
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

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
