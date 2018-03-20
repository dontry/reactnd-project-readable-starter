import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "material-ui/Card";
import List from "material-ui/List";
import SortButtonGroup from "./SortButtonGroup";
import CommentItem from "./CommentItem";
import Loading from "react-loading";
import {
  SORT_VOTESCORE,
  SORT_OPTIONS,
  sortVotescore,
  sortTimestamp
} from "../utils/sort";

class CommentList extends Component {
  state = {
    selectedSortMethod: SORT_VOTESCORE
  };

  componentDidMount() {
    this.props.fetchComments(this.props.postId);
  }

  handleChange = (event, index, value) => {
    this.setState({
      selectedOption: value
    });
  };

  createCommentItems = (comments = []) => {
    if (comments.length === 0)
      return (
        <span style={{ paddingLeft: 25, color: "#acacac" }}>
          No comment yet.
        </span>
      );
    const { selectedSortMethod } = this.state;
    const sortMethod =
      selectedSortMethod === SORT_VOTESCORE ? sortVotescore : sortTimestamp;
    return comments
      .sort(sortMethod)
      .map(comment => (
        <CommentItem
          key={comment.id}
          comment={comment}
          handleDelete={this.props.deleteComment}
          handleDialog={this.props.openDialog}
          handleFetchComment={this.props.fetchComment}
          handleCommentVote={this.props.voteComment}
        />
      ));
  };

  render() {
    const { comments } = this.props;
    if (comments.error) {
      return <div />;
    } else if (comments.loading) {
      return (
        <Loading delay={200} type="spin" color="#222" className="loading" />
      );
    }
    const { selectedSortMethod } = this.state;
    const children = this.createCommentItems(comments.entity);
    return (
      <Card>
        <SortButtonGroup
          onChange={this.handleChange}
          defaultValue={selectedSortMethod}
          options={SORT_OPTIONS}
        />
        <List>{children}</List>
      </Card>
    );
  }
}

CommentList.propTypes = {
  comments: PropTypes.shape({
    commentsList: PropTypes.array,
    error: PropTypes.object,
    loading: PropTypes.bool
  }),
  fetchComments: PropTypes.func,
  fetchComment: PropTypes.func,
  deleteComment: PropTypes.func,
  voteComment: PropTypes.func,
  openDialog: PropTypes.func
};

export default CommentList;
