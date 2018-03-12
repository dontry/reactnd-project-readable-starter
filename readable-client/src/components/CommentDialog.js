import React, { Component } from "react";
import Dialog from "material-ui/Dialog";
import FlabButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton/FlatButton";
import CommentForm from "./CommentForm";
import uuid from "uuid";

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
  <div>
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
  </div>
);

class CommentDialog extends Component {
  state = {
    comment: this.props.comment || initialComment(this.props.postId)
  };

  componentWillReceiveProps(nextProps) {
    this.setState({comment: nextProps.comment})
  }

  handleSubmit = () => {
    const { comment } = this.state;
    this.props.closeDialog();
    this.props.updateComment(comment.id, { ...comment, timestamp: Date.now() });
  };

  handleChange = fieldName => event => {
    this.setState({
      comment: { ...this.state.comment, [fieldName]: event.target.value }
    });
  };

  handleCancel = () => {
    this.props.closeDialog();
    this.props.reset();
  };

  render() {
    const { comment } = this.state;
    const { open } = this.props;
    return (
      <Dialog
        title="Comment"
        actions={
          <ButtonGroup
            handleSubmit={this.handleSubmit}
            handleCancel={this.handleCancel}
          />
        }
        modal={true}
        contentStyle={styles.dialog}
        open={open}
      >
        <CommentForm comment={comment} handleChange={this.handleChange} />
      </Dialog>
    );
  }
}

export default CommentDialog;
