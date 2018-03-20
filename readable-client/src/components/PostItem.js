import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "material-ui/Card";
import { ListItem } from "material-ui/List";
import Chip from "material-ui/Chip";
import SubtitleComponent from "./SubtitleComponent";
import Assignment from "material-ui/svg-icons/action/assignment";
import Comment from "material-ui/svg-icons/communication/comment";

const styles = {
  chip: {
    display: "inline-block",
    marginLeft: 10,
    backgroundColor: "#47d8ea"
  },
  rightIcon: {
    width: 50,
    marginRight: 20
  },
  voteScore: {
    width: 50,
    paddingTop: 5,
    textAlign: "right",
    paddingBottom: 5,
    lineHeight: 1
  },
  commentCount: {
    width: 50,
    paddingTop: 5,
    textAlign: "right",
    paddingBottom: 5,
    lineHeight: 1
  },
  commentIcon: {
    verticalAlign: "middle"
  }
};

const SubTitle = ({ author, timestamp }) => {
  const currentDate = new Date(timestamp);
  return (
    <span>
      <SubtitleComponent content={author} />
      <SubtitleComponent content={currentDate.toDateString()} />
    </span>
  );
};

const PostItem = ({ post }) => (
  <Link to={`/posts/${post.id}`}>
    <Card>
      <ListItem
        primaryText={
          <h4 style={{ marginTop: 0 }}>
            {post.title}
            <Chip style={styles.chip}>{post.category}</Chip>
          </h4>
        }
        secondaryText={
          <SubTitle author={post.author} timestamp={post.timestamp} />
        }
        leftIcon={<Assignment />}
        rightIcon={
          <div style={styles.rightIcon}>
            <div style={styles.voteScore}>▲ {post.voteScore}</div>
            <div style={styles.commentCount}>
              <Comment style={styles.commentIcon} /> {post.commentCount}
            </div>
          </div>
        }
      />
    </Card>
  </Link>
);

PostItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
    author: PropTypes.string,
    timestamp: PropTypes.number,
    commentCount: PropTypes.number
  }).isRequired
};

export default PostItem;
