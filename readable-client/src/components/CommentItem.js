import React from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, CardText } from "material-ui/Card";
import SubtitleComponent from "./SubtitleComponent";
import CardActions from "material-ui/Card/CardActions";
import VoteButtonGroup from "./VoteButtonGroup";
import ActionButtonGroup from "./ActionButtonGroup";

const styles = {
  buttonWrapper: {
    float: "right"
  }
};

const CommentItem = props => {
  const handleVote = option => () => {
    props.handleCommentVote(props.comment.id, option);
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
  const primaryButtonProps = {
    name: "Edit",
    action: handleEdit(comment.id),
    primary: true
  };
  const secondaryButtonProps = {
    name: "Delete",
    action: handleDelete(comment.id)
  };
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
        <ActionButtonGroup
          style={styles.buttonWrapper}
          primaryProps={primaryButtonProps}
          secondaryProps={secondaryButtonProps}
        />
      </CardActions>
    </Card>
  );
};

CommentItem.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.string,
    author: PropTypes.string,
    body: PropTypes.string,
    voteScore: PropTypes.number
  }).isRequired,
  handleCommentVote: PropTypes.func.isRequired,
  handleDialog: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default CommentItem;
