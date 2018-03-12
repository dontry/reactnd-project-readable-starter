import React, { Component } from "react";
import TextField from "material-ui/TextField/TextField";

const CommentForm = ({ comment, handleChange }) => {
  return (
    <div>
      <TextField
        name="author"
        floatingLabelText="Author"
        value={comment.author}
        // errorText="This field is required"
        onChange={handleChange("author")}
      />
      <TextField
        name="body"
        hintText="Pleaes write here..."
        fullWidth={true}
        value={comment.body}
        // errorText="This field is required"
        onChange={handleChange("body")}
      />
    </div>
  );
};

export default CommentForm;
