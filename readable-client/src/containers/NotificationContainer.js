import {connect} from 'react-redux';
import PopupNotification from "../components/PopupNotification";

function mapStateToProps(state) {
    return {
        message: state.notifications.message
    }
}

export default connect(mapStateToProps, null)(PopupNotification);