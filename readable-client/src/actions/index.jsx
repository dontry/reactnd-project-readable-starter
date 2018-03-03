export const ADD_POSTS = 'ADD_POSTS';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPVOTE_POST = 'UPVOTE_POST';
export const DOWNVOTE_POST = 'DOWNVOTE_POST';

export const ADD_COMMENTS = 'ADD_COMMENTS';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const addPosts = ({posts}) => {
    return {
        type: ADD_POSTS,
        posts
    }
}

export const updatePost = ({id, post}) => {
    return {
        type: UPDATE_POST,
        id,
        post
    }
}

export const deletePost = ({id}) => {
    return {
        type: DELETE_POST,
        id
    }
}

export const downvotePost = ({id}) => {
    return {
        type: DOWNVOTE_POST,
        id
    }
}

export const upvotePost = ({id}) => {
    return {
        type: UPVOTE_POST,
        id
    }
}

export const addComments = ({comments}) => {
    return {
        type: ADD_COMMENTS,
        comments
    }
}

export const updateComment = ({id, comment}) => {
    return {
        type: UPDATE_COMMENT,
        comment
    }
}

export const deleteComment = ({id}) => {
    return {
        type: DELETE_COMMENT,
        id
    }
}