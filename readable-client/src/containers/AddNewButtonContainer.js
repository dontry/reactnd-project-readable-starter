import { connect } from "react-redux";
import { openCommentDialog } from "../actions/comments";
import AddCommentButton from '../components/AddCommentButton';

const mapDispatchToProps = dispatch => {
  return {
    openDialog: () => {
      dispatch(openCommentDialog());
    }
  };
};

export default connect(null, mapDispatchToProps)(AddCommentButton);
