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
    createMenu =  () => {
        const categories = this.props.categories;
        return categories.map(category => <Chip style={styles.chip} key={category.name}>{category.name}</Chip>);
    }

    render() {
        const children = this.createMenu();
        return <div style={styles.wrapper}>{children}</div>
    }
}

export default CategoryMenu;