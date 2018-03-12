import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "material-ui/Card";
import { ListItem } from "material-ui/List";
import Chip from "material-ui/Chip";
import SubtitleComponent from "./SutitleComponent";
import Assignment from "material-ui/svg-icons/action/assignment";
import FlatButton from "material-ui/FlatButton";

const styles = {
  chip: {
    display: "inline-block",
    marginLeft: 10,
    backgroundColor: "#47d8ea"
  },
  voteScore: {
    paddingTop: 5,
    paddingBottom: 5,
    lineHeight: 1
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
          <FlatButton style={styles.voteScore}>▲ {post.voteScore}</FlatButton>
        }
      />
    </Card>
  </Link>
);

export default PostItem;
