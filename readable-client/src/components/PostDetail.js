import React, { Component, PropTypes } from "react";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import Chip from "material-ui/Chip";
import Comment from "material-ui/svg-icons/communication/comment";
import SubtitleComponent from "./SutitleComponent";
import VoteButtonGroup from "./VoteButtonGroup";
import ConfirmationDialog from "./ConfirmationDialog";
import { Link, Redirect } from "react-router-dom";
import { grey400, grey600 } from "material-ui/styles/colors";
import Loading from "react-loading";
import PageLoading from "./PageLoading";

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
    <FlatButton
      style={styles.button}
      label="Delete"
      secondary={true}
      onClick={handleDelete}
    />
  </span>
);

class PostDetail extends Component {
  static contextTypes = {
    router: () => true //context
  };

  state = {
    openDialog: false
  };

  componentWillMount() {
    this.props.fetchPost && this.props.fetchPost(this.props.postId);
  }

  componentWillUnmount() {
    this.props.reset && this.props.reset();
  }

  handleDelete = () => {
    this.props.deletePost(this.props.postId);
    this.context.router.history.goBack();
  };

  handleVote = option => () => {
    this.props.votePost && this.props.votePost(this.props.postId, option);
  };

  handleOpenDialog = () => {
    this.setState({ open: true });
  };

  handleSubmit = () => {
    this.handleDelete();
  };

  handleCancel = () => {
    this.setState({ open: false });
  };

  render() {
    const { post, handleCommentList, commentListOpen } = this.props;
    const { open, shouldLoading } = this.state;

    if (post.error) {
      return <Redirect to="/error/404" />;
    } else if (post.loading) {
      return (
        // <Loading delay={200} type="spin" color="#222" className="loading" />
        <PageLoading />
      );
    } else if (!post.entity) {
      return <div />;
    }

    return (
      <div>
        <Card style={styles.card}>
          <CardHeader
            title={<Title title={post.entity.title} />}
            subtitle={
              <Subtitle
                author={post.entity.author}
                timestamp={post.entity.timestamp}
                category={post.entity.category}
              />
            }
            actAsExpander={false}
            showExpandableButton={false}
          />
          <Body body={post.entity.body} />
          <CardActions>
            <VoteButtonGroup
              isRaised
              voteScore={post.entity.voteScore}
              handleVote={this.handleVote.bind(this)}
            />
            <FlatButton
              icon={
                commentListOpen ? (
                  <Comment color={grey600} />
                ) : (
                  <Comment color={grey400} />
                )
              }
              onClick={handleCommentList}
              // label={!!post.commentCount ? post.commentCount : "0"}
            />
            <ButtonGroup
              id={post.entity.id}
              handleDelete={this.handleOpenDialog.bind(this)}
            />
          </CardActions>
        </Card>
        <ConfirmationDialog
          title="Delete the post"
          content="Are you sure to delete this blog post?"
          handleSubmit={this.handleSubmit.bind(this)}
          handleCancel={this.handleCancel.bind(this)}
          open={open}
        />
      </div>
    );
  }
}

export default PostDetail;
