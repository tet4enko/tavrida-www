import React from 'react';
import cn from 'classnames';
import styles from './Zamer.module.scss';

import zamerPic from './Замер.png';

export default (props) => (
    <div className={`${cn({ [styles.Zamer]: true })} section`}>
        <div className={cn({ [styles.top]: true })}>
            <div className={cn({ [styles.left]: true })}>
                <h2 className={cn({ [styles.caption1]: true })}>
                    Нужна наружная реклама?
                </h2>
                <span className={cn({ [styles.caption2]: true })}>
                    <sup>*</sup>
                    Закажи
                    <b>бесплатный</b>
                    {' '}
                    вызов замерщика
                </span>
                <br />
                <button className={cn({ [styles.call]: true })}>
                    ВЫЗВАТЬ БЕСПЛАТНО
                </button>
            </div>
            <img
                src={zamerPic}
                className={cn({ [styles['call-pic']]: true })}
                height="350px"
            />
        </div>
        <span className={cn({ [styles.ogovorka]: true })}>
            <sup>*</sup>
            Бесплатный вызов только по г. Симферополь
        </span>
    </div>
);
