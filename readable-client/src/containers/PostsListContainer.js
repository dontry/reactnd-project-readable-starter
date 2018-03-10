import { connect } from 'react-redux';
import { fetchPosts, fetchPostsByCategory, fetchPostsSuccess, fetchPostsFailure, resetFetchedPosts } from '../actions/posts';
import PostsList from '../components/PostsList';


const mapStateToProps = (state) => {
    return {
        postsList: state.posts.postsList
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        reset: () => {
            dispatch(resetFetchedPosts());
        },
        fetchPosts: () => {
            dispatch(fetchPosts()).then(res => {
                !res.error ? dispatch(fetchPostsSuccess(res.data)) : dispatch(fetchPostsFailure(res.error));
            })
        },
        fetchPostsByCategory: (category) => {
            dispatch(fetchPostsByCategory(category)).then(res => {
                !res.error ? dispatch(fetchPostsSuccess(res.data)) : dispatch(fetchPostsFailure(res.error));
            })
        }
    }
}

export default connect(mapDispatchToProps, mapDispatchToProps)(PostsList);