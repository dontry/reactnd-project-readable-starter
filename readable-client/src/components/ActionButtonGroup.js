import React from "react";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";

const styles = {
  button: {
    marginLeft: 5,
    marginRight: 5
  }
};

const initialiseProps = props => ({
  style: { ...styles.button, ...props.style },
  name: props.name,
  className: props.className || "",
  isRaised: !!props.isRaised,
  action: props.action || function() {},
  primary: !!props.primary
});

const createButton = props => {
  const newProps = initialiseProps(props);
  if (newProps.isRaised) {
    return (
      <RaisedButton
        className={newProps.className}
        style={newProps.style}
        label={newProps.name}
        primary={newProps.primary}
        secondary={!newProps.primary}
        onClick={newProps.action}
      />
    );
  } else {
    return (
      <FlatButton
        className={newProps.className}
        style={newProps.style}
        label={newProps.name}
        primary={newProps.primary}
        secondary={!newProps.primary}
        onClick={newProps.action}
      />
    );
  }
};

const ActionButtonGroup = ({ style, primaryProps, secondaryProps }) => {
  const PrimaryButton = createButton(primaryProps);
  const SecondaryButton = createButton(secondaryProps);

  return (
    <div style={style}>
      {PrimaryButton}
      {SecondaryButton}
    </div>
  );
};

ActionButtonGroup.propTypes = {
  style: PropTypes.object,
  primaryProps: PropTypes.shape({
    className: PropTypes.string,
    style: PropTypes.object,
    label: PropTypes.oneOf([PropTypes.string, PropTypes.element]),
    primary: PropTypes.bool,
    onClick: PropTypes.func
  }),
  secondaryProps: PropTypes.shape({
    className: PropTypes.string,
    style: PropTypes.object,
    label: PropTypes.oneOf([PropTypes.string, PropTypes.element]),
    primary: PropTypes.bool,
    onClick: PropTypes.func
  })
};

export default ActionButtonGroup;
