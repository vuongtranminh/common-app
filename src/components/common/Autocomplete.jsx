import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useCallbackState, useDebounce } from '~/hooks';

const BEFORE_SEARCH = 0;
const SEARCHING = 1;
const SEARCHED = 2;

const Autocomplete = (props) => {
    const {
        items,
        isLoading = false,
        noDataText = 'Không có data',
        onClearText,
        onChange,
        value,
        itemText,
        onData,
        onClickAutoComplete,
        onSearch,
        placeholder,
        hideClear,
    } = props;

    const [statusSearch, setStatusSeach] = useState(BEFORE_SEARCH);
    const [isVisbile, setVisiblity] = useState(false);
    const [cursor, setCursor] = useState(-1);

    const autocompleteRef = useRef(null);
    const autocompleteResultsRef = useRef(null);
    const didMount = useRef(false);

    // const [inputSearch, setInputSearch] = useState('');
    const [isDone, setIsDone] = useState(false);

    const debouncedValue = useDebounce(value, 2000);

    const handleChange = (e) => {
        const value = e.target.value;
        if (!value.startsWith(' ')) {
            onChange(value);
        }
        // setIsDone(false);

        // search or data change will reset cursor and view
        setCursor(-1);
        scrollIntoView(0);
    };

    // click outside result close
    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (e) => {
        if (autocompleteRef.current && !autocompleteRef.current.contains(e.target)) {
            hideSuggestion();
        }
    };

    const showSuggestion = () => setVisiblity(true);

    const hideSuggestion = () => setVisiblity(false);

    const keyboardNavigation = (e) => {
        // get value by index when keydown
        if (e.key === 'ArrowDown') {
            isVisbile ? setCursor((c) => (c < items.length - 1 ? c + 1 : c)) : showSuggestion();
        }

        if (e.key === 'ArrowUp') {
            setCursor((c) => (c > 0 ? c - 1 : 0));
        }

        if (e.key === 'Escape') {
            hideSuggestion();
        }

        if (e.key === 'Enter' && cursor > 0) {
            handleClickAutoComplete(items[cursor]);
        }
    };

    const scrollIntoView = (position) => {
        autocompleteResultsRef.current.parentNode.scrollTo({
            top: position,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        // set view follow item choose
        if (cursor < 0 || cursor > items.length || !autocompleteResultsRef) {
            return () => {};
        }

        let listItems = Array.from(autocompleteResultsRef.current.children);
        listItems[cursor] && scrollIntoView(listItems[cursor].offsetTop);
    }, [cursor]);

    useEffect(() => {
        // if (isDone) {
        //     return;
        // }
        // Return early, if this is the first render:
        if (!didMount.current) {
            didMount.current = true;
        } else {
            // Paste code to be executed on subsequent renders:
            if (statusSearch !== SEARCHED) {
                if (!debouncedValue.trim()) {
                    // onData([]);
                } else {
                    onSearch();
                }
                setStatusSeach(SEARCHING);
            }
        }

        // setIsDone(false);
    }, [debouncedValue]);

    const handleClickAutoComplete = (value) => {
        if (itemText) {
            onChange(value[itemText]);
        } else {
            onChange(value);
        }
        onClickAutoComplete(value);
        hideSuggestion();
        setStatusSeach(SEARCHED);
        // setIsDone(true);
        // onClickAutoComplete(result);
    };

    const handleClear = () => {
        onChange('');
        onClear ? () => onClear() : null;
    };

    const Results = () => {
        if (statusSearch === BEFORE_SEARCH) {
            return (
                <ul ref={autocompleteResultsRef}>
                    <li className="lt-autocomplete__results--no-data">
                        <p>Tìm kiếm mã CK</p>
                    </li>
                </ul>
            );
        } else {
            if (isLoading) {
                return null;
            } else {
                if (items.length !== 0) {
                    return (
                        <ul ref={autocompleteResultsRef}>
                            {items.map((item, index) => (
                                <li
                                    key={index}
                                    className={`lt-autocomplete__results__item ${cursor === index && 'highlight'}`}
                                    onClick={() => handleClickAutoComplete(item)}
                                >
                                    <span>
                                        <i className="bx bx-search"></i>
                                    </span>
                                    {itemText ? <p>{item[itemText]}</p> : <p>{item}</p>}
                                </li>
                            ))}
                        </ul>
                    );
                } else {
                    return (
                        <ul ref={autocompleteResultsRef}>
                            <li className="lt-autocomplete__results--no-data">
                                <p>{noDataText}</p>
                            </li>
                        </ul>
                    );
                }
            }
        }
    };

    return (
        <div className="lt-autocomplete" ref={autocompleteRef}>
            <div className="lt-autocomplete__wrapper">
                <div className="lt-autocomplete__input">
                    <input
                        autoComplete="off"
                        type="text"
                        placeholder={placeholder}
                        value={value}
                        onChange={handleChange}
                        onKeyDown={keyboardNavigation}
                        onFocus={showSuggestion}
                    />
                    {!hideClear && !!value && !isLoading && (
                        <span className="lt-autocomplete__input__clear" onClick={handleClear}>
                            <i className="bx bx-x"></i>
                        </span>
                    )}
                </div>
                {isLoading && <div className="lt-autocomplete__line-loading"></div>}
            </div>
            <div className={`lt-autocomplete__results ${isVisbile && 'visbile'}`}>
                <Results />
            </div>
        </div>
    );
};

Autocomplete.propTypes = {
    items: PropTypes.array,
    isLoading: PropTypes.bool,
    noDataText: PropTypes.string,
    onClearText: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.any,
    itemText: PropTypes.string,
    itemValue: PropTypes.string,
    returnObject: PropTypes.bool,
    onData: PropTypes.func,
    onClickAutoComplete: PropTypes.func,
    search: PropTypes.func,
};

export default Autocomplete;
