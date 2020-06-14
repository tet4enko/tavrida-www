import React from 'react';
import cn from 'classnames';
import styles from './Order.module.scss';

function Order() {
    return (
        <div className={cn({ [styles.Order]: true, section: true })}>
            <div className={cn({ 'general-header': true })}>
                БЫСТРЫЙ СТАРТ С ТАВРИДА МЕДИА
            </div>
            <div className={cn({ [styles.content]: true })}>
                <button className={cn({ gradient: true })}>
                    ОФОРМИТЬ ЗАЯВКУ
                </button>
            </div>
        </div>
    );
}

export default Order;
