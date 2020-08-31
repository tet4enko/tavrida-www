import React, { useState } from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

import calc from './pics/Калькулятор доработка.png';

const uslugi = [
    [
        {
            href: 'outdoor',
            text: 'Наружная реклама',
            color: 'orange',
        },
        {
            href: 'polygraphy',
            text: 'Полиграфия',
            color: 'blue',
        },
        {
            href: 'suvenirka',
            text: 'Сувенирная продукция',
            color: 'yellow',
        },
        {
            href: 'cleaning',
            text: 'Клининг',
            color: 'orange',
        },
    ],
    [
        {
            href: 'smm',
            text: 'SMM и таргетинг',
            color: 'blue',
        },
        {
            href: 'web',
            text: 'Разработка сайтов',
            color: 'yellow',
        },
        {
            href: 'design',
            text: 'Дизайн',
            color: 'orange',
        },
    ],
];

const component = () => (
    <div className={cn({ [styles.Price]: true })}>
        <img src={calc} className={cn({ [styles.calc]: true })} />
        {uslugi.map((line, i) => (
            <ul className={cn({ [styles.uslugi]: true, [styles[`line${i}`]]: true })}>
                {line.map((a) => (
                    <li className={cn({
                        [styles.usluga]: true,
                        [styles[a.color]]: true,
                        [styles[a.href]]: true,
                    })}
                    >
                        {a.text.toUpperCase()}
                    </li>
                ))}
            </ul>
        ))}
        {[...uslugi[0], ...uslugi[1]].map((usluga) => (
            <div className={cn({ [styles['price-section']]: true })}>
                <h2 className={cn({ [styles.title]: true })}>{usluga.text.toUpperCase()}</h2>
                <table className={cn({ [styles.table]: true })}>
                    <thead>
                        <tr>
                            <th className={cn({ [styles.head]: true })} style={{ width: '30%' }}>ВИД УСЛУГИ</th>
                            <th className={cn({ [styles.head]: true })} style={{ width: '40%' }}>ПОДРОБНЕЕ</th>
                            <th className={cn({ [styles.head]: true })} style={{ width: '30%' }}>СТОИМОСТЬ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={cn({ [styles.row]: true })}>
                            <td className={cn({ [styles.cell]: true })}>Лайтбокс</td>
                            <td className={cn({ [styles.cell]: true })} />
                            <td className={cn({ [styles.cell]: true })} />
                        </tr>
                        <tr className={cn({ [styles.row]: true })}>
                            <td className={cn({ [styles.cell]: true })}>Баннер</td>
                            <td className={cn({ [styles.cell]: true })} />
                            <td className={cn({ [styles.cell]: true })} />
                        </tr>
                        <tr className={cn({ [styles.row]: true })}>
                            <td className={cn({ [styles.cell]: true })}>Пленка</td>
                            <td className={cn({ [styles.cell]: true })} />
                            <td className={cn({ [styles.cell]: true })} />
                        </tr>
                    </tbody>
                </table>
            </div>
        ))}
    </div>
);

export default component;
