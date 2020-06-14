import React from 'react';
import cn from 'classnames';
import styles from './CasesGrid.module.scss';

import picTM from './pics/ТМ.png';

export default (props) => (
    <div className={cn({ [styles.CasesGrid]: true })}>
        {props.cases.map((item, i) => (
            <div className={cn({ [styles['case-item']]: true })} key={i}>
                <div className={cn({ [styles.head]: true })}>
                    <span className={cn({ [styles.label]: true })}>
                        {item.label && item.label.toUpperCase()}
                    </span>
                    <img
                        src={picTM}
                        className={cn({ [styles.tm]: true })}
                    />
                </div>
                <button
                    className={cn({
                        yellow: true,
                        [styles.price]: true,
                    })}
                >
                    УЗНАТЬ ЦЕНУ
                </button>
            </div>
        ))}
    </div>
);
