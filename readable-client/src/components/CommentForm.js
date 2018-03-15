import React, { Component, Fragment } from "react";
import TextField from "material-ui/TextField/TextField";
import { isRequired } from "../utils/validations";

const requiredField = isRequired('This field is required.');


const CommentForm = ({ comment, handleChange }) => {
  if(!comment) return <div></div>
  return (
    <Fragment>
      <TextField
        name="author"
        floatingLabelText="Author"
        value={comment.author}
        errorText={requiredField(comment.author.trim())}
        onChange={handleChange("author")}
      />
      <TextField
        name="body"
        hintText="Pleaes write here..."
        fullWidth={true}
        value={comment.body}
        errorText={requiredField(comment.body.trim())}
        onChange={handleChange("body")}
      />
    </Fragment>
  );
};

export default CommentForm;
