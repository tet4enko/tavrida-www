import React from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

export default (props) => (
    <button
        className={cn({
            [styles.toggle]: true,
            [styles[`tg-${props.side}`]]: true,
        })}
        onClick={props.onClick}
    />
);
