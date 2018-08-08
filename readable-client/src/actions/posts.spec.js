import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import * as action from "./posts";
import * as api from "../utils/api";

const middlewares = [thunk];
const createMockStore = configureStore(middlewares);

describe("feth posts", () => {
  let mockStore;
  beforeEach(() => {
    mockStore = createMockStore();
    api.getPosts = jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        data: [],
        status: 200,
        statusText: "OK"
      })
    );
  });

  it("should dispatch FETCH_POSTS_SUCCESS on fetch success ", async () => {
    await mockStore.dispatch(action.fetchPosts());
    const actions = mockStore.getActions();
    expect(actions.length).toEqual(2);
    expect(actions[0].type).toBe(action.REQUEST_FETCH_POSTS);
    expect(actions[1].type).toBe(action.FETCH_POSTS_SUCCESS);
  });
});

describe("fetch  a post by id", () => {
  let mockStore;
  beforeEach(() => {
    mockStore = createMockStore();
    api.getPostById = jest.fn().mockImplementationOnce(id => {
      if (id === "8xf0y6ziyjabvozdd253nd") {
        return Promise.resolve({
          data: [
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
            }
          ],
          status: 200,
          statusText: "OK"
        });
      } else {
        return Promise.reject({
          stauts: 404,
          statusText: "Resource not found"
        });
      }
    });
  });

  it("should disptach  FECTH_POST_FAILURE on fetch a post by id failure", async () => {
    await mockStore.dispatch(action.fetchPost("0"));
    const actions = mockStore.getActions();
    expect(actions.length).toEqual(2);
    expect(actions[0].type).toBe(action.REQUEST_FETCH_POST);
    expect(actions[1].type).toBe(action.FETCH_POST_FAILURE);
  });

  it("should dispatch FETCH_POST_SUCCESS on fetch a post by id success", async () => {
    await mockStore.dispatch(action.fetchPost("8xf0y6ziyjabvozdd253nd"));
    const actions = mockStore.getActions();
    expect(actions.length).toEqual(2);
    expect(actions[0].type).toBe(action.REQUEST_FETCH_POST);
    expect(actions[1].type).toBe(action.FETCH_POST_SUCCESS);
  });
});

describe("fetch posts by category", () => {
  let mockStore;
  beforeEach(() => {
    mockStore = createMockStore();
    api.getPostsByCategory = jest.fn().mockImplementationOnce(category => {
      if (category === "react") {
        return Promise.resolve({
          data: [
            {
              id: "1",
              category: "react",
              author: "thingtwo"
            },
            {
              id: "2",
              category: "react",
              author: "james"
            }
          ]
        });
      } else {
        return Promise.reject({
          status: 404,
          statusText: "Resource not found"
        });
      }
    });
  });

  it("should dispatch FETCH_POSTS_FAILURE when fetch posts by category failed", async () => {
    await mockStore.dispatch(action.fetchPostsByCategory("xx"));
    const actions = mockStore.getActions();
    expect(actions.length).toBe(2);
    expect(actions[0].type).toBe(action.REQUEST_FETCH_POSTS_BY_CATEGORY);
    expect(actions[1].type).toBe(action.FETCH_POSTS_FAILURE);
  });

  it("should dispatch FETCH_POSTS_SUCCESS when fetch posts by category succeeded", async () => {
    await mockStore.dispatch(action.fetchPostsByCategory("react"));
    const actions = mockStore.getActions();
    expect(actions.length).toBe(2);
    expect(actions[0].type).toBe(action.REQUEST_FETCH_POSTS_BY_CATEGORY);
    expect(actions[1].type).toBe(action.FETCH_POSTS_SUCCESS);
  });
});

describe("reset posts", () => {
  let mockStore;
  beforeEach(() => {
    mockStore = createMockStore();
  });

  it("should dispatch RESET_POSTS when reset fetched posts", () => {
    mockStore.dispatch(action.resetFetchedPosts());
    const actions = mockStore.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe(action.RESET_POSTS);
  });
});

describe("add a post", () => {
  let mockStore;
  beforeEach(() => {
    mockStore = createMockStore();
    api.createPost = jest.fn().mockImplementationOnce(payload => {
      if (payload) {
        return Promise.resolve({ data: payload });
      } else {
        return Promise.reject({
          status: 404,
          statusText: "Resource not founc"
        });
      }
    });
  });

  afterEach(() => {
    mockStore = null;
  });

  it("should dispatch ADD_POST_FAILURE when adding a post failed", async () => {
    await mockStore.dispatch(action.addPost(null));
    const actions = mockStore.getActions();
    expect(actions.length).toBe(2);
    expect(actions[0].type).toBe(action.REQUEST_ADD_POST);
    expect(actions[1].type).toBe(action.ADD_POST_FAILURE);
  });

  it("should dispatch ADD_POST_SUCCESS when adding a post succeed", async () => {
    await mockStore.dispatch(
      action.addPost({
        id: "1",
        category: "react",
        author: "jimmy"
      })
    );
    const actions = mockStore.getActions();
    expect(actions.length).toBe(2);
    expect(actions[0].type).toBe(action.REQUEST_ADD_POST);
    expect(actions[1].type).toBe(action.ADD_POST_SUCCESS);
  });
});

describe("update a post", async () => {
  let mockStore;
  beforeEach(() => {
    mockStore = createMockStore();
    api.updatePostById = jest.fn().mockImplementationOnce((id, post) => {
      if (id === "1") {
        return Promise.resolve({
          data: post
        });
      } else {
        return Promise.reject({
          status: 404,
          statusText: "Resource not found"
        });
      }
    });
  });

  it("should dispatch UPDATE_POST_FAILURE when updating a post with invalid id", async () => {
    await mockStore.dispatch(action.updatePost("2", {}));
    const actions = mockStore.getActions();
    expect(actions.length).toBe(2);
    expect(actions[0].type).toBe(action.REQUEST_UPDATE_POST);
    expect(actions[1].type).toBe(action.UPDATE_POST_FAILURE);
  });

  it("should dispatch UPDATE_POST_SUCCESS when updating a post succeeded", async () => {
    await mockStore.dispatch(
      action.updatePost("1", { id: "1", author: "david" })
    );
    const actions = mockStore.getActions();
    expect(actions.length).toBe(2);
    expect(actions[0].type).toBe(action.REQUEST_UPDATE_POST);
    expect(actions[1].type).toBe(action.UPDATE_POST_SUCCESS);
  });
});
