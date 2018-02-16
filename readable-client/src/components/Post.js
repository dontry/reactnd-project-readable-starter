import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Subtitle = ({ author, timestamp }) => {
    const currentDate = new Date(timestamp);
    return (
        <div>
            <span className="author">{author}</span> <span className="timestamp">{currentDate.toDateString()}</span>
        </div>
    );
}

const Post = ({post}) => (
    <Card>
        <CardHeader
            title={<h2>{post.title}</h2>}
            subtitle={<Subtitle author={post.author} timestamp={post.timestamp} />}
            actAsExpander={true}
            showExpandableButton={true}
        />
        <CardText expandable={true}>
            {post.body}
        </CardText>
        <CardActions>
                <FlatButton label="▲" />
                <FlatButton label="▼" />
                <FlatButton label={<b>Comment</b>}/>
        </CardActions>
    </Card>
);

export default Post;