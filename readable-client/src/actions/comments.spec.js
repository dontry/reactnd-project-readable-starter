import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import * as action from "./comments";
import * as api from "../utils/api";
const middlewares = [thunk];
const createMockStore = configureStore(middlewares);

describe("fetch comments", () => {
  let mockStore;
  beforeEach(() => {
    mockStore = createMockStore();
    api.getCommentsByPostId = jest.fn().mockImplementationOnce(postId => {
      if (postId === "1") {
        return Promise.resolve({
          data: [
            {
              id: "123",
              body: "adfaf",
              postId: "1"
            },
            {
              id: "12adf3",
              body: "adfaf",
              postId: "1"
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

  it("should dispatch FETCH_COMMENT_FAILURE", async () => {
    await mockStore.dispatch(action.fetchComments("0"));
    const actions = mockStore.getActions();
    expect(actions.length).toEqual(2);
    expect(actions[0].type).toBe(action.REQUEST_FETCH_COMMENTS);
    expect(actions[1].type).toBe(action.FETCH_COMMENTS_FAILURE);
  });

  it("should dispath FETCH_COMMENTS_BY_POST_ID on fetch comments success", async () => {
    await mockStore.dispatch(action.fetchComments("1"));
    const actions = mockStore.getActions();
    expect(actions.length).toEqual(2);
    expect(actions[0].type).toBe(action.REQUEST_FETCH_COMMENTS);
    expect(actions[1].type).toBe(action.FETCH_COMMENTS_SUCCESS);
  });
});
