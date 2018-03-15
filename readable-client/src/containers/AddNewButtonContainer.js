import { connect } from "react-redux";
import { openCommentDialog, resetFetchComment } from "../actions/comments";
import AddCommentButton from "../components/AddCommentButton";

const mapDispatchToProps = dispatch => {
  return {
    openDialog: () => {
      dispatch(openCommentDialog());
    },
    reset: () => {
      dispatch(resetFetchComment());
    }
  };
};

export default connect(null, mapDispatchToProps)(AddCommentButton);
