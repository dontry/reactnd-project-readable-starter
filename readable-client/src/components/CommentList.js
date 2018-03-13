import React, { Component } from "react";
import List from "material-ui/List";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import SortButtonGroup from "./SortButtonGroup";
import CommentItem from "./CommentItem";

const SORT_VOTESCORE = 1;
const SORT_TIMESTAMP = 2;

const sortOptions = [
  {
    value: SORT_VOTESCORE,
    text: "Sort by vote"
  },
  {
    value: SORT_TIMESTAMP,
    text: "Sort by time"
  }
];

const sortVotescore = (a, b) => a.voteScore < b.voteScore;
const sortTimestamp = (a, b) => a.timestamp < b.timestamp;

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


  createCommentItems = comments => {
    if (comments.length === 0) return <span>No comments</span>;
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
          handleVoteComment={this.props.voteComment}
        />
      ));
  };

  render() {
    const comments = this.props.comments || [];
    const { selectedSortMethod } = this.state;
    const children = this.createCommentItems(comments);
    return (
      <div>
        <SortButtonGroup
          onChange={this.handleChange}
          defaultValue={selectedSortMethod}
          options={sortOptions}
        />
        <List>{children}</List>
      </div>
    );
  }
}

export default CommentList;
