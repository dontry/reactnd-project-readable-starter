import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


const SortControl = ({ onChange, defaultValue, options }) => {
    const children = options.map((option) => <MenuItem value={option.value} primaryText={option.text} key={option.value}/>)
    return (
        <DropDownMenu onChange={onChange} value={defaultValue}>
            {children}
        </DropDownMenu>
    )
}

export default SortControl; 