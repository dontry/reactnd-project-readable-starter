import React, { Component } from "react";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import Chip from "material-ui/Chip";
import Comment from "material-ui/svg-icons/communication/comment";
import SubtitleComponent from "./SubtitleComponent";
import VoteButtonGroup from "./VoteButtonGroup";
import ConfirmationDialog from "./ConfirmationDialog";
import { Link, Redirect } from "react-router-dom";
import { grey400, grey600 } from "material-ui/styles/colors";
import PageLoading from "./PageLoading";
import ActionButtonGroup from "./ActionButtonGroup";

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
  buttonWrapper: {
    float: "right"
  },
  button: {
    position: "relative"
  },
  primaryLink: {
    display: "inline-block",
    position: "absolute",
    width: 88,
    height: 36,
    left: -28
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

const PostBody = ({ body }) => <CardText expandable={false}>{body}</CardText>;

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

  handleDeleteDialog = () => {
    this.setState({ open: true });
  };

  handleSubmit = () => {
    this.handleDelete();
  };

  handleCancel = () => {
    this.setState({ open: false });
  };

  render() {
    const { post, handleCommentList, commentListOpen, error, loading } = this.props;
    const { open } = this.state;

    if (error) {
      return <Redirect to="/error/404" />;
    } else if (loading) {
      return <PageLoading />;
    } else if (!post) {
      return <div />;
    }

    const postIdURL = encodeURIComponent(post.id);
    const primaryButtonProps = {
      style: styles.button,
      name: (
        <Link style={styles.primaryLink} to={`/posts/${postIdURL}/edit`}>
          Edit
        </Link>
      ),
      className: "link-btn",
      isRaised: true,
      aciton: e => {
        e.preventDefault();
      },
      primary: true
    };

    const secondaryButtonProps = {
      name: "Delete",
      action: this.handleDeleteDialog
    };

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
          <PostBody body={post.body} />
          <CardActions>
            <VoteButtonGroup
              isRaised
              voteScore={post.voteScore}
              handleVote={this.handleVote}
              loading={post.vote_loading}
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
            <ActionButtonGroup
              style={styles.buttonWrapper}
              primaryProps={primaryButtonProps}
              secondaryProps={secondaryButtonProps}
            />
          </CardActions>
        </Card>
        <ConfirmationDialog
          title="Delete the post"
          content="Are you sure to delete this blog post?"
          primaryLabel="Yes"
          secondaryLabel="Cancel"
          handleSubmit={this.handleSubmit}
          handleCancel={this.handleCancel}
          open={!!open}
        />
      </div>
    );
  }
}

export default PostDetail;
