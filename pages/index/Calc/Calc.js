import React from 'react';
import cn from 'classnames';
import styles from './Calc.module.scss';

import calc from './Калькулятор.png';

export default () => (
    <div
        className={cn({
            [styles.Calc]: true,
            section: true,
            'page-content': true,
        })}
    >
        <div className={cn({ [styles['pic-wrapper']]: true })}>
            <img className={cn({ [styles.pic]: true })} src={calc} />
        </div>
        <div className={cn({ [styles.right]: true })}>
            <div className={cn({ [styles['text-wrapper']]: true })}>
                <div className={cn({ [styles.title]: true })}>
                    Любите держать все под контролем?
                </div>
                <div className={cn({ [styles.desc]: true })}>
                    Воспользуйтесь нашим калькулятором расчета стоимости для
                    лучшей агрегации своих возможностей
                </div>
                <div className={cn({ [styles['button-wrapper']]: true })}>
                    <button className="yellow">ОТКРЫТЬ</button>
                </div>
            </div>
        </div>
    </div>
);
