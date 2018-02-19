import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

const EditButton = () => {
    return (
        <FlatButton primary={true} label="Edit" />
    )
}

const DeleteButton = () => {
    return (
        <FlatButton secondary={true} label="Delete"/>
    )
}

const EditorControl = ({style}) => {
    style={float: "right", ...style}
    return (<span style={style}><EditButton /><DeleteButton /></span>)
}

export default EditorControl;