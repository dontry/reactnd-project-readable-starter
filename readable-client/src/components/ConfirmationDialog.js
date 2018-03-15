import React, { Component } from "react";
import Dialog from "material-ui/Dialog";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";

const styles = {
  button: {
    margin: 5
  }
};

const ActionButtonGroup = ({ actionLabel, handleSubmit, handleCancel }) => (
  <div>
    <RaisedButton
      style={styles.button}
      label={actionLabel}
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

const Content = ({ content }) => <h3>{content}</h3>;

const ConfirmationDialog = props => {
  const {
    handleSubmit,
    handleCancel,
    content,
    title,
    actionLabel,
    open
  } = props;
  return (
    <Dialog
      title={title || ""}
      actions={
        <ActionButtonGroup
          actionLabel={actionLabel || "Yes"}
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
        />
      }
      modal={true}
      open={open}
    >
      <Content content={content} />
    </Dialog>
  );
};

export default ConfirmationDialog;
