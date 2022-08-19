import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    const {
        children,
        startIcon,
        endIcon,
        variant = 'text',
        size = 'full',
        className,
        type = 'button',
        ...otherProps
    } = props;

    return (
        <button
            className={`lt-button lt-button--${variant} lt-button--${size} ${className}`}
            {...otherProps}
            type={type}
        >
            {startIcon && <span className="lt-button__icon lt-button__icon-start">{startIcon}</span>}
            {children}
            {endIcon && <span className="lt-button__icon lt-button__icon-end">{endIcon}</span>}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.any,
    startIcon: PropTypes.string,
    endIcon: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string,
    variant: PropTypes.string,
};

export default Button;
