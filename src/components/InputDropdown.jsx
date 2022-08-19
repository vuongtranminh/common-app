import React from 'react';
import PropTypes from 'prop-types';

const InputDropdown = (props) => {
    return (
        <div className="input-dropdown">
            <InputPlusMinus />
        </div>
    );
};

export const InputPlusMinus = (props) => {
    return (
        <div className="input-wrapper">
            <span>
                <i className="bx bx-minus"></i>
            </span>
            <input />
            <span>
                <i className="bx bx-plus"></i>
            </span>
        </div>
    );
};

InputDropdown.propTypes = {};

export default InputDropdown;
