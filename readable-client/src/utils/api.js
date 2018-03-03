import axios from 'axios';

const HEADERS = { headers: { 'Authorization': "udacity" } };
const URL = "http://localhost:3001";
const ax = axios.create(HEADERS)

export function getCategories() {
  return ax.get(`${URL}/categories`);
}

export function getPosts() {
  return ax.get(`${URL}/posts`);
}

export function getPostByCategory(category = "") {
  if(category === "") return null;
  return ax.get(`${URL}/${category}/posts`);
}

export function getPostById(id) {
    return ax.get(`${URL}/posts/${id}`);
}

export function updatePostById(id, {title, body}) {
    return ax.put(`${URL}/posts/${id}`, {title, body});
}

export function createPost(post) {
    return ax.post(`${URL}/posts`, post);
}

export function deletePostById(id) {
    return ax.delete(`${URL}/posts/${id}`);
}

export function voteForPostById(id, option) { //option: "upVote" or "downVote"
    return ax.post(`${URL}/posts/${id}`, option);
}

export function getCommentById(id) {
    return ax.get(`${URL}/comments/${id}`);
}

export function createComment(comment) {
    return ax.post(`${URL}/comments`, comment);
}

export function updateCommentById(id, {timestamp, body}) {
    return ax.put(`${URL}/comments/${id}`, {timestamp, body});
}

export function deleteCommentById(id) {
    return ax.delete(`${URL}/comments/${id}`);
}

export function getCommentsByPostId(id) {
    return ax.get(`${URL}/posts/${id}/comments`);
}

