import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const raisedStyle = { marginRight: 8 };
const flatStyle = { marginRight: 8, paddingLeft: 0, paddingRight: 0 };

const UpvoteButton = ({ isRaised, voteScore }) => {

    return isRaised ? (
        <RaisedButton style={raisedStyle} primary={true} label={`▲ ${voteScore}`} />
    ) : (
            <FlatButton style={flatStyle} label={`▲ ${voteScore}`} />
        )
}

const DownvoteButton = ({ isRaised }) => {
    return isRaised ? (
        <RaisedButton style={raisedStyle} primary={true} label="▼" />
    ) : (
            <FlatButton style={flatStyle} label="▼" />
        )
}

const VoteControl = ({isRaised = false, voteScore}) => {
    return (
        <span>
            <UpvoteButton isRaised={isRaised} voteScore={voteScore} />
            <DownvoteButton isRaised={isRaised} />
        </span>
    )
}

export default VoteControl; 