import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames';
import Tooltip from '~/components/common/Tooltip';

const StyleButton = ({ label, active, onToggle, style, icon, description }) => {

    const handleToggle = e => {
        e.preventDefault();
        onToggle(style);
    };

    const className = cx('md-style-button', {
        'md-style-button--active': active,
        [`md-style-button${style.toLowerCase()}`]: style,
    })

    return (
        <Tooltip tooltip={description}>
            <span className={className} onMouseDown={handleToggle}>
                {icon ? <i className={`bx bx-${icon}`} /> : label}
            </span>
        </Tooltip>
    )
}

StyleButton.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.object,
    ]),
    active: PropTypes.bool,
    onToggle: PropTypes.func,
    style: PropTypes.string,
    icon: PropTypes.string,
    description: PropTypes.string,
}

export default StyleButton