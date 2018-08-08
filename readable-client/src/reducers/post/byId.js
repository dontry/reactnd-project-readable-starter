import _ from "lodash";
const byId = (state = {}, action) => {
  if (
    action.type.includes("POST") &&
    action.payload &&
    action.payload.entities
  ) {
    return { ...state, ...action.payload.entities.posts };
  } else {
    return state;
  }
};

export default byId;
export const getPostById = (state, id) => state[id];
export const getPostsByCategory = (state, category) =>
  category
    ? _
        .values(state)
        .filter(post => post.category === category && post.deleted === false)
    : _.values(state).filter(post => post.deleted === false);
