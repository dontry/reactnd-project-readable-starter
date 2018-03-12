import React, { Component } from "react";
import MenuItem from "material-ui/MenuItem";
import SelectField from 'material-ui/SelectField';

const styles = {
  dropdownMenu: {
    width: 100
  }
}

class CategoryDropdownMenu extends Component {
  createDropdownMenuItems = (categories=[]) => {
    const items = categories.map(category => (
      <MenuItem key={category} value={category} primaryText={category} />
    ));
    return items;
  };
  render() {
    const { categories, handleChange, selected, style } = this.props;
    const children = this.createDropdownMenuItems(categories);
    return (
      <SelectField floatingLabelText="Category" style={styles.dropdownMenu} value={selected} onChange={handleChange} sytle={style}>
        {children}
      </SelectField>
    );
  }
}

export default CategoryDropdownMenu;