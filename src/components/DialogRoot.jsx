import React from 'react';
import PropTypes from 'prop-types';
import Dialog, { DialogActions, DialogContent, DialogTitle } from './common/Dialog';
import Button from './common/Button';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import { closeDialog } from '~/redux/features/dialogRootSlice';

const DialogRoot = () => {
    const { t, i18n } = useTranslation();
    const { dialog } = useSelector((state) => state.dialogRoot);
    const { title, content, actions, defaultClose, backdropClose } = dialog;
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(closeDialog());
    };

    return (
        <div className="dialog-root">
            <Dialog open={dialog} defaultClose={defaultClose} backdropClose={backdropClose} onClose={handleClose}>
                {title && <DialogTitle>{title}</DialogTitle>}
                {content && <DialogContent>{content}</DialogContent>}
                {actions && (
                    <DialogActions>
                        {actions.confirm && (
                            <Button onClick={actions.confirm.onConfirm}>
                                {actions.confirm.title ? actions.confirm.title : t('confirm')}
                            </Button>
                        )}
                        {actions.cancel && (
                            <Button onClick={actions.cancel.onCancel}>
                                {actions.cancel.title ? actions.cancel.title : t('cancel')}
                            </Button>
                        )}
                    </DialogActions>
                )}
            </Dialog>
        </div>
    );
};

DialogRoot.propTypes = {};

export default DialogRoot;
