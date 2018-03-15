import {
  REQUEST_FETCH_COMMENTS,
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENT,
  RESET_FETCHED_COMMENT,
  REQUEST_ADD_COMMENT,
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_SUCCESS,
  REQUEST_UPDATE_COMMENT,
  UPDATE_COMMENT_FAILURE,
  UPDATE_COMMENT_SUCCESS,
  REQUEST_DELETE_COMMENT,
  DELETE_COMMENT_FAILURE,
  DELETE_COMMENT_SUCCESS,
  OPEN_COMMENT_DIALOG,
  CLOSE_COMMENT_DIALOG,
  updateComment
} from "../actions/comments";

const INITIAL_STATE = {
  commentsList: { entity: [], error: null, loading: false },
  newComment: { entity: null, error: null, loading: false },
  activeComment: { entity: null, error: null, loading: false },
  deletedComment: { entity: null, error: null, loading: false },
  dialog: { open: false}
};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
    case REQUEST_FETCH_COMMENTS:
      return {
        ...state,
        commentsList: { entity: [], error: null, loading: true }
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        commentsList: { entity: action.payload, error: null, loading: false }
      };
    case FETCH_COMMENTS_FAILURE:
      error = action.payload || { meesage: action.payload.message };
      return {
        ...state,
        commentsList: { entity: [], error: error, loading: false }
      };
    case FETCH_COMMENT:
      const comment = state.commentsList.entity.filter(
        comment => comment.id === action.payload
      )[0];
      return {
        ...state,
        activeComment: { ...state.activeComment, entity: comment }
      };
    case RESET_FETCHED_COMMENT:
      return {
        ...state,
        activeComment: { ...state.activeComment, entity: null }
      };
    case REQUEST_ADD_COMMENT:
      return {
        ...state,
        newComment: { entity: null, error: null, loading: true }
      };
    case ADD_COMMENT_SUCCESS:
      let currentComentlist = state.commentsList.entity;
      // currentComentlist.push(action.payload);
      return {
        ...state,
        commentsList: {
          ...state.commentsList,
          entity: [...state.commentsList.entity, action.payload]
        },
        newComment: { entity: action.payload, error: null, loading: false }
      };
    case ADD_COMMENT_FAILURE:
      error = action.payload || { meesage: action.payload.message };
      return {
        ...state,
        newComment: { entity: null, error: error, loading: false }
      };
    case REQUEST_UPDATE_COMMENT:
      return {
        ...state,
        activeComment: { ...state.activeComment, loading: true }
      };
    case UPDATE_COMMENT_SUCCESS:
      const updatedComment = action.payload;
      const updateCommentListEntity = state.commentsList.entity.map(comment => {
        if (comment.id === updatedComment.id) {
          return updatedComment;
        } else {
          return comment;
        }
      });
      return {
        ...state,
        commentsList: {
          ...state.commentsList,
          entity: updateCommentListEntity
        },
        activeComment: { entity: action.payload, error: null, loading: false }
      };
    case UPDATE_COMMENT_FAILURE:
      error = action.payload || { meesage: action.payload.message };
      return {
        ...state,
        activeComment: { entity: null, error: error, loading: false }
      };
    case REQUEST_DELETE_COMMENT:
      return {
        ...state,
        deletedComment: { ...state.deletedComment, loading: true }
      };
    case DELETE_COMMENT_SUCCESS:
      const deletedComment = action.payload;
      const updatedCommentListEntity = state.commentsList.entity.filter(comment => comment.id !== deletedComment.id);
      return {
        ...state,
        commentsList: {
          ...state.commentsList,
          entity: updatedCommentListEntity
        },
        deletedComment: { entity: deletedComment, eror: null, loading: false }
      };
    case DELETE_COMMENT_FAILURE:
      error = action.payload || { meesage: action.payload.message };
      return {
        ...state,
        deletedComment: { entity: null, error: error, loading: false }
      };
    case OPEN_COMMENT_DIALOG:
      return {
        ...state,
        dialog: { open: true }
      };
    case CLOSE_COMMENT_DIALOG:
      return {
        ...state,
        dialog: { open: false }
      };
    default:
      return state;
  }
}
