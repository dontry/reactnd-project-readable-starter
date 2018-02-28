import * as api from "../src/utils/api";
import uuidv1 from "uuid/v1";

test("get categories", async () => {
  const res = await api.getCategories();
  expect(res.data.categories.length).toBeGreaterThan(0);
});

test("get posts", async () => {
  const posts = await api.getPosts();
  expect(posts.data.length).toBeGreaterThan(0);
});

test("get posts by category", async () => {
  const posts = await api.getPostByCategory("redux");
  expect(posts.data[0].category).toEqual("redux");
});

test("get post by id", async () => {
  const post = await api.getPostById("8xf0y6ziyjabvozdd253nd");
  expect(post.data.id).toEqual("8xf0y6ziyjabvozdd253nd");
});

test("get comment by id", async () => {
  const comment = await api.getCommentById("894tuq4ut84ut8v4t8wun89g");
  expect(comment.data.id).toEqual("894tuq4ut84ut8v4t8wun89g");
});

test('get comments by post id', async() => {
    const comments = await api.getCommentsByPostId('8xf0y6ziyjabvozdd253nd');
    expect(comments.data.length).toBeGreaterThan(0);
})

test("create a post", async () => {
  const post = {
    id: uuidv1(),
    timestamp: new Date().getTime(),
    title: "Test",
    body: "Hello world!",
    author: "don",
    category: "redux"
  };

  const res = await api.createPost(post);
  expect(res.data.id).toEqual(post.id);
});

test("update a post", async () => {
  const title = "New test";
  const body = "This is a  cat";

  const res = await api.updatePostById("6ni6ok3ym7mf1p33lnez", { title, body });
  expect(res.data.title).toEqual(title);
  expect(res.data.body).toEqual(body);
});

test("vote for a post", async () => {
  const post = await api.getPostById("8xf0y6ziyjabvozdd253nd");
  const res = await api.voteForPostById("8xf0y6ziyjabvozdd253nd", {
    option: "upVote"
  });

  expect(res.data.voteScore).toEqual(post.data.voteScore + 1);
});

test("create a comment", async () => {
  const comment = {
    id: uuidv1(),
    timestamp: new Date().getTime(),
    body: "This is a comment.",
    author: "don",
    parentId: "6ni6ok3ym7mf1p33lnez"
  };

  const res = await api.createComment(comment);
  expect(res.data.body).toEqual(comment.body);
  expect(res.data.author).toEqual(comment.author);
});

test('delete a post', async() => {
    const res = await api.deletePostById('8xf0y6ziyjabvozdd253nd');
    expect(res.data.deleted).toBeTruthy();
})

test('delete a comment', async() => {
    const res = await api.deleteCommentById('894tuq4ut84ut8v4t8wun89g');
    expect(res.data.deleted).toBeTruthy();
})
