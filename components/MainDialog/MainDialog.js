import React from 'react';
import cn from 'classnames';
import Dialog from '@material-ui/core/Dialog';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import styles from './MainDialog.module.scss';

export default ({
    isOpened, onClose, children, title, className,
}) => (
    <Dialog
        aria-labelledby="main-dialog-title"
        open={isOpened}
        onEscapeKeyDown={onClose}
        onBackdropClick={onClose}
        maxWidth={false}
        className={cn({
            [className]: true,
            [styles['main-dialog']]: true,
        })}
        classes={{
            paper: cn({
                [styles['main-dialog-paper']]: true,
            }),
        }}
    >
        <div className={cn({ [styles.title]: true })}>{title}</div>
        <CloseRoundedIcon
            onClick={onClose}
            className={cn({
                [styles.close]: true,
            })}
            fontSize="large"
        />
        {children}
    </Dialog>
);
