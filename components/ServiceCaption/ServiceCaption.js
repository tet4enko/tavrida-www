import React from 'react';
import cn from 'classnames';
import styles from './ServiceCaption.module.scss';

export default ({ caption, description }) => (
    <div className={cn({ [styles.ServiceCaption]: true })}>
        <h1 className={cn({ [styles.caption]: true })}>
            {caption.toUpperCase()}
        </h1>
        <div className={cn({ [styles.description]: true })}>
            {description}
        </div>
    </div>
);
