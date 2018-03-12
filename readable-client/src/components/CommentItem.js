import React, { Component } from "react";
import { Card, CardHeader, CardText } from "material-ui/Card";
import SubtitleComponent from "./SutitleComponent";
import CardActions from "material-ui/Card/CardActions";
import VoteButtonGroup from "./VoteButtonGroup";
import FlatButton from "material-ui/FlatButton";
import CommentDialog from "./CommentDialog";

const styles = {
  wrapper: {
    float: "right"
  },
  button: {
    marginLeft: 5,
    marginRight: 5
  }
};

const ButtonGroup = ({ comment, handleEdit, handleDelete }) => {
  return (
    <span style={styles.wrapper}>
      <FlatButton
        style={styles.button}
        primary={true}
        label="Edit"
        style={styles.button}
        onClick={handleEdit}
      />
      <FlatButton
        style={styles.button}
        secondary={true}
        label="Delete"
        style={styles.button}
        onClick={handleDelete}
      />
    </span>
  );
};

class CommentItem extends Component {
  handleVote = function(option) {
    const _this = this;
    return function() {
      _this.props.handleVoteComment && _this.props.handleVoteComment(_this.props.comment.id, option);
    };
  };

  handleEdit = (commentId) => () => {
    this.props.handleFetchComment(commentId);
    this.props.handleDialog();
  };

  handleDelete = commentId => () => {
    this.props.handleDelete(commentId);
  };

  render() {
    const { comment } = this.props;
    const currentDate = new Date(comment.timestamp);
    return (
      <Card>
        <CardHeader
          title={<h4>{comment.author}</h4>}
          subtitle={
            <SubtitleComponent content={currentDate.toDateString()} />
          }
        />
        <CardText>{comment.body}</CardText>
        <CardActions>
          <VoteButtonGroup
            voteScore={comment.voteScore}
            handleVote={this.handleVote.bind(this)}
          />
          <ButtonGroup
            comment={comment}
            handleDelete={this.handleDelete(comment.id).bind(this)}
            handleEdit={this.handleEdit(comment.id).bind(this)}
          />
        </CardActions>
      </Card>
    );
  }
}

export default CommentItem;
