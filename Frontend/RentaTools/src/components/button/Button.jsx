
import React from "react";
import PropTypes from "prop-types";

const Button = ({
    children,
    type,
    size,
    text,
    color,
    styles,
    colorIcon,
    colorText,
    handleClick,
    ...props
}) => {
    // Define clases CSS basadas en las props
    const buttonClasses = `bg-${color} text-${colorText} ${styles} p-${size} rounded`;

    return (
        <button className={buttonClasses} onClick={handleClick} type={type} {...props}>
            {text || children}
        </button>
    );
};

Button.propTypes = {
    color: PropTypes.string,
    colorIcon: PropTypes.string,
    colorText: PropTypes.string,
    text: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    handleClick: PropTypes.func,
    styles: PropTypes.string,
};

export default Button;
