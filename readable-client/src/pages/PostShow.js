import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavHeader from '../components/NavHeader';
import PostDetail from '../components/PostDetail';

class PostShow extends Component {
    render() {
        const { post } = this.props;
        return (
            <div>
                <NavHeader name={post.title}>
                   <PostDetail id={this.props.match.params.id} />
                </NavHeader>
            </div>
        )
    }
}