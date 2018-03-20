import React  from "react";
import PropTypes from "prop-types";
import Dialog from "material-ui/Dialog";
import ActionButtonGroup from "./ActionButtonGroup";

const Content = ({ content }) => <h3>{content}</h3>;

const ConfirmationDialog = props => {
  const {
    title,
    content,
    primaryLabel,
    secondaryLabel,
    open,
    handleSubmit,
    handleCancel,
  } = props;

  const primaryButtonProps = {
    name: primaryLabel || "Yes",
    action: handleSubmit,
    primary: true,
    isRaised: true
  };

  const secondaryButtonProps = {
    name: secondaryLabel || "Cancel",
    action: handleCancel,
    primary: false
  };

  return (
    <Dialog
      title={title || ""}
      actions={
        <ActionButtonGroup
          primaryProps={primaryButtonProps}
          secondaryProps={secondaryButtonProps}
        />
      }
      modal={true}
      open={!!open}
    >
      <Content content={content} />
    </Dialog>
  );
};


ConfirmationDialog.propTypes ={
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  primaryLabel: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired
}

export default ConfirmationDialog;
