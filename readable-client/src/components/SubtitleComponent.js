import React  from 'react';


const SubtitleComponent = ({style={}, content}) => {
    style = {marginRight: '2em', ...style};
    return ( 
        <span style={style}>{content}</span>
    ) 
}

export default SubtitleComponent;