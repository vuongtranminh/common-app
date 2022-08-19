import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Dialog = (props) => {
    const { open, children, defaultClose = false, backdropClose = false } = props;

    const overlayRef = useRef(null);

    useEffect(() => {
        if (backdropClose) {
            document.addEventListener(
                'click',
                (e) => {
                    if (e.target.matches('.lt-overlay') && !e.target.closest('.lt-dialog')) {
                        onClose();
                    }
                },
                false,
            );
        }
        return () => {
            document.removeEventListener('click', null);
        };
    }, []);

    const handleClose = () => {
        onClose();
    };

    return (
        <div className={`lt-overlay ${open && 'active'}`} ref={overlayRef}>
            <div className="lt-dialog">
                {defaultClose && (
                    <span className="lt-dialog__close" onClick={handleClose}>
                        <i className="bx bx-x"></i>
                    </span>
                )}
                {children}
            </div>
        </div>
    );
};

Dialog.propTypes = {
    open: PropTypes.bool,
    onOpen: PropTypes.func,
    children: PropTypes.any,
    defaultClose: PropTypes.bool,
    backdropClose: PropTypes.bool,
};

export const DialogTitle = (props) => {
    return <div className="lt-dialog__title">{props.children}</div>;
};

DialogTitle.propTypes = {
    children: PropTypes.any,
};

export const DialogContent = (props) => {
    return <div className="lt-dialog__content">{props.children}</div>;
};

DialogContent.propTypes = {
    children: PropTypes.any,
};

export const DialogActions = (props) => {
    return <div className="lt-dialog__actions">{props.children}</div>;
};

DialogActions.propTypes = {
    children: PropTypes.any,
};

export default Dialog;
