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
import VoteButtonGroup from "./VoteButtonGroup";
import ActionControl from "./ActionControl";
import { Link } from "react-router-dom";

const styles = {
  card: {
    marginBottom: 10,
    textDecoration: "none"
  },
  chip: {
    display: "inline-block",
    marginLeft: 10,
    backgroundColor: "#47d8ea"
  },
  wrapper: {
    float: "right"
  },
  button: {
    marginLeft: 5,
    marginRight: 5
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

const Body = ({ body }) => <CardText expandable={true}>{body}</CardText>;

const ButtonGroup = handleDelete => (
  <span style={styles.wrapper}>
    <Link to="posts/edit">
      <RaisedButton style={styles.button} label="Edit" primary={true} />
    </Link>
    <FlatButton style={styles.button} label="Delete" onClick={handleDelete} />
  </span>
);

class PostDetail extends Component {
  state = {
    comments: [],
    isCommentListOpen: false
  };

  componentWillMount() {
    this.props.reset && this.props.reset();
  }

  componentDidMount() {
    this.props.fetchPost && this.props.fetchPost(this.props.postId);
  }

  handleDelete = () => {
    this.props.deletePost(this.props.post.id);
    //TODO go back?
  };

  handleVote = option => () => {
    this.props.votePost && this.props.votePost(this.props.postId, option);
  };

  toggleCommentList = () => {
    this.setState({ isCommentListOpen: !this.state.isCommentListOpen });
  };
  render() {
    const { post } = this.props;
    const { comments, isCommentListOpen } = this.state;
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
          <Body body={post.body}/>
          <CardActions>
            <VoteButtonGroup
              isRaised
              voteScore={post.voteScore}
              handleVote={this.handleVote}
            />
            <FlatButton
              icon={<Comment />}
              onClick={this.toggleCommentList}
              label={post.commentCount.toString()}
            />
            <ButtonGroup handleDelete={this.handleDelete} />
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default PostDetail;
