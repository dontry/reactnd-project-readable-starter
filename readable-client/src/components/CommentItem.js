import React from "react";
import { Card, CardHeader, CardText } from "material-ui/Card";
import SubtitleComponent from "./SutitleComponent";
import CardActions from "material-ui/Card/CardActions";
import VoteButtonGroup from "./VoteButtonGroup";
import FlatButton from "material-ui/FlatButton";

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

const CommentItem = props => {
  const handleVote = option => () => {
    props.handleVoteComment &&
      props.handleVoteComment(props.comment.id, option);
  };

  const handleEdit = commentId => () => {
    props.handleFetchComment(commentId);
    props.handleDialog();
  };

  const handleDelete = commentId => () => {
    props.handleDelete(commentId);
  };

  const { comment } = props;
  const currentDate = new Date(comment.timestamp);
  return (
    <Card>
      <CardHeader
        title={<h4>{comment.author}</h4>}
        subtitle={<SubtitleComponent content={currentDate.toDateString()} />}
      />
      <CardText>{comment.body}</CardText>
      <CardActions>
        <VoteButtonGroup
          voteScore={comment.voteScore}
          handleVote={handleVote}
        />
        <ButtonGroup
          comment={comment}
          handleDelete={handleDelete(comment.id)}
          handleEdit={handleEdit(comment.id)}
        />
      </CardActions>
    </Card>
  );
};

export default CommentItem;
