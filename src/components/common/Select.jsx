import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isDeepEqual } from '~/utils';
import { useTranslation } from 'react-i18next';

const Select = (props) => {
    const { t, i18n } = useTranslation();

    const { items, itemText, value, onClickOption, noBorder, label } = props;
    const [isShowOption, setIsShowOption] = useState(false);

    const handleShowOption = () => {
        setIsShowOption(!isShowOption);
    };

    const handleClickOption = (value) => {
        setIsShowOption(false);
        onClickOption(value);
    };

    const isValueChoose = (item) => {
        return isDeepEqual(item, value);
    };

    return (
        <div className="lt-select-box">
            <div
                className={`lt-options-container ${isShowOption && 'active'} ${label && 'lt-options-container--label'}`}
            >
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`lt-option ${isValueChoose(item) && 'active'}`}
                        onClick={() => handleClickOption(item)}
                    >
                        <span className="lt-option__icon">{item.icon && <img src={item.icon} />}</span>
                        <label className="lt-option__title">{itemText ? item[itemText] : item}</label>
                    </div>
                ))}
            </div>

            <div className="lt-selected">
                {label && (
                    <label className="lt-selected__label" onClick={handleShowOption}>
                        {t(label)}
                    </label>
                )}
                <div
                    className={`lt-selected__wrapper ${noBorder && 'lt-selected__wrapper--no-border'}`}
                    onClick={handleShowOption}
                >
                    <span className="lt-selected__value">
                        {value.icon && (
                            <span className="lt-selected__icon">
                                <img src={value.icon} />
                            </span>
                        )}
                        <span className="lt-selected__title">{itemText ? value[itemText] : value}</span>
                    </span>
                    <span className="lt-selected__arraw">
                        <i className={`bx bxs-${isShowOption ? 'up' : 'down'}-arrow`}></i>
                    </span>
                </div>
            </div>
        </div>
    );
};

Select.propTypes = {};

export default Select;
