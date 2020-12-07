import React from 'react';
import useIsInViewport from 'use-is-in-viewport';
import cn from 'classnames';
import styles from './index.module.scss';

const component = ({
    title, pic, text, className, direction,
}) => {
    const isTop = Boolean(title);

    const isTouch = (() => {
        return 'ontouchstart' in window;
    });

    const [isInViewport, targetRef] = useIsInViewport({ threshold: 50 });

    return (
        <div
            className={cn({
                [styles.Section]: true,
                [styles.isTop]: isTop,
                [className]: true,
                [styles.right]: direction === 'right',
                [styles.isNotInViewport]: false,
            })}
            ref={targetRef}
        >
            <h1 className={cn({ [styles.title]: true })}>{title}</h1>
            <div className={cn({ [styles.content]: true })}>
                <div className={cn({ [styles.left]: true })}>
                    <div className={cn({ [styles.textWrapper]: true })}>{text}</div>
                </div>
                <div className={cn({ [styles.right]: true })}>
                    <img className={cn({ [styles.img]: true })} src={pic} />
                </div>
            </div>
        </div>
    );
};

export default component;
