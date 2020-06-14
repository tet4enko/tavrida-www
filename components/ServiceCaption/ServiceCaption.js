import React from 'react';
import cn from 'classnames';
import styles from './ServiceCaption.module.scss';

export default (props) => (
    <div className={cn({ [styles.ServiceCaption]: true })}>
        <h1 className={cn({ [styles.caption]: true })}>
            {props.caption.toUpperCase()}
        </h1>
        <div className={cn({ [styles.description]: true })}>
            {props.description}
        </div>
    </div>
);
