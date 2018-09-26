import { createStore, applyMiddleware } from "redux";
import reducers from "./index";
import thunkMiddleware from "redux-thunk";
import _ from "lodash";
import * as action from "../../actions/comments";
import * as api from "../../utils/api";
const middlewares = [thunkMiddleware];

const MOCK_COMMENTS = [
  {
    id: "894tuq4ut84ut8v4t8wun89g",
    parentId: "8xf0y6ziyjabvozdd253nd",
    timestamp: 1468166872634,
    body: "Hi there! I am a COMMENT.",
    author: "thingtwo",
    voteScore: 6,
    deleted: false,
    parentDeleted: false
  },
  {
    id: "8tu4bsun805n8un48ve89",
    parentId: "8xf0y6ziyjabvozdd253nd",
    timestamp: 1469479767190,
    body: "Comments. Are. Cool.",
    author: "thingone",
    voteScore: -5,
    deleted: false,
    parentDeleted: false
  },
  {
    id: "8tu4bsun80548ve89",
    parentId: "8xf0y6ziyjabvozdd253nd",
    timestamp: 1469479768190,
    body: "Make American Great Again",
    author: "donald",
    voteScore: -15,
    deleted: false,
    parentDeleted: false
  },
  {
    id: "8xf0y6ziydxywerm",
    parentId: "8xf0y6ziydxywermBzx123",
    timestamp: 1469479768190,
    body: "Redux is awesome and yet troublesome",
    author: "lily",
    voteScore: 100,
    deleted: false,
    parentDeleted: false
  }
];

describe("Fetch Comments", () => {
  let mockStore;
  beforeEach(() => {
    mockStore = createStore(reducers, applyMiddleware(...middlewares));
  });
  afterEach(() => {
    mockStore = null;
  });

  it("should return comments by post id", async () => {
    const postId = "8xf0y6ziyjabvozdd253nd";
    const expectedComments = MOCK_COMMENTS.filter(
      comment => comment.parentId === postId
    );
    api.getCommentsByPostId = jest.fn().mockImplementationOnce(postId => {
      if (postId === postId) {
        return Promise.resolve({
          data: expectedComments,
          headers: { "content-type": "application/json" },
          status: 200,
          statusText: "OK"
        });
      } else {
        return Promise.reject({
          status: 400,
          statusText: "Resource not found"
        });
      }
    });

    await mockStore.dispatch(action.fetchComments(postId));

    expect(api.getCommentsByPostId).toBeCalledWith(postId);

    //State
    const curState = mockStore.getState();
    expect(curState.list.ids).toEqual(
      expectedComments.map(comment => comment.id)
    );
    expect(curState.byId).toEqual(_.keyBy(expectedComments, "id"));
  });
});

describe("update comment", () => {
  let mockStore;
  beforeEach(() => {
    mockStore = createStore(reducers, applyMiddleware(...middlewares));
  });
  afterEach(() => {
    mockStore = null;
  });

  it("should update a comment by id", async () => {
    const commentId = MOCK_COMMENTS[0].id;
    const expectedComment = {
      ...MOCK_COMMENTS[0],
      body: "comment updated"
    };
    api.updateCommentById = jest.fn().mockImplementationOnce((id, comment) => {
      if (id === commentId) {
        return Promise.resolve({
          status: 200,
          data: comment
        });
      } else {
        return Promise.reject({
          status: 400,
          statusText: "Resource not found"
        });
      }
    });

    await mockStore.dispatch(action.updateComment(commentId, expectedComment));
    expect(api.updateCommentById).toHaveBeenCalledWith(
      commentId,
      expectedComment
    );

    const curState = mockStore.getState();
    expect(curState.byId).toEqual(_.keyBy([expectedComment], "id"));
  });
});

describe("add a comment", async () => {
  let mockStore;
  beforeEach(() => {
    mockStore = createStore(reducers, applyMiddleware(...middlewares));
  });
  afterEach(() => {
    mockStore = null;
  });

  it("should create a comment", async () => {
    const expectedComment = {
      ...MOCK_COMMENTS[0],
      id: "adfasdf123asdf#@$%123",
      body: "comment updated"
    };
    api.createComment = jest.fn().mockImplementationOnce(comment => {
      return Promise.resolve({
        status: 200,
        data: comment
      });
    });

    await mockStore.dispatch(action.addComment(expectedComment));
    expect(api.createComment).toHaveBeenCalledWith(expectedComment);

    const curState = mockStore.getState();
    expect(curState.list.ids).toEqual([expectedComment.id]);
    expect(curState.byId).toEqual(_.keyBy([expectedComment], "id"));
  });
});


