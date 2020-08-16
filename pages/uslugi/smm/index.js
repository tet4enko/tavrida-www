import React from 'react';
import jQuery from 'jquery';
import Head from 'next/head';
import cn from 'classnames';
import styles from './index.module.scss';

import big from './pics/Шапка.png';
import comp1 from './pics/С1.png';
import comp2 from './pics/С2.png';
import comp3 from './pics/С3.png';

import opitPic from './pics/3+.png';
import prjsPic from './pics/50.png';
import nonstopPic from './pics/24на7.png';
// import balarsPic from './pics/12.png';

import techs from './pics/Технологии.png';

import boy from './pics/Пацык.png';
import girl from './pics/Телка.png';

import CasesGrid from '../../../components/CasesGrid/CasesGrid';
import GetSite from '../../../components/GetSite/GetSite';

const cases = [{}, {}, {}, {}];

const comps = [comp1, comp2, comp3];

const values = [
    {
        text: 'ГОДА ОПЫТА',
        pic: opitPic,
    },
    {
        text: 'ПРОЕКТОВ',
        pic: prjsPic,
    },
    {
        text: 'БЕЗ ВЫХОДНЫХ',
        pic: nonstopPic,
    },
];

const component = () => {
    const [compsIndex, setCompsIndex] = React.useState(0);

    const getNextIndex = (index_) => {
        let result;

        result = index_ + 1;
        if (result >= comps.length) {
            result = 0;
        }

        return result;
    };

    const toggle = () => {
        setCompsIndex(getNextIndex(compsIndex));
    };

    React.useEffect(() => {
        setTimeout(toggle, 4000);
    }, [compsIndex]);

    const casesRef = React.useRef(null);

    return (
        <div className={cn({ [styles.FuckingSmm]: true })}>
            <img className={cn({ [styles.big]: true })} src={big} />
            <div className={cn({ [styles.header]: true })}>
                <span className={cn({ [styles.top]: true })}>Что такое</span>
                <h1 className={cn({ [styles.middle]: true })}>
                    SMM и ТАРГЕТИНГ
                </h1>
                <span className={cn({ [styles.bottom]: true })}>
                    и с чем его едят...
                </span>
            </div>
            <p className={cn({ [styles.desc]: true })}>
                {`SMM или Таргетинг – это качественное продвижение в социальных сетях 
				от крымского рекламного агентства «Таврида Медиа». Мы предлагаем 
				Вам обширный спектр по продвижению бизнеса во всех сетях. Для нас 
				каждый проект особенен и уникален, наша главная цель – максимальный результат,
				 поэтому мы отказались от стандартных шаблонов и стали работать по собственной методике. 
				  За каждым проектом закрепляется свой менеджер, что позволяет нам оставаться с 
				  Вами на связи практически круглосуточно. Мы используем только качественный трафик,
				   что дает нам полное право игнорировать ботов, офферов и искусственные накрутки.`}
            </p>
            <div className={cn({ [styles['case-wrapper']]: true })}>
                <button
                    type="button"
                    className={cn({ [styles.case]: true, gradient: true })}
                    onClick={() => jQuery('html, body').animate({
                        scrollTop: casesRef.current.offsetTop,
                    }, 700)}
                >
                    ВЫБРАТЬ СВОЙ КЕЙС
                </button>
            </div>
            <h2 className={cn({ [styles['main-header']]: true })}>
                ЧТО МЫ МОЖЕМ СДЕЛАТЬ ДЛЯ ВАС
            </h2>
            <div className={cn({ [styles.comps]: true })}>
                {comps.map((comp, index) => (
                    <img
                        key={index}
                        className={cn({
                            [styles.comp]: true,
                            [styles['simple-pic']]: true,
                            [styles.visible]: index === compsIndex,
                        })}
                        src={comps[index]}
                    />
                ))}
            </div>
            <div className={cn({ [styles.values]: true })}>
                <h2 className={cn({ [styles.label]: true })}>
                    ЦИФРЫ СКАЖУТ ВСЕ ЗА НАС
                </h2>
                <div className={cn({ [styles.items]: true })}>
                    {values.map((item, i) => (
                        <div className={cn({ [styles.item]: true })} key={i}>
                            <img
                                src={item.pic}
                                className={cn({ [styles.pic]: true })}
                            />
                            <span className={cn({ [styles.text]: true })}>
                                {item.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <h2 className={cn({ [styles['main-header']]: true })}>
                КАКИЕ ТЕХНОЛОГИИ МЫ ИСПОЛЬЗУЕМ
            </h2>
            <img className={cn({ [styles['simple-pic']]: true })} src={techs} />
            <h2
                className={cn({
                    [styles['main-header']]: true,
                    [styles['your-case']]: true,
                })}
                ref={casesRef}
            >
                ВЫБЕРИ СВОЙ КЕЙС
            </h2>
            <CasesGrid cases={cases} />
            <GetSite className={cn({ [styles.GetSite]: true })} />
            <img className={cn({ [styles.boy]: true })} src={boy} />
            <img className={cn({ [styles.girl]: true })} src={girl} />
            <Head>
                <title>SMM и ТАРГЕТИНГ</title>
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Smm и Таргетинг" />
                <meta property="og:description" content="Мы предлагаем обширный спектр услуг по продвижению бизнеса во всех социальных сетях." />
                <meta property="og:url" content="https://tavrida-media.ru/uslugi/smm/" />
                <meta property="og:site_name" content="Рекламное агентство Таврида Медиа" />
            </Head>
        </div>
    );
};

component.getInitialProps = async ({ store, pathname }) => {
    store.dispatch({ type: 'SERVICE_TYPE_SET', payload: pathname.match(/\/uslugi\/(.+)/)[1] });
    return {};
};

export default component;
