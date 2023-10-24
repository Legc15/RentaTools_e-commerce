
import React from "react";
import PropTypes from "prop-types";
import Button from '@mui/material/Button';

 
const HeaderButton = ( {className, buttonLabel} 
    
) => {
    

    return (
        <Button variant="contained" className={className}>{buttonLabel}</Button>
    );
};



export default HeaderButton;
