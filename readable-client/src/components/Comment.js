import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import SubtitleComponent from './SutitleComponent';
import CardActions from 'material-ui/Card/CardActions';
import VoteControl from './VoteControl';
import EditorControl from './EditorControl';

const Comment = ({ comment }) => {
    const currentDate = new Date(comment.timestamp);
    return (
        <Card>
            <CardHeader
                title = {<h4>{comment.author}</h4>}
                subtitle = {<SubtitleComponent content={currentDate.toDateString()}></SubtitleComponent>}
            />
            <CardText>
                {comment.body}
            </CardText>
            <CardActions>
                <VoteControl voteScore = {comment.voteScore} />
                <EditorControl />
            </CardActions>
        </Card>
    )
}

export default Comment;