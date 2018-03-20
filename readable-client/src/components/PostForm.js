import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "material-ui/Card";
import TextField from "material-ui/TextField/TextField";
import CategoryDropdownMenu from "./CategoryDropdownMenu";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import { withRouter, Redirect } from "react-router-dom";
import uniqid from "uniqid";
import { isRequired } from "../utils/validations";
import PageLoading from "./PageLoading";

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

const requiredField = isRequired("This field is required");

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
    postEntity: this.props.post.entity || InitNewPost()
  };
  componentWillMount() {
    this.props.reset && this.props.reset();
  }
  componentDidMount() {
    if (this.isCategoryEmpty()) {
      this.props.fetchCategories();
    }
  }
  handleChangeField = fieldName => event => {
    this.setState({
      postEntity: { ...this.state.postEntity, [fieldName]: event.target.value }
    });
  };
  handleChangeCategory = (event, index, value) => {
    this.setState({
      postEntity: { ...this.state.postEntity, category: value }
    });
  };
  handleSubmit = () => {
    if (this.props.addPost) {
      const newPostEntity = { ...this.state.postEntity, timestamp: Date.now() };
      this.props.addPost(newPostEntity);
    } else if (this.props.updatePost) {
      const updatedPostEntity = {
        ...this.state.postEntity,
        timestamp: Date.now()
      };
      this.props.updatePost(updatedPostEntity.id, updatedPostEntity);
    }
    this.context.router.history.goBack();
  };
  handleCancel = () => {
    //TODO
    this.context.router.history.goBack();
  };
  isCategoryEmpty = (entity = []) => {
    return !entity || entity.length === 0;
  };
  render() {
    const { post, categories } = this.props;
    const categoryNames = this.isCategoryEmpty(categories.entity)
      ? []
      : categories.entity.map(category => category.name);

    if (post.error) {
      return <Redirect to="/error/404" />;
    } else if (post.loading) {
      return <PageLoading />;
    }

    const { postEntity } = this.state;
    return (
      <Card style={styles.card}>
        <TextField
          name="title"
          floatingLabelText="Title"
          style={styles.titleField}
          value={postEntity.title}
          onChange={this.handleChangeField("title")}
          errorText={requiredField(postEntity)}
        />
        <CategoryDropdownMenu
          selected={postEntity.category}
          categories={categoryNames}
          handleChange={this.handleChangeCategory}
        />
        <br />
        <TextField
          name="author"
          floatingLabelText="Author"
          value={postEntity.author}
          onChange={this.handleChangeField("author").bind(this)}
          errorText={requiredField(postEntity.author.trim())}
        />
        <TextField
          name="body"
          floatingLabelText="Body"
          multiLine={!!postEntity.title}
          fullWidth={true}
          rows={3}
          value={postEntity.body}
          onChange={this.handleChangeField("body").bind(this)}
          errorText={requiredField(postEntity.body.trim())}
        />
        <ButtonGroup
          handleSubmit={this.handleSubmit.bind(this)}
          handleCancel={this.handleCancel.bind(this)}
        />
      </Card>
    );
  }
}

PostForm.propTypes = {
  post: PropTypes.shape({
    entity: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool
  }).isRequired,
  categories: PropTypes.shape({
    entity: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool
  }).isRequired
};

export default withRouter(PostForm);
