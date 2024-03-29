/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import Head from 'next/head';
import cn from 'classnames';
import styles from './index.module.scss';
import WebSlider from './WebSlider';
import CasesGrid from '../../../components/CasesGrid/CasesGrid';
import GetSite from '../../../components/GetSite/GetSite';

import roboeb from './pics/Робоеб.png';

import verstka from './pics/Верстка.png';
import design from './pics/Дизайн.png';
import tests from './pics/Тесты.png';
import research from './pics/Исследование.png';

import banner1 from './pics/Баннер1.png';
import banner2 from './pics/Баннер2.png';
import banner3 from './pics/Баннер3.png';

const stages = [
    {
        pic: research,
        label: 'Исследование',
        text: 'Разработка оптимальный решений на основе сценариев заказчика',
    },
    {
        pic: design,
        label: 'Дизайн',
        text:
			'Проектирование макета, проверка всех компонентов, подготовка к вестке',
    },
    {
        pic: verstka,
        label: 'Верстка',
        text: 'Верстка сайта согласно заранее согласованной концепции',
    },
    {
        pic: tests,
        label: 'Тесты',
        text: 'Финальная проверка работоспособности всех ссылок и блоков сайта',
    },
];

const cases = [
    {
        label: 'Лендинг до 4-х экранов',
    },
    {
        label: 'Лендинг до 8-10 экранов',
    },
    {
        label: 'Корпоративный сайт',
    },
    {
        label: 'Сайт услуг',
    },
    {
        label: 'Интернет-магазин',
    },
    {
        label: 'Сложный веб-проект',
    },
];

const component = () => (
    <div className={cn({ [styles.Web]: true })}>
        <WebSlider />
        <h2 className={cn({ [styles['main-header']]: true })}>
            ЭТАПЫ РАБОТЫ
        </h2>
        <ol className={cn({ [styles.stages]: true })}>
            {stages.map((stage, i) => (
                <li className={cn({ [styles.stage]: true })} key={i}>
                    <img
                        className={cn({ [styles.back]: true })}
                        src={stage.pic}
                    />
                    <span className={cn({ [styles.label]: true })}>
                        {stage.label}
                    </span>
                    <span className={cn({ [styles.text]: true })}>
                        {stage.text}
                    </span>
                </li>
            ))}
        </ol>
        <h2 className={cn({ [styles['main-header']]: true })}>
            ИННОВАЦИОННЫЕ ТЕХНОЛОГИИ
        </h2>
        <span
            className={cn({
                [styles['lol-text']]: true,
                [styles.left]: true,
            })}
        >
            Мы используем в разработке только самые передовые инструменты и
            <br />
            фреймворки и постоянно совершенствуем свои навыки
        </span>
        <img
            className={cn({
                [styles['simple-pic']]: true,
                [styles.roboeb]: true,
            })}
            src={roboeb}
        />
        <h2
            className={cn({ [styles['main-header']]: true })}
        >
            <a name="cases" className={cn({ [styles['cases-anchor']]: true })} />
            ВЫБЕРИ СВОЙ КЕЙС
        </h2>
        <CasesGrid cases={cases} />
        <GetSite />
        <h2 className={cn({ [styles['main-header']]: true })}>
            ПОМОЖЕМ ИНТЕГРИРОВАТЬ
            {' '}
            <br />
            ВАШ БИЗНЕС
        </h2>
        <span
            className={cn({
                [styles['lol-text']]: true,
                [styles.right]: true,
            })}
        >
            Интегрируем Ваш бизнес с помощью популярных платформ, которые
            <br />
            позволяют автоматизировать процессы и повысить чистую прибыль
        </span>
        <img src={banner1} className={cn({ [styles.banner]: true })} />
        <br />
        <img src={banner2} className={cn({ [styles.banner]: true })} />
        <br />
        <img
            src={banner3}
            className={cn({ [styles.banner]: true, [styles.last]: true })}
        />
        <br />
        <Head>
            <title>РАЗРАБОТКА САЙТОВ</title>
            <meta property="og:locale" content="ru_RU" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Разработка сайтов" />
            <meta property="og:description" content="Мы используем в разработке только самые передовые инструменты и фреймворки и постоянно совершенствуем свои навыки" />
            <meta property="og:url" content="https://tavrida-media.ru/uslugi/web/" />
            <meta property="og:site_name" content="Рекламное агентство Таврида Медиа" />
        </Head>
    </div>
);

component.getInitialProps = async ({ store, pathname }) => {
    store.dispatch({ type: 'SERVICE_TYPE_SET', payload: pathname.match(/\/uslugi\/(.+)/)[1] });
    return {};
};

export default component;
