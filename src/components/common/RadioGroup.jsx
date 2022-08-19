import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import withErrorBoundary from '~/HOC/withErrorBoundary';

const RadioGroup = (props) => {
    const { items, name = 'lt-radio-group-name', onChange, className, value, ...otherProps } = props;

    const handleChange = (e) => {
        onChange(e);
    };

    return (
        <div className={`lt-radio-group ${className}`} {...otherProps}>
            {items.map((item) => {
                return (
                    <label key={item.id}>
                        <input
                            type="radio"
                            checked={value === item.value}
                            disabled={item.disabled}
                            value={item.value}
                            name={name}
                            onChange={handleChange}
                        />
                        <span>{item.label}</span>
                    </label>
                );
            })}
        </div>
    );
};

RadioGroup.propTypes = {};

export default withErrorBoundary(RadioGroup);
