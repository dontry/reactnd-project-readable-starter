import { createSelector } from "reselect";
import _ from "lodash";

const getPosts = state => _.values(state.posts.byId);
const getCategory = (_, props) => props.category;

export const getPostsByCategory = createSelector(
  [getPosts, getCategory],
  (posts, category) => {
    posts.filter(post => post.category === category);
  }
);
