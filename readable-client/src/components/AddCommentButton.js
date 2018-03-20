import React from "react";
import RaisedButton from "material-ui/RaisedButton";

const styles = {
  button: {
    width: "100%"
  }
};

const AddCommentButton = props => {
  const handleOpen = () => {
    props.openDialog();
    props.reset();
  };
  return (
    <RaisedButton
      style={styles.button}
      label={"Add New Comment"}
      onClick={handleOpen}
    />
  );
};

export default AddCommentButton;
