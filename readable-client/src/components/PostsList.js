import React, { Component } from "react";
import PostItem from "./PostItem";
import { List } from "material-ui/List";
import SortButtonGroup from "./SortButtonGroup";

const SORT_VOTESCORE = 1;
const SORT_TIMESTAMP = 2;

const styles = {
  heading: {
    padding: "0 20px"
  }
};

const sortOptions = [
  {
    value: SORT_VOTESCORE,
    text: "Sort by vote"
  },
  {
    value: SORT_TIMESTAMP,
    text: "Sort by time"
  }
];

const sortVotescore = (a, b) => a.voteScore < b.voteScore;
const sortTimestamp = (a, b) => a.timestamp < b.timestamp;

class PostsList extends Component {
  state = {
    selectedOption: SORT_VOTESCORE
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
      selectedOption: value
    });
  };

  createPostItems = posts => {
    const { selectedOption } = this.state;
    const sortMethod =
      selectedOption === SORT_VOTESCORE ? sortVotescore : sortTimestamp;
    return posts
      .sort(sortMethod)
      .map(post => <PostItem key={post.id} post={post} />);
  };

  render() {
    const posts = this.props.posts || [];
    const { selectedOption } = this.state;
    const PostItems = this.createPostItems(posts);
    return (
      <div>
        <SortButtonGroup
          onChange={this.handleChange}
          defaultValue={selectedOption}
          options={sortOptions}
        />
        <List>{PostItems}</List>
      </div>
    );
  }
}

export default PostsList;
