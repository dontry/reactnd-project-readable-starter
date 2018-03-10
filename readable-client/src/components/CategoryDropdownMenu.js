import React, { Component } from "react";
import MenuItem from "material-ui/MenuItem";
import DropDownMenu from "material-ui/DropDownMenu/DropDownMenu";

class CategoryDropdownMenu extends Component {
  createDropdownMenuItems = (categories=[]) => {
    return categories.map(category => (
      <MenuItem value={category} primaryText={category} />
    ));
  };
  render() {
    const { categories, handleChange, selected, style } = this.props;
    const children = this.createDropdownMenuItems(categories);
    return (
      <DropDownMenu value={selected} onChange={handleChange} style={style}>
        {children}
      </DropDownMenu>
    );
  }
}

export default CategoryDropdownMenu;