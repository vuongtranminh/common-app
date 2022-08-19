import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const CheckBox = (props) => {
    const { t, i18n } = useTranslation();

    const inputRef = useRef(null);

    const onChange = () => {
        if (props.onChange) {
            props.onChange(inputRef.current);
        }
    };

    return (
        <label className="lt-checkbox">
            <input type="checkbox" ref={inputRef} onChange={onChange} checked={props.checked} />
            <span className="lt-checkbox__checkmark">
                <i className="bx bx-check"></i>
            </span>
            {t(props.label)}
        </label>
    );
};

CheckBox.propTypes = {
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool,
};

export default CheckBox;
