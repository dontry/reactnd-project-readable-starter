import React, { Component } from 'react';
import Post from './Post';
import Card from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import SortControl from './SortControl';
import Assignment from 'material-ui/svg-icons/action/assignment';
import SubtitleComponent from './SutitleComponent';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';

const SORT_VOTESCORE = 1;
const SORT_TIMESTAMP = 2;

const SubTitle = ({author, timestamp}) => {
    const currentDate = new Date(timestamp);
    return <span><SubtitleComponent content={author} /><SubtitleComponent content={currentDate.toDateString()} /></span>
} 

const sortOptions = [
    {
        value: SORT_VOTESCORE,
        text: 'Sort by vote'
    },
    {
        value: SORT_TIMESTAMP,
        text: 'Sort by time'
    }
]

const sortVotescore = (a, b) => (a.voteScore < b.voteScore);
const sortTimestamp = (a, b) => (a.timestamp < b.timestamp);

class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: props.posts.sort(sortVotescore),
            selectedOption: SORT_VOTESCORE
        }
    }


    handleChange = (event, index, value) => {
        const { posts } = this.state;
        let sortMethod = null;
        switch (value) {
            case SORT_VOTESCORE:
                sortMethod = sortVotescore;
                break;
            case SORT_TIMESTAMP:
                sortMethod = sortTimestamp;
                break;
            default:
                break;
        }
        this.setState({
            posts: posts.sort(sortMethod),
            selectedOption: value
        })
    }

    render() {
        // const children = this.state.posts.map((post) => <Post key={post.id} post={post} />)
        const children = this.state.posts.map((post) => (
            <Card key={post.id}>
                <ListItem 
                primaryText={<h4 style={{marginTop: 0}}>{post.title} <Chip style={{display: "inline"}}>{post.category}</Chip></h4>} 
                secondaryText={<SubTitle author={post.author} timestamp={post.timestamp}/>} 
                leftIcon={<Assignment />}
                rightIcon={<FlatButton>▲{post.voteScore}</FlatButton>}
                 />
            </Card>
        ))
        return (
            <div>
                <SortControl onChange={this.handleChange} defaultValue={this.state.selectedOption} options={sortOptions} />
                <List>{children}</List>
            </div>
        )
    }
}

export default PostList;