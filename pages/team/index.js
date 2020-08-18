import React, { useState } from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

// eslint-disable-next-line import/named
import { useInterval } from '../../helpers/react';

import Section from './Section';

import medal1 from './pics/Медаль.png';
import medal2 from './pics/Медаль2.png';
import medal3 from './pics/Медаль3.png';

import slide1 from './pics/1.jpg';
import slide2 from './pics/2.jpg';
import slide3 from './pics/3.jpg';
import slide4 from './pics/4.jpg';
import slide5 from './pics/5.jpg';
import slide6 from './pics/6.jpg';
import slide7 from './pics/7.jpg';
import slide8 from './pics/8.jpg';
import slide9 from './pics/9.jpg';
import slide10 from './pics/10.jpg';
import slide11 from './pics/11.jpg';
import slide12 from './pics/12.jpg';
import slide13 from './pics/13.jpg';
import slide14 from './pics/14.jpg';
import slide15 from './pics/15.jpg';
import slide16 from './pics/16.jpg';
import slide17 from './pics/17.jpg';
import slide18 from './pics/18.jpg';
import slide19 from './pics/19.jpg';
import slide20 from './pics/20.jpg';
import slide21 from './pics/21.jpg';
import slide22 from './pics/22.jpg';
import slide23 from './pics/23.jpg';
import slide24 from './pics/24.jpg';
import slide25 from './pics/25.jpg';
import slide26 from './pics/26.jpg';

const slides = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
    slide9,
    slide10,
    slide11,
    slide12,
    slide13,
    slide14,
    slide15,
    slide16,
    slide17,
    slide18,
    slide19,
    slide20,
    slide21,
    slide22,
    slide23,
    slide24,
    slide25,
    slide26,
];

const component = () => {
    const [slideIndex, setSlideIndex] = useState(Math.floor(Math.random() * (slides.length - 1)));
    const [slideIsVisible, setSlideIsVisible] = useState(true);

    useInterval(() => {
        setSlideIsVisible(false);

        setTimeout(() => {
            let newIndex = slideIndex + 1;

            if (newIndex >= slides.length) {
                newIndex = 0;
            }
            setSlideIndex(newIndex);
            setSlideIsVisible(true);
        }, 300);
    }, 5000);

    return (
        <div className={cn({ [styles.Team]: true })}>
            <Section
                title="О НАС"
                text={(
                    <>
                        Рекламное агенство полного цикла
                        <br />
                        <strong>Таврида Медиа</strong>
                        – верный выбор для
                        <br />
                        вашего бизнеса! Команда специалистов
                        <br />
                        с многолетним оптом работы в сфере
                        <br />
                        рекламы поможет вам определиться и
                        <br />
                        выявить весь спектр услуг и рекламных
                        <br />
                        продуктов необходимых именно для
                        <br />
                        вас, с помощью которых будут
                        <br />
                        достигнуты все поставленные задачи.
                    </>
                )}
                pic={medal1}
                className={cn({
                    [styles.first]: true,
                    [styles.section]: true,
                })}
            />
            <Section
                direction="right"
                text={(
                    <>
                        Обращаясь к нам вы можете рассчитывать
                        <br />
                        на предоставление полного комплекса
                        <br />
                        услуг ,опытная команда специалистов
                        <br />
                        реализует все ваши задумки либо
                        <br />
                        предложат собственные, эффективные
                        <br />
                        решения. Мы обещаем вам решить все
                        <br />
                        задачи в кратчайшие сроки! Мы
                        <br />
                        сопроводим вас на всех этапах
                        <br />
                        рекламной компании от генерации
                        <br />
                        рекламной идеи и дизайна до монтажа и
                        <br />
                        обслуживания
                    </>
                )}
                pic={medal2}
                className={cn({
                    [styles.second]: true,
                    [styles.section]: true,
                })}
            />
            <Section
                text={(
                    <>
                        Успешно стартовать в бизнесе, обойти
                        <br />
                        всех своих конкурентов и привлечь
                        <br />
                        максимально возможную целевую
                        <br />
                        аудиторию можно только с помощью
                        <br />
                        новейших рекламных технологий и
                        <br />
                        тщательно выверенных маркетинговых
                        <br />
                        решений. Выбирая наше рекламное
                        <br />
                        агентство вы получаете самый высокий
                        <br />
                        уровень сервиса и разумные цены
                    </>
                )}
                pic={medal3}
                className={cn({
                    [styles.third]: true,
                    [styles.section]: true,
                })}
            />
            <div className={cn({ [styles.examples]: true })}>
                <img
                    src={slides[slideIndex]}
                    className={cn({
                        [styles.exampleImg]: true,
                        [styles.visible]: slideIsVisible,
                    })}
                />
                <h2 className={cn({ [styles.exampleTitle]: true })}>НАША РАБОТА</h2>
            </div>
        </div>
    );
};

export default component;
