import React, { Component } from 'react';
import Chip from 'material-ui/Chip';

const styles = {
    chip: {
        margin: 4
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap'
    }
}

class CategoryMenu extends Component {
    constructor(props) {
        super(props);
    }

    createMenu = function () {
        const categories = this.props.categories;
        return categories.map(category => <Chip style={styles.chip}>{category}</Chip>);
    }

    render() {
        const children = this.createMenu();
        return <div style={styles.wrapper}>{children}</div>
    }
}

export default CategoryMenu;