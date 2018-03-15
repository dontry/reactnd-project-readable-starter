import React, { Component, Fragment } from "react";
import Dialog from "material-ui/Dialog";
import FlabButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton/FlatButton";
import CommentForm from "./CommentForm";
import uuid from "uuid";
import { Redirect } from "react-router-dom";
import Loading from "react-loading";

const styles = {
  dialog: {
    width: "100%",
    maxWidth: "none"
  },
  button: {
    margin: 5
  }
};

const initialComment = postId => ({
  id: uuid(),
  parentId: postId,
  timestamp: null,
  body: "",
  author: "",
  voteScore: 0,
  deleted: false,
  parentDeleted: false
});

const ButtonGroup = ({ handleSubmit, handleCancel }) => (
  <Fragment>
    <RaisedButton
      style={styles.button}
      label="Submit"
      primary={true}
      onClick={handleSubmit}
    />
    <FlatButton
      style={styles.button}
      label="Cancel"
      secondary={true}
      onClick={handleCancel}
    />
  </Fragment>
);

class CommentDialog extends Component {
  state = {
    commentEntity:
      this.props.comment.entity || initialComment(this.props.postId),
    isCreate: !this.props.comment.entity
  };

  componentWillReceiveProps(nextProps) {
    const activeCommentEntity =
      nextProps.comment.entity || initialComment(this.props.postId);
    this.setState({
      commentEntity: activeCommentEntity,
      isCreate: !nextProps.comment.entity
    });
  }

  handleSubmit = () => {
    const { commentEntity } = this.state;
    this.props.closeDialog();
    if (this.state.isCreate) {
      this.props.addComment({ ...commentEntity, timestamp: Date.now() });
    } else {
      this.props.updateComment(commentEntity.id, {
        ...commentEntity,
        timestamp: Date.now()
      });
    }
  };

  handleChange = fieldName => event => {
    this.setState({
      commentEntity: {
        ...this.state.commentEntity,
        [fieldName]: event.target.value
      }
    });
  };

  handleCancel = () => {
    this.props.closeDialog();
    this.props.reset();
  };

  render() {
    const { comment, open } = this.props;
    if (comment.error) {
      return <Redirect to="/error/404" />;
    } else if (comment.loading) {
      return (
        <Loading delay={200} type="spin" color="#222" className="loading" />
      );
    }

    const { commentEntity } = this.state;
    return (
      <Dialog
        title="Comment"
        actions={
          <ButtonGroup
            handleSubmit={this.handleSubmit.bind(this)}
            handleCancel={this.handleCancel.bind(this)}
          />
        }
        modal={true}
        contentStyle={styles.dialog}
        open={open}
      >
        <CommentForm comment={commentEntity} handleChange={this.handleChange} />
      </Dialog>
    );
  }
}

export default CommentDialog;
