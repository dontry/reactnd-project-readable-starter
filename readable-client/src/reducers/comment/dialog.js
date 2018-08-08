import { combineReducers } from "redux";
import { OPEN_COMMENT_DIALOG, CLOSE_COMMENT_DIALOG } from "../../actions/comments";

const open = (state = false, action) => {
  switch (action.type) {
    case OPEN_COMMENT_DIALOG:
      return true;
    case CLOSE_COMMENT_DIALOG:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  open
});
