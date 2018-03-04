import React, { Component } from "react";
import Post from "./Post";
import Card from "material-ui/Card";
import { List, ListItem } from "material-ui/List";
import SortControl from "./SortControl";
import Assignment from "material-ui/svg-icons/action/assignment";
import SubtitleComponent from "./SutitleComponent";
import FlatButton from "material-ui/FlatButton";
import Chip from "material-ui/Chip";
import * as api from "../utils/api";
import { Route, Link } from "react-router-dom";

const SORT_VOTESCORE = 1;
const SORT_TIMESTAMP = 2;

const styles = {
  heading: {
    padding: "0 20px"
  },
  chip: {
    display: "inline-block",
    marginLeft: 10,
    backgroundColor: "#47d8ea"
  }
}

const SubTitle = ({ author, timestamp }) => {
  const currentDate = new Date(timestamp);
  return (
    <span>
      <SubtitleComponent content={author} />
      <SubtitleComponent content={currentDate.toDateString()} />
    </span>
  );
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

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      category: null,
      selectedOption: SORT_VOTESCORE
    };
  }

  async componentDidMount() {
    let posts = [];
    const category = this.props.match.params.category || "";
    if (category !== "") {
      posts = (await api.getPostByCategory(category)).data;
    } else {
      posts = (await api.getPosts()).data;
    }
    this.setState({ posts, category });
  }

  handleChange = (evet, index, value) => {
    const { posts } = this.state;
    let sortMethod = null;
    switch (value) {
      case SORT_VOTESCORE:
        sortMethod = sortVotescore;
        break;
      case SORT_TIMESTAMP:
        sortMethod = sortTimestamp;
        break;
      default:
        break;
    }
    this.setState({
      posts: posts.sort(sortMethod),
      selectedOption: value
    });
  };

  createPostLinks = () => {
    return this.state.posts.map(post => (
      <Link to={`/${post.category}/${post.id}`} key={post.id}>
        <Card>
          <ListItem
            primaryText={
              <h4 style={{ marginTop: 0 }}>
                {post.title}
                <Chip style={styles.chip}>{post.category}</Chip>
              </h4>
            }
            secondaryText={
              <SubTitle author={post.author} timestamp={post.timestamp} />
            }
            leftIcon={<Assignment />}
            rightIcon={<FlatButton>▲{post.voteScore}</FlatButton>}
          />
        </Card>
      </Link>
    ));
  };

  createPostRoutes = () => {
    return this.state.posts.map(post => (
      <Route
        path={`/${post.category}/${post.id}`}
        key={post.id}
        render={() => <Post post={post} />}
      />
    ));
  };

  render() {
    // const children = this.state.posts.map((post) => <Post key={post.id} post={post} />)
    const { category } = this.state;
    const PostLinks = this.createPostLinks();
    const PostRoutes = this.createPostRoutes();
    return (
      <div>
        <Route
          exact
          path={`/${category}`}
          render={() => (
            <div>
              <h1 style={styles.heading}>{category}</h1>
              <SortControl
                onChange={this.handleChange}
                defaultValue={this.state.selectedOption}
                options={sortOptions}
              />
              <List>{PostLinks}</List>
            </div>
          )}
        />
        {PostRoutes}
      </div>
    );
  }
}

export default PostList;
