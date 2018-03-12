import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";

const styles = {
  button: {
    width: "100%"
  }
};

class AddCommentButton extends Component {
  render() {
    const { openDialog } = this.props;
    return (
      <RaisedButton
        style={styles.button}
        label={"Add New Comment"}
        onClick={openDialog}
      />
    );
  }
}

export default AddCommentButton;
