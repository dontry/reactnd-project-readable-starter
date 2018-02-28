import * as api from '../src/utils/api'

test('get categories', async () => {
    const categories = await api.getCategories();
    expect(categories.data.length).toBeGreaterThan(0);
})

test('get posts', async () => {
  const posts = await api.getPosts();
  expect(posts.data.length).toBeGreaterThan(0);
})

test('get posts by category', async() => {
    const posts = await api.getPostByCategory('redux');
    expect(posts.data[0].category).toEqual('redux');
}) 

test('get post by id', async() => {
    const post = await api.getPostById('8xf0y6ziyjabvozdd253nd');
    expect(post.data.id).toEqual('8xf0y6ziyjabvozdd253nd');
})

test('get comment by id', async() => {
    const comment = await api.getCommentById('894tuq4ut84ut8v4t8wun89g');
    expect(comment.data.id).toEqual('894tuq4ut84ut8v4t8wun89g');
})
