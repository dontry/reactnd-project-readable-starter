import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Chip from "material-ui/Chip";
import DropdownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";

const styles = {
  chip: {
    margin: 4
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap"
  },
  link: {
    textDecoration: "none",
    color: "#000"
  }
};
class CategoryMenu extends Component {
  componentDidMount() {
    this.props.fetchCategories && this.props.fetchCategories();
  }
  createChipMenuItems = categories => {
    return categories.map(category => (
      <Chip key={category.name} style={styles.chip} label={category.name}>
        <Link to={`/categories/${category.path}`} style={styles.link}>
          {category.name}
        </Link>
      </Chip>
    ));
  };

  render() {
    const { categories } = this.props;
    if (!categories) return <div />;
    const children = this.createChipMenuItems(categories);
    return (
      <div style={styles.wrapper}>
        {children}
      </div>
    );
  }
}

export default CategoryMenu;
