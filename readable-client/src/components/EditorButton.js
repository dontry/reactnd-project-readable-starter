import React, { Component } from "react";
import TextField from "material-ui/TextField";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";

const styles = {
  actionButton: {
    marginLeft: 5,
    marginRight: 5
  },
  titleField: {
    fontWeight: "bold",
    marginBottom: 10
  }
};

class EditorButton extends Component {
  state = {
    isEditorOpen: false,
    content: this.props.content
  };

  handleOpen = () => {
    this.setState({ isEditorOpen: true });
  };

  handleClose = () => {
    this.setState({ isEditorOpen: false });
  };

  handleSubmit = () => {
    this.setState({ isEditorOpen: false });
  };

  handleChangeTitle = event => {
    this.setState({
      content: { ...this.state.content, title: event.target.value }
    });
  };

  handleChangeBody = event => {
    this.setState({
      content: { ...this.state.content, body: event.target.value }
    });
  };

  render() {
    const { content, isEditorOpen } = this.state;
    const { style } = this.props;
    const actions = [
      <RaisedButton
        label="Submit"
        primary={true}
        onClick={this.handleSubmit}
        style={styles.actionButton}
      />,
      <FlatButton
        label="Cancel"
        secondary={true}
        onClick={this.handleSubmit}
        style={styles.actionButton}
      />
    ];
    return (
      <span>
        <RaisedButton
          style={style}
          label={this.props.label || "Edit"}
          primary={true}
          onClick={this.handleOpen}
        />
        <Dialog
          title={content.title ? "Post Edit" : "Comment Edit"}
          actions={actions}
          modal={true}
          open={isEditorOpen}
        >
          {content.title && (
            <TextField
              style={styles.titleField}
              floatingLabelText="Title"
              value={content.title}
              onChange={this.handleChangeTitle}
            />
          )}
          <TextField
            floatingLabelText="Content"
            multiLine={!!content.title}
            fullWidth={true}
            rows={3}
            value={content.body}
            onChange={this.handleChangeBody}
          />
        </Dialog>
      </span>
    );
  }
}

export default EditorButton;
