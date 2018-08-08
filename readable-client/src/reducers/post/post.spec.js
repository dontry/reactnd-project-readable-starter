import { createStore, applyMiddleware } from "redux";
import reducers from "./index";
import thunkMiddleware from "redux-thunk";
import _ from "lodash";
import * as action from "../../actions/posts";
import * as api from "../../utils/api";
const middlewares = [thunkMiddleware];

const MOCK_POSTS = [
  {
    id: "8xf0y6ziyjabvozdd253nd",
    timestamp: 1467166872634,
    title: "Udacity is the best place to learn React",
    body: "Everyone says so after all.",
    author: "thingtwo",
    category: "react",
    voteScore: 6,
    deleted: false,
    commentCount: 3
  },
  {
    id: "8xf0y6ziydxywermBzx123",
    timestamp: 1467166872634,
    title: "React Lifecyle",
    body: "React has several lifecycle",
    author: "thingtwo",
    category: "react",
    voteScore: 10,
    deleted: false,
    commentCount: 0
  },
  {
    id: "6ni6ok3ym7mf1p33lnez",
    timestamp: 1468479767190,
    title: "Learn Redux in 10 minutes!",
    body: "Just kidding. It takes more than 10 minutes to learn technology.",
    author: "thingone",
    category: "redux",
    voteScore: -5,
    deleted: false,
    commentCount: 0
  },
  {
    id: "6ni6ok3ym7mf1p33asdfa",
    timestamp: 1468479000000,
    title: "Learn Node in 10 hours!",
    body: "Just kidding. It takes more than 10 hours to learn technology.",
    author: "thingone",
    category: "node",
    voteScore: 10,
    deleted: false,
    commentCount: 0
  }
];

describe("Fetch Posts", () => {
  let mockStore;
  beforeEach(() => {
    mockStore = createStore(reducers, applyMiddleware(...middlewares));
  });
  afterEach(() => {
    mockStore = null;
  });

  it("should return post list", async () => {
    api.getPosts = jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        data: MOCK_POSTS,
        headers: { "content-type": "application/json" },
        status: 200,
        statusText: "OK"
      })
    );

    await mockStore.dispatch(action.fetchPosts());

    expect(api.getPosts).toHaveBeenCalled();

    //State
    const curState = mockStore.getState();
    expect(curState.list.ids).toEqual(MOCK_POSTS.map(post => post.id));
    expect(curState.byId).toEqual(_.keyBy(MOCK_POSTS, "id"));
  });

  it("should return the first post by id", async () => {
    const postId = MOCK_POSTS[0].id;
    api.getPostById = jest.fn().mockImplementationOnce(id => {
      if (id === postId) {
        return Promise.resolve({
          data: MOCK_POSTS[0],
          headers: { "content-type": "application/json" },
          status: 200,
          statusText: "OK"
        });
      } else {
        return Promise.reject({
          status: 404
        });
      }
    });

    await mockStore.dispatch(action.fetchPost(postId));
    expect(api.getPostById).toHaveBeenCalledWith(postId);

    const curState = mockStore.getState();
    expect(curState.list.ids).toEqual(postId);
    expect(curState.byId).toEqual(_.keyBy(MOCK_POSTS.slice(0, 1), "id"));
  });

  it("should return post by category", async () => {
    const category = "react";
    const selectedPosts = MOCK_POSTS.filter(post => post.category === category);
    api.getPostsByCategory = jest.fn().mockImplementationOnce(category => {
      if (!_.isEmpty(selectedPosts)) {
        return Promise.resolve({
          data: selectedPosts,
          headers: { "content-type": "application/json" },
          status: 200,
          statusText: "OK"
        });
      } else {
        return Promise.resolve({
          data: [],
          status: 204,
          statusText: "Empty content"
        });
      }
    });

    await mockStore.dispatch(action.fetchPostsByCategory(category));
    expect(api.getPostsByCategory).toHaveBeenCalledWith(category);

    const curState = mockStore.getState();
    expect(curState.list.ids).toEqual(selectedPosts.map(p => p.id));
    expect(curState.byId).toEqual(_.keyBy(selectedPosts, "id"));
  });
});
