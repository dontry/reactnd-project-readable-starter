import React, { Component } from "react";
import MenuItem from "material-ui/MenuItem";
import SelectField from "material-ui/SelectField";

const styles = {
  dropdownMenu: {
    width: 200
  }
};

const CategoryDropdownMenu = (props) => {
  const createDropdownMenuItems = (categories = []) => {
    const items = categories.map(category => (
      <MenuItem key={category} value={category} primaryText={category} />
    ));
    return items;
  };
  const { categories, handleChange, selected, style } = props;
  const children = createDropdownMenuItems(categories);
  return (
    <SelectField
      floatingLabelText="Category"
      style={styles.dropdownMenu}
      value={selected}
      onChange={handleChange}
      sytle={style}
    >
      {children}
    </SelectField>
  );
};

export default CategoryDropdownMenu;
