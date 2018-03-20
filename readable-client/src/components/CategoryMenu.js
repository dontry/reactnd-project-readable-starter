import React, { Component } from "react";
import { Link } from "react-router-dom";
import Chip from "material-ui/Chip";

const styles = {
  chip: {
    margin: 4
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    margin: "10px 20px"
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
    if (categories.error) {
      return <div />;
    } else if (!categories.entity) {
      return <div />;
    }
    const children = this.createChipMenuItems(categories.entity);
    return <div style={styles.wrapper}>{children}</div>;
  }
}

export default CategoryMenu;
