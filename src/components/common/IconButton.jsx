import React from 'react';
import PropTypes from 'prop-types';

const IconButton = (props) => {
    const { full, badge, children, className, ...otherProps } = props;
    return (
        <button className={`lt-icon-button ${full && 'lt-icon-button--full'} ${className}`} {...otherProps}>
            <span className="lt-icon-button__wrapper">
                <span className="lt-icon-button__icon">{children}</span>
                {props.badge && <span className="lt-icon-button__badge">{badge}</span>}
            </span>
        </button>
    );
};

IconButton.propTypes = {
    children: PropTypes.any,
    badge: PropTypes.string,
};

export default IconButton;
