import React from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

import back from './pics/Фон.png';
import galactic from './pics/Кольца.png';

import sun from './pics/Логотип.png';
import copyright from './pics/Копирайтинг.png';
import upakovka from './pics/Упаковка.png';
import slogans from './pics/Слоганы.png';
import style from './pics/Фирменный стиль.png';
import branding from './pics/Брендинг.png';
import naming from './pics/Нейминг.png';
import click from './pics/Клик.png';

import graphics from './pics/Графика.png';
import graphics2 from './pics/Графика2.png';
import articles from './pics/Статьи.png';
import articles2 from './pics/Статьи2.png';
import approach from './pics/Подход.png';
import approach2 from './pics/Подход2.png';

import ClientsGrid from '../../../components/ClientsGrid/ClientsGrid';

const uslugi = [
    {
        slug: 'sun',
        name: 'логотип',
        pic: sun,
    },
    {
        slug: 'copyright',
        name: 'копирайтинг',
        pic: copyright,
    },
    {
        slug: 'upakovka',
        name: 'упаковка',
        pic: upakovka,
    },
    {
        slug: 'slogans',
        name: 'слоганы',
        pic: slogans,
    },
    {
        slug: 'style',
        name: 'фирменный стиль',
        pic: style,
    },
    {
        slug: 'branding',
        name: 'брендинг',
        pic: branding,
    },
    {
        slug: 'naming',
        name: 'нейминг',
        pic: naming,
    },
];

const dela = [
    {
        name: 'Графика',
        text:
			'Мы делаем каждый бренд уникальным. Наша графика не оставит равнодушным. Главная цель наших проектов – запомнится потенциальному потребителю.',
        pics: [graphics, graphics2],
    },
    {
        name: 'Статьи',
        text:
			'Мы накопили очень много знаний и опыта, поэтому спешим поделится об этом с вами в разделе «Блог».',
        pics: [articles, articles2],
    },
    {
        name: 'Подход',
        text:
			'Мы впитываем в себя все идеи клиента, становимся частью его бренда, чтобы подарить ему неповторимый и продающиеся продукт.',
        pics: [approach, approach2],
    },
];

export default () => (
    <div className={cn({ [styles.Design]: true })}>
        <img className={cn({ [styles.back]: true })} src={back} alt="" />
        <h1 className={cn({ [styles.label]: true })}>
            <span className={cn({ [styles.top]: true })}>ДИЗАЙН</span>
            <span className={cn({ [styles.bottom]: true })}>
                КОТОРЫЙ ЗАПОМНИТСЯ КЛИЕНТУ
            </span>
        </h1>
        <h2 className={cn({ [styles.what]: true })}>Что мы можем?</h2>
        <div className={cn({ [styles.galactic]: true })}>
            <img className={cn({ [styles.kolca]: true })} src={galactic} alt="" />
            <ol className={cn({ [styles.items]: true })}>
                {uslugi.map((item, i) => (
                    <li
                        key={i}
                        className={cn({
                            [styles.item]: true,
                            [styles[item.slug]]: true,
                        })}
                    >
                        <img
                            className={cn({ [styles.pic]: true })}
                            src={item.pic}
                            alt=""
                        />
                        <span className={cn({ [styles.label]: true })}>
                            {item.name.toUpperCase()}
                        </span>
                    </li>
                ))}
            </ol>
            <img className={cn({ [styles.clck]: true })} src={click} />
        </div>
        <ol className={cn({ [styles.dela]: true })}>
            {dela.map((item, i) => (
                <li className={cn({ [styles.delo]: true })} key={i}>
                    <div className={cn({ 'pic-wrapper': true })}>
                        <img
                            className={cn({ [styles.pic1]: true })}
                            src={item.pics[0]}
                        />
                        <img
                            className={cn({ [styles.pic2]: true })}
                            src={item.pics[1]}
                        />
                    </div>
                    <div className={cn({ [styles.name]: true })}>
                        {item.name.toUpperCase()}
                    </div>
                    <div className={cn({ [styles.text]: true })}>
                        {item.text}
                    </div>
                </li>
            ))}
        </ol>
        <ClientsGrid
            className={cn({
                [styles.ClientsGrid]: true,
            })}
            textColor="#fff"
            headerCls={styles.headerCls}
        />
        <div className={cn({ [styles.your]: true })}>
            <h2
                className={cn({
                    [styles['your-design']]: true,
                })}
            >
                А КАКИМ БУДЕТ ТВОЙ ДИЗАЙН?
            </h2>
            <div className={cn({ [styles.btns]: true })}>
                <button type="button" className={cn({ [styles.idea]: true })}>
                    ПОДЕЛИСЬ СВОЕЙ ИДЕЕЙ
                </button>
                <button type="button" className={cn({ [styles.price]: true, yellow: true })}>
                    УЗНАЙ ЦЕНУ
                </button>
            </div>
        </div>
    </div>
);
