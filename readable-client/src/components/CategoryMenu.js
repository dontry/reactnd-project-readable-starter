import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Chip from "material-ui/Chip";

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
  openCategory = (history, path) => {
    history.push(`/${path}`);
  };
  createMenu = () => {
    const categories = this.props.categories;
    return categories.map(category => (
      <Chip style={styles.chip} key={category.name}>
        <Link to={`/${category.name}`} style={styles.link}>{category.name}</Link>
      </Chip>
    ));
  };

  render() {
    const children = this.createMenu();
    return <div style={styles.wrapper}>{children}</div>;
  }
}

export default CategoryMenu;
