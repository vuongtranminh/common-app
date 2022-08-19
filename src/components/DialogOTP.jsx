import React from 'react';
import PropTypes from 'prop-types';
import Dialog, { DialogActions, DialogContent, DialogTitle } from './common/Dialog';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import OTPInput from './common/OTPInput';
import Button from './common/Button';

const DialogOTP = (props) => {
    const { open, onClose, secucardKey, onConfirm } = props;
    const { t, i18n } = useTranslation();

    const handleClose = () => {
        onClose();
    };

    const handleConfirm = () => {
        onConfirm();
    };

    return (
        <Dialog open={open}>
            <div className="dialog-otp">
                <DialogTitle>
                    <div className="dialog-otp__title">{t('otpValidate')}</div>
                </DialogTitle>
                <DialogContent>
                    <div className="dialog-otp__content">
                        <div className="dialog-otp__content__text">
                            {t('otpMessage')} <span>{secucardKey}</span>
                        </div>
                        <div className="dialog-otp__content__input">
                            <OTPInput autoFocus autoSubmit onSubmit={handleConfirm} />
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <div className="dialog-otp__actions">
                        <div className="dialog-otp__actions__button">
                            <Button variant="contained" size="full" onClick={handleClose}>
                                {t('cancel')}
                            </Button>
                        </div>
                        <div className="dialog-otp__actions__button">
                            <Button variant="contained" size="full" onClick={handleConfirm}>
                                {t('confirm')}
                            </Button>
                        </div>
                    </div>
                </DialogActions>
            </div>
        </Dialog>
    );
};

DialogOTP.propTypes = {};

export default DialogOTP;
