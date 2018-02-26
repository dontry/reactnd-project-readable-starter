import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    actionButton: {
        marginLeft: 5,
        marginRight: 5
    }
}

class EditorButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            content: props.content
        }
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false })
    }

    handleSubmit = () => {
        this.setState({open: false})
    }

    handleChangeTitle = (event) => {
        this.setState({
            content: { ...this.state.content, title: event.target.value }
        })
    }

    handleChangeBody = (event) => {
        this.setState({
            content: { ...this.state.content, body: event.target.value }
        })
    }

    render() {
        const { content, open } = this.state;
        const { style } = this.props;
        const actions = [
            <RaisedButton
                label="Submit"
                primary={true}
                onClick={this.handleOpen}
                style={styles.actionButton}
            />,
            <FlatButton
                label="Cancel"
                secondary={true}
                onClick={this.handleSubmit}
                style={styles.actionButton}
            />
        ]
        return (
            <span>
                <RaisedButton style={style} label={this.props.label || "Edit"} primary={true} onClick={this.handleOpen} />
                <Dialog
                    title={content.title.length === 0 ? "Title" : content.title}
                    actions={actions}
                    modal={true}
                    open={open}
                >
                    <TextField
                        style={{fontWeight: "bold"}}
                        floatingLabelText="Title"
                        value={content.title}
                        onChange={this.handleChangeTitle}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Content"
                        multiLine={!!content.title}
                        fullWidth={true}
                        rows={3}
                        value={content.body}
                        onChange={this.handleChangeBody}
                    />
                </Dialog>
            </span>
        )
    }
}

export default EditorButton;