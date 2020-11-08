/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react';
import cn from 'classnames';
import Link from 'next/link';

import styles from './index.module.scss';

import calc from './pics/Калькулятор доработка.png';

import prices from './prices.json';

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

const getTable = (data) => {
    const getHeaderCell = (cell) => <th colSpan={cell.colspan || '0'} className={cn({ [styles.head]: true })} style={{ width: cell.width || 'unset' }}>{cell.title || cell}</th>;
    return (
        <>
            {data.title && <h3 className={cn({ [styles.tabletitle]: true })}>{data.title}</h3>}
            <table className={cn({ [styles.table]: true })}>
                <thead>
                    {data.header[0] instanceof Array
                        ? data.header.map((headerRow) => (
                            <tr>{headerRow.map(getHeaderCell)}</tr>
                        )) : <tr>{data.header.map(getHeaderCell)}</tr>}
                </thead>
                <tbody>
                    {data.rows.map((row) => (
                        <tr className={cn({ [styles.row]: true })}>
                            {row.map((cell, cellIndex) => (
                                <td className={cn({ [styles.cell]: true })}>{`${cell.title || cell}${cellIndex && data.rubles ? ' р.' : ''}`}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

const component = () => (
    <div className={cn({ [styles.Price]: true })}>
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
        {prices.map(((section) => (
            <div className={cn({ [styles['price-section']]: true })}>
                {section.anchor && (
                    <a name={section.anchor} />
                )}
                <Link href={section.pathname}>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={section.pathname}
                        className={cn({ [styles['title-link']]: true })}
                    >
                        <h2 className={cn({ [styles.title]: true })}>{section.title.toUpperCase()}</h2>
                    </a>
                </Link>
                {section.individual && (
                    <p className={cn({ [styles.individual]: true })}>Требуется индивидуальный просчет.</p>
                )}
                {section.items && section.items.map((item) => (
                    <>
                        {item.anchor && (
                            <a name={item.anchor} />
                        )}
                        <h3 className={cn({ [styles.subtitle]: true })}>{item.title && item.title.toUpperCase()}</h3>
                        {item.individual && (
                            <p className={cn({ [styles.subindividual]: true })}>Требуется индивидуальный просчет.</p>
                        )}
                        {item.tables && item.tables.map(getTable)}
                    </>
                ))}
                {section.tables && section.tables.map(getTable)}
            </div>
        )))}
        <img src={calc} className={cn({ [styles.calc]: true })} />
    </div>
);

export default component;
