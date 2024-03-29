import React from 'react';
import cn from 'classnames';
import styles from './GetSite.module.scss';

import comp2 from './pics/Комп2.png';

export default ({ className }) => {
    const classes = { [styles.GetSite]: true };
    if (className) {
        classes[className] = true;
    }
    return (
        <div className={cn(classes)}>
            <div className={cn({ [styles.left]: true })}>
                <div className={cn({ [styles.text]: true })}>
                    <span className={cn({ [styles.top]: true })}>
                        ЗАКАЖИ САЙТ И ПОЛУЧИ
                    </span>
                    <p className={cn({ [styles.bottom]: true })}>
                        БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ ПО ЕГО ПРОДВИЖЕНИЮ ЧЕРЕЗ SMM И
                        МАРКЕТИНГ
                    </p>
                </div>
                <a href="/uslugi/web#cases" target="_blank">
                    <button
                        type="button"
                        className={cn({
                            blue: true,
                            [styles['get-site']]: true,
                        })}
                    >
                        ЗАКАЗАТЬ
                    </button>
                </a>
            </div>
            <img className={cn({ [styles.right]: true })} src={comp2} />
        </div>
    );
};
