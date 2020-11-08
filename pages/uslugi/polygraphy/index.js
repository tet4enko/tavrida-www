import React from 'react';
import Head from 'next/head';
import cn from 'classnames';
import ServiceCaption from '../../../components/ServiceCaption/ServiceCaption';
import ServicesSlider from '../../../components/ServicesSlider/ServicesSlider';
import ServiceList from '../../../components/ServiceList/ServiceList';

import styles from './index.module.scss';

import vizitki from './pics/1.png';
import flaera from './pics/2.png';
import plenka from './pics/3.png';
import cards from './pics/4.png';
import calendars from './pics/5.png';
import notedaps from './pics/6.png';
import paketi from './pics/7.png';
import upakovki from './pics/8.png';

const services = [
    {
        name: 'Визитки',
        shortText: 'Визитки являются одним из самых распространённых и одновременно самых дешёвых видов рекламных приёмов.',
        longText: 'Важнейшим элементом этики современного общения и имиджа делового человека является визитка. В современной деловой среде довольно востребованной полиграфической услугой стало создание визитных карточек. Визитки являются одним из самых распространённых и одновременно самых дешёвых видов рекламных приёмов. Для создания вашей визитки в нашем ассортименте имеется огромное количество материалов, а также способов нанесения на выбор, которые различаются между собой по внешнему виду, цвету и тактильным ощущениям.',
        pic: vizitki,
        slug: 'businesscards',
    },
    {
        name: 'Флаера и листовки',
        shortText: 'Они выполняют функцию носителя рекламной и социальной информации К тому же этот инструмент рекламы имеет очень низкую цену и одновременно высокую эффективность.',
        longText: 'Одни из самых популярных видов полиграфической продукции сегодня – это листовки и флаера. они  эффективно выполняют функцию носителя рекламной, социальной и другой информации. Именно поэтому изготовление листовок на сегодняшний день так актуально. Тем более, что этот инструмент рекламы имеет очень низкую цену и одновременно высокую эффективность.',
        pic: flaera,
        slug: 'flyers',
    },
    {
        name: 'Пластиковые карты',
        shortText: 'Отличаются  высокой стойкостью  к внешним воздействиям, а также прочностью и долговечностью. Мы можем с легкостью изготовить для вас пластиковые карты, бэйджи и т.п.',
        longText: 'Пластиковые карты — это современный высокотехнологичный носитель информации. Область использования пластиковых карт довольно обширна и она постоянно растет, перекликаясь со многими сферами  нашей жизни: медицина и страхование, торговля и транспорт, идентификация владельца и контроль доступа, реклама и индустрия развлечений.',
        pic: cards,
        slug: 'creditcards',
    },
    {
        name: 'Календари',
        shortText: 'Мы относимся к изготовлению календарей очень серьезно, ведь календарь сделанный на заказ будет в течении всего года висеть и радовать глаз заказчика.',
        longText: 'Календарь- прекрасное решение для оригинального подарка и декорирования вашего  дома. Несколько удобных форматов и разные календарные сетки. Ваши фотографии на каждой странице: улыбка вашего ребенка, семейный портрет или лучшие моменты путешествий.',
        pic: calendars,
        slug: 'calendars',
    },
    {
        name: 'Блокноты',
        shortText: 'Блокноты —  очень практичны, поэтому в отличие от других продуктов рекламы,  их активно применяются в повседневной работе.',
        longText: 'Корпоративные блокноты очень часто используют в качестве раздаточного материала на конференциях, семинарах или выставках. Это позволяет продемонстрировать заботу о своих гостях. Именно из таких мелочей и складывается положительный имидж любой фирмы. Страничность, как правило, варьируется от 25 до 100 листов. Этот диапазон больше всего соответствует запросам делового человека. Изделия меньшей страничности могут быть использованы исключительно как подарочные блокноты для клиентов и гостей вашего стенда на отраслевой выставке. Они служат скорее рекламным материалом, чем функциональным полиграфическим продуктом.',
        pic: notedaps,
        slug: 'notepads',
    },
    {
        name: 'Пакеты',
        shortText: 'Мы с удовольствием изготовим для вас пакеты с вашим логотипом по доступной цене,в кратчайшие сроки!',
        longText: 'Прочные и стильные пакеты с логотипом Вашей компании – это необходимейшая вещь для успешного запоминания бренда и формирования благоприятного имиджа.  Одно- и многоцветная печать. Биоразлагаемые пакеты, ПВД-пакеты, пластиковые пакеты, бумажные пакеты, тканевые сумки с логотипом, Также наши специалисты помогут вам разработать  макет для печати',
        pic: paketi,
        slug: 'bags',
    },
    {
        name: 'Упаковки',
        shortText: 'Любой вид упаковки с вашим логотипом – это замечательный способ заявить о себе и своей компании.  Отличный инструмент для привлечения клиентов. Мы нанесем на продукцию любое изображение или логотип, выбранный вами.',
        longText: 'Любой вид упаковки с вашим логотипом – это замечательный способ заявить о себе и своей компании.  Отличный инструмент для привлечения клиентов. Мы нанесем на продукцию любое изображение или логотип, выбранный вами',
        pic: upakovki,
        fat: true,
        slug: 'packages',
    },
];

const component = () => (
    <div
        className={cn({
            [styles.Polygraphy]: true,
            'page-wrapper': true,
            'page-content': true,
            'service-page-type-1': true,
        })}
    >
        <ServiceCaption caption="полиграфия" description="" />
        <ServicesSlider services={services} type="polygraphy" />
        <ServiceList services={services} type="polygraphy" />
        <div
            className={cn({
                [styles.baloon]: true,
                baloon: true,
                top: true,
            })}
        />
        <div
            className={cn({
                [styles.baloon]: true,
                baloon: true,
                bottom: true,
            })}
        />
        <Head>
            <title>ПОЛИГРАФИЯ</title>
            <meta property="og:locale" content="ru_RU" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Полиграфия" />
            <meta property="og:description" content="Мы предлагаем услуги печати на пленке, изготовлению визиток, флаеров, пластиковых карт, упаковок и т.д." />
            <meta property="og:url" content="https://tavrida-media.ru/uslugi/polygraphy/" />
            <meta property="og:site_name" content="Рекламное агентство Таврида Медиа" />
        </Head>
    </div>
);

component.getInitialProps = async ({ store, pathname }) => {
    store.dispatch({ type: 'SERVICE_TYPE_SET', payload: pathname.match(/\/uslugi\/(.+)/)[1] });
    return {};
};

export default component;
export { component, services };
