import React, { Component, Fragment } from "react";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";

const styles = {
  button: {
    margin: 5
  }
};

const initialiseProps = props => ({
    style: {...props.style},
    name: props.name || '',
    action: props.action || function(){},
    primary: props.primary || false 
})

const createButton = props => {
  const newProps = initialiseProps(props);
  if (newProps.isRaised) {
    return (
      <RaisedButton
        style={{ ...styles.button, ...newProps.style }}
        label={newProps.name}
        primary={true}
        onClick={newProps.action}
      />
    );
  } else {
    <FlatButton
      style={{ ...styles.button, ...newProps.style }}
      label="Cancel"
      secondary={true}
      onClick={{ ...newProps.style }}
    />;
  }
};

const ActionButtonGroup = ({ primaryButtonProps, secondaryButtonProps }) => {
  const PrimaryButton = createButton(primaryButtonProps);
  const SecondaryButton = createButton(secondaryButtonProps);

  return (
    <Fragment>
      <PrimaryButton />
      <SecondaryButton />>
    </Fragment>
  );
};

export default ActionButtonGroup;
