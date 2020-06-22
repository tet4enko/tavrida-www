import React, { useState } from 'react';
import cn from 'classnames';
import Dialog from '@material-ui/core/Dialog';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import styles from './ProjectDialog.module.scss';

export default (props) => {
    const [isImageLoading, setIsImageLoading] = useState(true);

    return (
        <Dialog
            aria-labelledby="simple-dialog-title"
            open={props.isOpened}
            onEscapeKeyDown={props.onClose}
            onBackdropClick={props.onClose}
            maxWidth={false}
            className={cn({
                [styles['projects-opened-item-dialog']]: true,
            })}
            classes={{
                paper: cn({
                    [styles['projects-opened-item-dialog-paper']]: true,
                    [styles.visible]: !isImageLoading,
                }),
            }}
        >
            <div
                className={cn({
                    [styles['projects-opened-item-pic-wrapper']]: true,
                })}
            >
                <img
                    onLoad={() => { setIsImageLoading(false); }}
                    src={props.data.full}
                    className={cn({
                        [styles['projects-opened-item-pic']]: true,
                    })}
                />
            </div>
            <CloseRoundedIcon
                onClick={props.onClose}
                className={cn({
                    [styles['projects-opened-item-close']]: true,
                    [styles[props.data.closeColor]]: true,
                })}
                fontSize="large"
            />
        </Dialog>
    );
};
