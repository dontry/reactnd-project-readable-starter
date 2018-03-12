import React, { Component } from "react";
import { connect } from "react-redux";
import NavHeader from "../components/NavHeader";
import PostDetailContainer from "../containers/PostDetailContainer";
import CommentListContainer from "../containers/CommentListContainer";
import CommentDialogContainer from "../containers/CommentDialogContainer";
import AddCommentButtonContainer from "../containers/AddNewButtonContainer";

class PostShow extends Component {
  state = {
    commentListOpen: false
  }
  toggleCommentList = () => {
    this.setState({ commentListOpen: !this.state.commentListOpen });
  };
  render() {
    const { commentListOpen } = this.state
    const postId = this.props.match.params.id;
    return (
      <div>
        <NavHeader title="Blog Post" />
        <PostDetailContainer postId={postId} handleCommentList={this.toggleCommentList.bind(this)} commentListOpen={commentListOpen}/>
        {commentListOpen && <CommentListContainer postId={postId} />}
        <AddCommentButtonContainer />
        <CommentDialogContainer postId={postId} />
      </div>
    );
  }
}

export default PostShow;
