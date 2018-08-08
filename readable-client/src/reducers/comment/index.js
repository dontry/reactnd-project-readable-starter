import { combineReducers } from "redux";
import list, * as fromList from "./list";
import byId, * as fromById from "./byId";
import dialog from "./dialog";

const comments = combineReducers({
  byId,
  list,
  dialog
});

export default comments;

export const getCommentById = (state, id) =>
  fromById.getCommentById(state.byId, id);
export const getCommentByParentId = (state, parentId) =>
  fromById.getCommentsByParentId(state.byId, parentId);
export const getIsLoading = state => fromList.getIsLoading(state.list);
export const getError = state => fromList.getError(state.list);
