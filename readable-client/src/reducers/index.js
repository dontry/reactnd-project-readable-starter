import { combineReducers } from "redux";
import categories from "./categories";
// import posts from './posts';
// import comments from "./comments";
import posts from "./post";
import comments from "./comment";
import notifications from "./notifications";

export default combineReducers({
  categories,
  posts,
  comments,
  notifications
});
