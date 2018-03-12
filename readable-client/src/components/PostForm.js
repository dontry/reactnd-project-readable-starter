import React, { Component } from "react";
import Card from "material-ui/Card";
import TextField from "material-ui/TextField/TextField";
import CategoryDropdownMenu from "./CategoryDropdownMenu";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import { withRouter } from "react-router-dom";
import uniqid from "uniqid";

const styles = {
  card: {
    padding: "20px 20px"
  },
  actionButton: {
    marginLeft: 5,
    marginRight: 5
  },
  titleField: {
    fontWeight: "bold",
    marginBottom: 10,
    display: "block"
  },
  dropdownMenu: {
    display: "block"
  }
};

const InitNewPost = () => ({
  id: uniqid(),
  timestamp: null,
  title: "",
  body: "",
  author: "",
  category: "",
  voteScore: 0,
  deleted: false,
  commentCount: 0
});

const ButtonGroup = ({ handleSubmit, handleCancel }) => (
  <div>
    <RaisedButton
      label="Submit"
      primary={true}
      onClick={handleSubmit}
      style={styles.actionButton}
    />
    <FlatButton
      label="Cancel"
      secondary={true}
      onClick={handleCancel}
      style={styles.actionButton}
    />
  </div>
);

class PostForm extends Component {
  static contextTypes = {
    router: () => true //context
  };
  state = {
    post: !!this.props.post ? this.props.post : InitNewPost()
  };
  componentWillMount() {
    this.props.reset && this.props.reset();
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
  handleSubmit = () => {
    if (this.props.addPost) {
      const newPost = { ...this.state.post, timestamp: Date.now() };
      this.props.addPost(newPost);
    } else if (this.props.updatePost) {
      const updatedPost = { ...this.state.post, timestamp: Date.now() };
      this.props.updatePost(updatedPost.id, updatedPost);
    }
    this.context.router.history.goBack();
  };
  handleCancel = () => {
    //TODO
    this.context.router.history.goBack();
  };
  render() {
    const { post } = this.state;
    const categories = this.props.categories.map(category => category.name);
    return (
      <Card style={styles.card}>
        <TextField
          name="title"
          floatingLabelText="Title"
          style={styles.titleField}
          value={post.title}
          onChange={this.handleChangeField("title").bind(this)}
        />
        <CategoryDropdownMenu
          selected={post.category}
          categories={categories}
          handleChange={this.handleChangeCategory.bind(this)}
        />
        <br />
        <TextField
          name="author"
          floatingLabelText="Author"
          value={post.author}
          onChange={this.handleChangeField("author").bind(this)}
        />
        <TextField
          name="body"
          floatingLabelText="Body"
          multiLine={!!post.title}
          fullWidth={true}
          rows={3}
          value={post.body}
          onChange={this.handleChangeField("body").bind(this)}
        />
        <ButtonGroup
          handleSubmit={this.handleSubmit.bind(this)}
          handleCancel={this.handleCancel.bind(this)}
        />
      </Card>
    );
  }
}

export default withRouter(PostForm);
