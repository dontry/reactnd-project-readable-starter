import axios from 'axios';

const HEADERS = { headers: { 'Authorization': "udacity" } };
const ROOT_URL = "http://localhost:3001";
const ax = axios.create(HEADERS)

export function getCategories() {
  return ax.get(`${ROOT_URL}/categories`);
}

export function getPosts() {
  return ax.get(`${ROOT_URL}/posts`);
}

export function getPostsByCategory(category = "") {
  if(category === "") return null;
  return ax.get(`${ROOT_URL}/${category}/posts`);
}

export function getPostById(id) {
    return ax.get(`${ROOT_URL}/posts/${encodeURIComponent(id)}`);
}

export function updatePostById(id, post) {
    return ax.put(`${ROOT_URL}/posts/${encodeURIComponent(id)}`, {...post});
}

export function createPost(post) {
    return ax.post(`${ROOT_URL}/posts`, post);
}

export function deletePostById(id) {
    return ax.delete(`${ROOT_URL}/posts/${encodeURIComponent(id)}`);
}

export function votePostById(id, option) { //option: "upVote" or "downVote"
    return ax.post(`${ROOT_URL}/posts/${encodeURIComponent(id)}`, {option});
}

export function getCommentById(id) {
    return ax.get(`${ROOT_URL}/comments/${encodeURIComponent(id)}`);
}

export function createComment(comment) {
    return ax.post(`${ROOT_URL}/comments`, comment);
}

export function voteCommentById(id, option) {
    return ax.post(`${ROOT_URL}/comments/${encodeURIComponent(id)}`, {option});
}

export function updateCommentById(id, comment) {
    return ax.put(`${ROOT_URL}/comments/${encodeURIComponent(id)}`, {...comment});
}

export function deleteCommentById(id) {
    return ax.delete(`${ROOT_URL}/comments/${encodeURIComponent(id)}`);
}

export function getCommentsByPostId(id) {
    return ax.get(`${ROOT_URL}/posts/${encodeURIComponent(id)}/comments`);
}

