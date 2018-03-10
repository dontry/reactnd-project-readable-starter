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

export function updatePostById(id, {title, body}) {
    return ax.put(`${ROOT_URL}/posts/${encodeURIComponent(id)}`, {title, body});
}

export function createPost(post) {
    return ax.post(`${ROOT_URL}/posts`, post);
}

export function deletePostById(id) {
    return ax.delete(`${ROOT_URL}/posts/${encodeURIComponent(id)}`);
}

export function voteForPostById(id, option) { //option: "upVote" or "downVote"
    return ax.post(`${ROOT_URL}/posts/${encodeURIComponent(id)}`, option);
}

export function getCommentById(id) {
    return ax.get(`${ROOT_URL}/comments/${encodeURIComponent(id)}`);
}

export function createComment(comment) {
    return ax.post(`${ROOT_URL}/comments`, comment);
}

export function updateCommentById(id, {timestamp, body}) {
    return ax.put(`${ROOT_URL}/comments/${encodeURIComponent(id)}`, {timestamp, body});
}

export function deleteCommentById(id) {
    return ax.delete(`${ROOT_URL}/comments/${encodeURIComponent(id)}`);
}

export function getCommentsByPostId(id) {
    return ax.get(`${ROOT_URL}/posts/${encodeURIComponent(id)}/comments`);
}

