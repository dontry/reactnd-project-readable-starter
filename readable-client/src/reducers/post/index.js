import { combineReducers } from "redux";
import list, * as fromList from "./list";
import byId, * as fromById from "./byId";

const posts = combineReducers({
  byId,
  list
});

export default posts;

export const getPostById = (state, id) => fromById.getPostById(state.byId, id);
export const getPostsByCategory = (state, category) =>
  fromById.getPostsByCategory(state.byId, category);
export const getAllPosts = state => {
  const ids = fromList.getIds();
  return ids.map(id => fromById.getPostById(state.byId, id));
};
export const getIsLoading = state => fromList.getIsLoading(state.list);
export const getError = state =>
  fromList.getError(state.list);
