import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const raisedStyle = { marginRight: 8 };
const flatStyle = { marginRight: 8, paddingLeft: 0, paddingRight: 0 };

const UpvoteButton = ({ isRaised, voteScore, handleClick }) => {

    return isRaised ? (
        <RaisedButton style={raisedStyle} primary={true} label={`▲ ${voteScore}`} onClick={handleClick}/>
    ) : (
            <FlatButton style={flatStyle} label={`▲ ${voteScore}`} onClick={handleClick} />
        )
}

const DownvoteButton = ({ isRaised, handleClick }) => {
    return isRaised ? (
        <RaisedButton style={raisedStyle} primary={true} label="▼" onClick={handleClick}/>
    ) : (
            <FlatButton style={flatStyle} label="▼" onClick={handleClick}/>
        )
}

const VoteButtonGroup = ({isRaised = false, voteScore, handleVote}) => {
    const upVote = handleVote('upVote');
    const downVote = handleVote('downVote');
    const x = () => {
        console.log("click");
    }
    return (
        <span>
            <UpvoteButton isRaised={isRaised} voteScore={voteScore} handleClick={upVote} />
            <DownvoteButton isRaised={isRaised} handleClick={downVote} />
        </span>
    )
}

export default VoteButtonGroup; 