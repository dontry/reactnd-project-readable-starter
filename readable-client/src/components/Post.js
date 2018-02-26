import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import Chip from 'material-ui/Chip';
import Comment from 'material-ui/svg-icons/communication/comment';
import SubtitleComponent from './SutitleComponent';
import VoteControl from './VoteControl';
import ActionControl from './ActionControl';


const style = {
    marginBottom: 10
}
const Title = ({title}) => {
    return <h2>{title}</h2>
}

const chipStyle = {
    display: 'inline-block'
};

const Subtitle = ({ author, timestamp, category}) => {
    const currentDate = new Date(timestamp);
    return (
        <div>
            <SubtitleComponent style={{fontWeight: "bolder"}} content={author}></SubtitleComponent>
            <SubtitleComponent content={currentDate.toDateString()}></SubtitleComponent>
            <SubtitleComponent content={<Chip style={chipStyle}>{category}</Chip>}></SubtitleComponent>
        </div>
    );
}

class Post extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { post } = this.props;
        return (
            <Card style={style}>
                <CardHeader
                    title={<Title title={post.title}/>}
                    subtitle={<Subtitle author={post.author} timestamp={post.timestamp}  category={post.category}/>}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText expandable={true}>
                    {post.body}
                </CardText>
                <CardActions>
                    <VoteControl isRaised voteScore = {post.voteScore} />
                    <FlatButton icon={<Comment></Comment>} label={post.commentCount} />
                    <ActionControl  content={post}/>
                </CardActions>
            </Card>
        );
    }
}

export default Post;