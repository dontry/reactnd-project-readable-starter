import React, { Component } from "react";
import PropTypes from "prop-types";
import Dialog from "material-ui/Dialog";
import Loading from "react-loading";
import uuid from "uuid";
import { Redirect } from "react-router-dom";
import CommentForm from "./CommentForm";
import ActionButtonGroup from "./ActionButtonGroup";

const styles = {
  dialog: {
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

    const primaryButtonProps = {
      name: "Submit",
      isRaised: true,
      action: this.handleSubmit,
      primary: true
    };

    const secondaryButtonProps = {
      name: "Cancel",
      action: this.handleCancel
    };

    const { commentEntity } = this.state;
    return (
      <Dialog
        title="Comment"
        actions={
          <ActionButtonGroup
            primaryProps={primaryButtonProps}
            secondaryProps={secondaryButtonProps}
          />
        }
        modal={true}
        contentStyle={styles.dialog}
        open={!!open}
      >
        <CommentForm comment={commentEntity} handleChange={this.handleChange} />
      </Dialog>
    );
  }
}

CommentDialog.propTypes = {
  comment: PropTypes.object,
  open: PropTypes.bool,
  addComment: PropTypes.func,
  updateComment: PropTypes.func,
  closeDialog: PropTypes.func
};

export default CommentDialog;
