import { connect } from "react-redux";
import { openCommentDialog, resetComment } from "../actions/comments";
import AddCommentButton from "../components/AddCommentButton";

const mapDispatchToProps = dispatch => {
  return {
    openDialog: () => {
      dispatch(openCommentDialog());
    },
    reset: () => {
      dispatch(resetComment());
    }
  };
};

export default connect(null, mapDispatchToProps)(AddCommentButton);
