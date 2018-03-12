import React, { Component } from "react";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import Chip from "material-ui/Chip";
import Comment from "material-ui/svg-icons/communication/comment";
import SubtitleComponent from "./SutitleComponent";
import VoteButtonGroup from "./VoteButtonGroup";
import { Link } from "react-router-dom";
import { grey400, grey600 } from "material-ui/styles/colors";

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

const Body = ({ body }) => <CardText expandable={false}>{body}</CardText>;

const ButtonGroup = ({ id, handleDelete }) => (
  <span style={styles.wrapper}>
    <Link to={`/posts/${encodeURIComponent(id)}/edit`}>
      <RaisedButton style={styles.button} label="Edit" primary={true} />
    </Link>
    <FlatButton style={styles.button} label="Delete" secondary={true} onClick={handleDelete} />
  </span>
);

class PostDetail extends Component {
  static contextTypes = {
    router: () => true //context
  };

  componentWillMount() {
    this.props.reset && this.props.reset();
  }

  componentDidMount() {
    this.props.fetchPost && this.props.fetchPost(this.props.postId);
  }

  handleDelete = () => {
    this.props.deletePost(this.props.postId);
    this.context.router.history.goBack();
  };

  handleVote = function(option) {
    const _this = this;
    return function() {
      _this.props.votePost && _this.props.votePost(_this.props.postId, option);
    };
  };

  render() {
    const { post, handleCommentList, commentListOpen } = this.props;
    if (!post) return <div ></div>;
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
            actAsExpander={false}
            showExpandableButton={false}
          />
          <Body body={post.body} />
          <CardActions>
            <VoteButtonGroup
              isRaised
              voteScore={post.voteScore}
              handleVote={this.handleVote.bind(this)}
            />
            <FlatButton
              icon={commentListOpen ? <Comment color={grey600} /> : <Comment color={grey400} />}
              onClick={handleCommentList}
              // label={!!post.commentCount ? post.commentCount : "0"}
            />
            <ButtonGroup
              id={post.id}
              handleDelete={this.handleDelete.bind(this)}
            />
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default PostDetail;
