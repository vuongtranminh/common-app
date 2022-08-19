import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const SectionContext = createContext();

const Tabs = (props) => {
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (props.active) {
            setActive(props.active);
        }
    }, [props.active]);

    const handleActive = (active) => {
        setActive(active);
    };

    return (
        <div className="lt-tabs">
            <SectionContext.Provider value={{ active: active, onActive: handleActive }}>
                {props.children}
            </SectionContext.Provider>
        </div>
    );
};

Tabs.propTypes = {};

export const TabsNav = (props) => {
    const { active, onActive } = React.useContext(SectionContext);
    const handleClick = (value) => {
        onActive(value);
    };
    return (
        <nav className="lt-tabs__nav">
            {React.Children.map(props.children, (child, index) => {
                if (index == active) {
                    return React.cloneElement(child, {
                        active: true,
                        onClick: () => handleClick(index),
                    });
                } else {
                    return React.cloneElement(child, {
                        onClick: () => handleClick(index),
                    });
                }
            })}
        </nav>
    );
};

export const Tab = (props) => {
    return (
        <div className={`lt-tabs__btn ${props.active && 'active'}`} onClick={props.onClick}>
            {props.children}
        </div>
    );
};

export const TabsContent = (props) => {
    const { active } = React.useContext(SectionContext);
    return (
        <div className="lt-tabs__content">
            {React.Children.map(props.children, (child, index) => {
                if (index == active) {
                    return React.cloneElement(child, {
                        active: true,
                    });
                } else {
                    return React.cloneElement(child, null);
                }
            })}
        </div>
    );
};

export const TabsPane = (props) => {
    return <div className={`lt-tabs__pane ${props.active && 'visible'}`}>{props.children}</div>;
};

export default Tabs;
