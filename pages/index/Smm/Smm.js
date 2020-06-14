import React from 'react';
import cn from 'classnames';
import styles from './Smm.module.scss';

import samolet from './Самолетик.png';

export default () => (
    <div
        className={cn({
            [styles.Smm]: true,
            section: true,
            'page-content': true,
        })}
    >
        <div className={cn({ [styles.left]: true })}>
            <div className={cn({ [styles['text-wrapper']]: true })}>
                <div className={cn({ [styles.title]: true })}>
                    Как продвинуть свой сайт?
                </div>
                <div className={cn({ [styles.desc]: true })}>
                    И другие актуальные вопросы, читайте в нашем блоге...
                </div>
                <div className={cn({ [styles['button-wrapper']]: true })}>
                    <button className="yellow">ЧИТАТЬ</button>
                </div>
            </div>
        </div>
        <div className={cn({ [styles['pic-wrapper']]: true })}>
            <img className={cn({ [styles.pic]: true })} src={samolet} />
        </div>
    </div>
);
