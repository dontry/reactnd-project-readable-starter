import React from "react";
import PropTypes from "prop-types";
import MenuItem from "material-ui/MenuItem";
import SelectField from "material-ui/SelectField";

const styles = {
  dropdownMenu: {
    width: 200
  }
};

const createDropdownMenuItems = (categories = []) => {
  const items = categories.map(category => (
    <MenuItem key={category} value={category} primaryText={category} />
  ));
  return items;
};

const CategoryDropdownMenu = props => {
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

CategoryDropdownMenu.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  handleChange: PropTypes.func.isRequired,
  selected: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  style: PropTypes.object
};

export default CategoryDropdownMenu;
