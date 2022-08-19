import React, { forwardRef, useImperativeHandle, useState } from 'react';
import PropTypes from 'prop-types';
import { isString } from '~/utils';

const TextField = forwardRef((props, ref) => {
    const { label, rules, onChange, value, ...otherProps } = props;

    const [state, setState] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setState(e.target.value);
        setError('');
        onChange(e);
    };

    const validate = () => {
        if (rules) {
            let error = '';
            for (const rule of rules) {
                error = rule(state);
                if (isString(error)) {
                    setError(error);
                    return false;
                }
            }
        }

        return true;
    };

    useImperativeHandle(ref, () => {
        return {
            validate: () => validate(),
        };
    });

    const handleBlur = () => {
        validate();
    };

    return (
        <div className="lt-text-field">
            <div className="lt-text-field__input">
                <input
                    placeholder=" "
                    {...otherProps}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={value ? value : state}
                />
                <label>{label}</label>
            </div>
            {error && <p>{error}</p>}
        </div>
    );
});

TextField.propTypes = {
    label: PropTypes.string,
    rules: PropTypes.any,
    onChange: PropTypes.func,
    value: PropTypes.string,
};

TextField.displayName = 'TextField';

export default TextField;
