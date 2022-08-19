import React, { forwardRef, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const OTPInput = forwardRef((props, ref) => {
    const { autoSubmit, onSubmit, autoFocus } = props;
    const otpRef = useRef(null);
    const oneRef = useRef(null);
    const twoRef = useRef(null);
    const threeRef = useRef(null);
    const fourRef = useRef(null);

    const handleAutoFocus = () => {
        oneRef.current.focus();
    };

    useEffect(() => {
        if (autoFocus) {
            handleAutoFocus();
        }
    });

    useEffect(() => {
        const listInputs = otpRef.current.querySelectorAll('input');
        Array.prototype.forEach.call(listInputs, (input) => {
            input.addEventListener('keyup', (e) => {
                if (e.keyCode === 8 || e.keyCode === 37) {
                    // backspace or left arrow
                    const prev = input.dataset.previous;
                    if (prev) {
                        otpRef.current.querySelector(`#${prev}`).select();
                    }
                } else if (
                    (e.keyCode >= 48 && e.keyCode <= 57) ||
                    (e.keyCode >= 65 && e.keyCode <= 90) ||
                    (e.keyCode >= 96 && e.keyCode <= 105) ||
                    e.keyCode === 39
                ) {
                    const next = input.dataset.next;
                    if (next) {
                        otpRef.current.querySelector(`#${next}`).select();
                    } else {
                        if (otpRef.current.dataset.autosubmit === 'true') {
                            handleSubmit();
                        }
                    }
                } else if (e.keyCode === 13) {
                    if (
                        oneRef.current.value &&
                        twoRef.current.value &&
                        threeRef.current.value &&
                        fourRef.current.value
                    ) {
                        handleSubmit();
                    }
                }
            });
        });
    }, []);

    const handleSubmit = () => {
        const result = `${oneRef.current.value}${twoRef.current.value}${threeRef.current.value}${fourRef.current.value}`;
        onSubmit(result);
    };

    return (
        <div className="lt-otp" data-autosubmit={autoSubmit} autoComplete="off" ref={otpRef}>
            <input
                type="text"
                ref={oneRef}
                id="lt-otp-input-1"
                name="lt-otp-input-1"
                maxLength="1"
                data-next="lt-otp-input-2"
            />
            <input
                type="text"
                ref={twoRef}
                id="lt-otp-input-2"
                name="lt-otp-input-2"
                maxLength="1"
                data-next="lt-otp-input-3"
                data-previous="lt-otp-input-1"
            />
            <input
                type="text"
                ref={threeRef}
                id="lt-otp-input-3"
                name="lt-otp-input-3"
                maxLength="1"
                data-next="lt-otp-input-4"
                data-previous="lt-otp-input-2"
            />
            <input
                type="text"
                ref={fourRef}
                id="lt-otp-input-4"
                name="lt-otp-input-4"
                maxLength="1"
                data-previous="lt-otp-input-3"
            />
        </div>
    );
});

OTPInput.propTypes = {
    autoSubmit: PropTypes.bool,
    onSubmit: PropTypes.func,
};

export default OTPInput;
