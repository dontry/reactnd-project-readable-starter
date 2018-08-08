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
    comment: this.props.comment || initialComment(this.props.postId),
    isCreate: !this.props.comment
  };

  componentWillReceiveProps(nextProps) {
    const activeComment =
      nextProps.comment || initialComment(this.props.postId);
    this.setState({
      comment: activeComment,
      isCreate: !nextProps.comment
    });
  }

  handleSubmit = () => {
    const { comment } = this.state;
    this.props.closeDialog();
    if (this.state.isCreate) {
      this.props.addComment({ ...comment, timestamp: Date.now() });
    } else {
      this.props.updateComment(comment.id, {
        ...comment,
        timestamp: Date.now()
      });
    }
  };

  handleChange = fieldName => event => {
    this.setState({
      comment: {
        ...this.state.comment,
        [fieldName]: event.target.value
      }
    });
  };

  handleCancel = () => {
    this.props.closeDialog();
    this.props.reset();
  };

  render() {
    const { open, error, loading } = this.props;
    if (error) {
      return <Redirect to="/error/404" />;
    } else if (loading) {
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

    const { comment } = this.state;

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
        <CommentForm comment={comment} handleChange={this.handleChange} />
      </Dialog>
    );
  }
}

CommentDialog.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  addComment: PropTypes.func,
  updateComment: PropTypes.func,
  closeDialog: PropTypes.func
};

export default CommentDialog;
