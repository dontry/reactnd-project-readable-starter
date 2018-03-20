import {combineReducers} from 'redux';
import categories from './categories';
import posts from './posts';
import comments from "./comments";
import notifications from './notifications';

export default combineReducers({
    categories,
    posts,
    comments,
    notifications
})
