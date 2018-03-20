import React, { Component } from "react";
import PostItem from "./PostItem";
import { List } from "material-ui/List";
import SortButtonGroup from "./SortButtonGroup";
import { Redirect } from "react-router-dom";
import PageLoading from "./PageLoading";
import {
  SORT_VOTESCORE,
  SORT_OPTIONS,
  sortVotescore,
  sortTimestamp
} from "../utils/sort";

class PostsList extends Component {
  state = {
    selectedSortMethod: SORT_VOTESCORE
  };

  componentWillMount() {
    this.props.reset && this.props.reset();
  }

  componentDidMount() {
    const category = !!this.props.match ? this.props.match.params.category : "";
    if (category === "") {
      this.props.fetchPosts && this.props.fetchPosts();
    } else {
      this.props.fetchPostsByCategory && this.props.fetchPostsByCategory();
    }
  }

  handleChange = (event, index, value) => {
    this.setState({
      selectedSortMethod: value
    });
  };

  createPostItems = (posts = []) => {
    const { selectedSortMethod } = this.state;
    const sortMethod =
      selectedSortMethod === SORT_VOTESCORE ? sortVotescore : sortTimestamp;
    return posts
      .sort(sortMethod)
      .map(post => <PostItem key={post.id} post={post} />);
  };

  render() {
    const { posts } = this.props;
    if (posts.error) {
      return <Redirect to="/error/404" />;
    } else if (posts.loading) {
      return <PageLoading />;
    }

    const { selectedSortMethod } = this.state;
    const PostItems = this.createPostItems(posts.entity);
    return (
      <div>
        <SortButtonGroup
          onChange={this.handleChanger}
          defaultValue={selectedSortMethod}
          options={SORT_OPTIONS}
        />
        <List>{PostItems}</List>
      </div>
    );
  }
}

export default PostsList;
