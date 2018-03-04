import React, { Component } from 'react';
import Comment from './Comment';
import List from 'material-ui/List';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import  SortControl  from './SortControl';

const SORT_VOTESCORE = 1;
const SORT_TIMESTAMP = 2;

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

class CommentList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: props.comments.sort(sortVotescore),
            selectedOption: SORT_VOTESCORE
        }
    }


    handleChange = (event, index, value) => {
        const { comments } = this.state;
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
            comments: comments.sort(sortMethod),
            selectedOption: value
        })
    }

    render() {
        const children = this.state.comments.map((comment) => <Comment key={comment.id} comment={comment} />)
        return (
            <div>
                <SortControl onChange={this.handleChange} defaultValue={this.state.selectedOption} options={sortOptions} />
                <List>{children}</List>
            </div>
        )
    }
}

export default CommentList;