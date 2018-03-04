import React, { Component } from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import FontIcon from "material-ui/FontIcon";
import Chip from "material-ui/Chip";
import Comment from "material-ui/svg-icons/communication/comment";
import SubtitleComponent from "./SutitleComponent";
import VoteControl from "./VoteControl";
import ActionControl from "./ActionControl";
import CommentList from "./CommentList";
import * as api from "../utils/api";

const styles = {
  card: {
    marginBottom: 10,
    textDecoration: "none"
  },
  chip: {
    display: "inline-block",
    marginLeft: 10,
    backgroundColor: "#47d8ea"
  }
};
const Title = ({ title }) => {
  return <h2>{title}</h2>;
};

const Subtitle = ({ author, timestamp, category }) => {
  const currentDate = new Date(timestamp);
  return (
    <div>
      <SubtitleComponent style={{ fontWeight: "bolder" }} content={author} />
      <SubtitleComponent content={currentDate.toDateString()} />
      <SubtitleComponent
        content={<Chip style={styles.chip}>{category}</Chip>}
      />
    </div>
  );
};

class Post extends Component {
  state = {
    post: this.props.post,
    comments: [],
    isCommentListOpen: false
  };

  async componentDidMount() {
    const { post } = this.state;
    const comments = (await api.getCommentsByPostId(post.id)).data;
    this.setState({ comments });
  }

  toggleCommentList = () => {
    this.setState({ isCommentListOpen: !this.state.isCommentListOpen });
  };
  render() {
    const { comments, post, isCommentListOpen } = this.state;
    return (
      <div>
        <Card style={styles.card}>
          <CardHeader
            title={<Title title={post.title} />}
            subtitle={
              <Subtitle
                author={post.author}
                timestamp={post.timestamp}
                category={post.category}
              />
            }
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>{post.body}</CardText>
          <CardActions>
            <VoteControl isRaised voteScore={post.voteScore} />
            <FlatButton
              icon={<Comment />}
              onClick={this.toggleCommentList}
              label={post.commentCount > 0 ? post.commentCount : "0"}
            />
            <ActionControl content={post} />
          </CardActions>
        </Card>
        {isCommentListOpen && (
          <Card>
            <CommentList comments={comments} />
          </Card>
        )}
      </div>
    );
  }
}

export default Post;
