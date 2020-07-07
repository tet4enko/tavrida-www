/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

export default ({ side, onClick }) => (
    <button
        type="button"
        className={cn({
            [styles.toggle]: true,
            [styles[`tg-${side}`]]: true,
        })}
        onClick={onClick}
    />
);
