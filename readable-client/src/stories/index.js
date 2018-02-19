import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {muiTheme} from 'storybook-addon-material-ui';

import { Button, Welcome } from '@storybook/react/demo';
import Post from '../components/Post';
import PostList from '../components/PostList';
import Comment from '../components/Comment';
import EditorControl from '../components/EditorControl';
import CommentList from '../components/CommentList';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

const posts = [{
  id: '8xf0y6ziyjabvozdd253nd',
  timestamp: 1467166872634,
  title: 'Udacity is the best place to learn React',
  body: 'Everyone says so after all.',
  author: 'thingtwo',
  category: 'react',
  voteScore: 6,
  deleted: false,
  commentCount: 2
}, {
  id: '6ni6ok3ym7mf1p33lnez',
  timestamp: 1468479767190,
  title: 'Learn Redux in 10 minutes!',
  body: 'Just kidding. It takes more than 10 minutes to learn technology.',
  author: 'thingone',
  category: 'redux',
  voteScore: -5,
  deleted: false,
  commentCount: 0
},{
    id: 'xxxxok3ym7mf1p33lnez',
    timestamp: 2468479767190,
    title: 'Learn Nodejs in 1 month!',
    body: 'Just kidding. It takes more than 1 month to learn technology.',
    author: 'derek',
    category: 'nodejs',
    voteScore: 100,
    deleted: false,
    commentCount: 0
}];

const comments =  [{ id: '8tu4bsun805n8un48ve89',
parentId: "8xf0y6ziyjabvozdd253nd",
timestamp: 1469479767190,
body: 'Comments. Are. Cool.',
author: 'thingone',
voteScore: -5,
deleted: false,
parentDeleted: false},{
    id: '894tuq4ut84ut8v4t8wun89g',
    parentId: "8xf0y6ziyjabvozdd253nd",
    timestamp: 1468166872634,
    body: 'Hi there! I am a COMMENT.',
    author: 'thingtwo',
    voteScore: 6,
    deleted: false,
    parentDeleted: false
}]

storiesOf('Material-UI', module)
  .addDecorator(muiTheme())
  .add('Post', () => <Post post={posts[0]} />)
  .add('PostList', () => <PostList posts={posts} />)
  .add('Comment', () => <Comment comment={comments[0]} />)
  .add('CommentList', () => <CommentList comments={comments} />)



