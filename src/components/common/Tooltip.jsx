import React from 'react';
import PropTypes from 'prop-types';

const Tooltip = (props) => {
    const { tooltip, flow, children, className } = props; // flow: left, up, down, right : default: up
    return (
        <span className={`lt-tooltip ${className}`} tooltip={tooltip} flow={flow}>
            {children}
        </span>
    );
};

Tooltip.propTypes = {
    children: PropTypes.any,
    flow: PropTypes.string,
    tooltip: PropTypes.string,
    className: PropTypes.string,
};

export default Tooltip;
