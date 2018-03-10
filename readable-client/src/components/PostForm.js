import React, { Component } from "react";
import TextField from "material-ui/TextField/TextField";
import CategoryDropdownMenu from "./CategoryDropdownMenu";
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { withRouter } from 'react-router-dom';
import uniqid from "uniqid";

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

const INTIAL_NEW_POST = {
  id: uniqid(),
  timestamp: null,
  title: "",
  body: "",
  author: "",
  category: "",
  voteScore: 0,
  deleted: false,
  commentCount: 0
};

const ButtonGroup = (handleSubmit, handleCancel) => (
  <div>
    <RaisedButton
      label="Submit"
      primary={true}
      onClick={handleSubmit}
      style={styles.actionButton}
    />,
    <FlatButton
      label="Cancel"
      secondary={true}
      onClick={handleCancel}
      style={styles.actionButton}
    />
  </div>
);

class PostForm extends Component {
  state = {
    post: !!this.props.post ? this.props.post : INTIAL_NEW_POST
  };
  componentWillMount() {
    this.props.reset();
  }
  handleChangeField = fieldName => event => {
    this.setState({
      post: { ...this.state.post, [fieldName]: event.target.value }
    });
  };
  handleChangeCategory = (event, index, value) => {
    this.setState({
      post: { ...this.state.post, category: value }
    });
  };
  handleCancel = () => {
    //TODO
    this.props.history.goback();
  }
  render() {
    const { post } = this.state;
    const { categories, createPost } = this.props;
    return (
      <div>
        <TextField
          style={style.titleField}
          value={post.title}
          onChange={this.handleChangeTitle}
        />
        <CategoryDropdownMenu
          selected={post.category}
          categories={categories}
          handleChange={this.handleChangeField("title")}
        />
        <TextField
          value={post.author}
          onChange={this.handleChangeField("author")}
        />
        <TextField
          floatingLabelText="Body"
          multiLine={!!post.title}
          fullWidth={true}
          rows={3}
          value={post.body}
          onChange={this.handleChangeField("body")}
        />
        <ButtonGroup handleSubmit={createPost} handleCancel={this.handleCancel} />
      </div>
    );
  }
}

export default withRouter(PostForm);