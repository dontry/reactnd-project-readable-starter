import React, { Component } from "react";
import PropTypes from "prop-types";
import Snackbar from "material-ui/Snackbar";

const AUTO_HIDE_DURATION = 1000;

const styles = {
  notification: {
    backgroundColor: "rgba(0,0,0,0.5)",
    textAlign: "center"
  }
};

class PopupNotification extends Component {
  state = {
    open: false
  };
  componentWillReceiveProps(nextProps) {
    this.setState({ open: nextProps.message.length !== 0 });
  }

  handleActionClick = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    const { message } = this.props;
    return (
      <Snackbar
        open={open}
        bodyStyle={styles.notification}
        message={message}
        autoHideDuration={AUTO_HIDE_DURATION}
        onActionClick={this.handleActionClick}
      />
    );
  }
}

PopupNotification.propTypes = {
  message: PropTypes.string.isRequired
}

export default PopupNotification;
