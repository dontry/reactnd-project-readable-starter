import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import EditorButton from './EditorButton';

const styles = {
    wrapper: {
        float: "right"
    },
    button: {
        marginLeft: 5,
        marginRight: 5
    }
}

const DeleteButton = ({style}) => {
    return (
        <FlatButton style={style} secondary={true} label="Delete" />
    )
}

const ActionControl = ({ content, style }) => {
    return (
        <span style={{...styles.wrapper, ...style }}>
            <EditorButton style={styles.button} content={content} />
            <DeleteButton style={styles.button} />
        </span>
    )
}

export default ActionControl;