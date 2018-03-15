import React, { Component } from "react";
import { connect } from "react-redux";
import NavHeader from "../components/NavHeader";
import PostDetailContainer from "../containers/PostDetailContainer";
import CommentListContainer from "../containers/CommentListContainer";
import CommentDialogContainer from "../containers/CommentDialogContainer";
import AddCommentButtonContainer from "../containers/AddNewButtonContainer";

class PostShow extends Component {
  state = {
    commentListOpen: true,
    initialLoading: true
  };
  componentWillReceiveProps(nextProps) {
    if (this.state.initialLoading && !nextProps.loading) {
      this.setState({ initialLoading: false });
    }
  }
  toggleCommentList = () => {
    this.setState({ commentListOpen: !this.state.commentListOpen });
  };
  render() {
    const { commentListOpen, initialLoading } = this.state;
    const postId = this.props.match.params.id;

    return (
      <div>
        <NavHeader title="Blog Post" />
        <PostDetailContainer
          postId={postId}
          handleCommentList={this.toggleCommentList.bind(this)}
          commentListOpen={commentListOpen}
        />
        {!initialLoading && (
          <div>
            <AddCommentButtonContainer />
            {commentListOpen && <CommentListContainer postId={postId} />}
          </div>
        )}
        <CommentDialogContainer postId={postId} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.posts.activePost.loading
  };
}

export default connect(mapStateToProps, null)(PostShow);
