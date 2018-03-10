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
      <Link to={`/${category}`} style={styles.link}>
        <Chip style={styles.chip} key={category.name} label={category.name} />
      </Link>
    ));
  };

  render() {
    const { categories } = this.props;
    const children = this.createChipMenuItems(categories);
    return <div style={styles.wrapper}>{children}</div>;
  }
}

export default CategoryMenu;
