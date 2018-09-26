import _ from "lodash";
const byId = (state = {}, action) => {
  if (
    action.type.includes("COMMENT") &&
    action.payload &&
    action.payload.entities
  ) {
    return { ...state, ...action.payload.entities.comments };
  } else {
    return state;
  }
};

export default byId;
export const getCommentById = (state, id) => state[id];
export const getCommentsByParentId = (state, parentId) =>
  _
    .values(state)
    .filter(
      comment => comment.parentId === parentId && comment.deleted === false
    );
