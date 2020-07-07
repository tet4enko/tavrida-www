import React from 'react';
import ImageGallery from 'react-image-gallery';

import cn from 'classnames';

import styles from './index.module.scss';

import dom from './pics/Дом.png';
import product from './pics/Продукт.png';
import operativno from './pics/Оперативно.png';
import vipolnenie from './pics/Выполнение.png';
// import moika from './pics/Мойка.png';
// import phone from './pics/Смартфон.png';

import slide1 from './pics/1.jpg';
import slide2 from './pics/2.jpg';
import slide3 from './pics/3.jpg';
import slide4 from './pics/4.jpg';
import slide5 from './pics/5.jpg';
import slide6 from './pics/6.jpg';

import stage1pic from './pics/1 этап.png';
import stage2pic from './pics/2 этап.png';
import stage3pic from './pics/3 этап.png';

const stages = [
    {
        pic: stage1pic,
        label: 'Подготовительный',
        desc: `На данном этапе наша команда определяет набор моющих средств,
            в зависимости материала, из которого изготовлена вывеска.
            Например, для чистки лайтбоксов мы используем слабощелочные растворы
            с добавлением концентрата аммиака. Дополнительно, мы  производим
            удаление грязи с откосов, подоконников и прилегающим к ним конструкций.`,
        side: 'left',
    },
    {
        pic: stage2pic,
        label: 'Основной',
        desc: `Основной этап предполагает удаление загрязнений с поверхности  рекламной конструкции
            при помощи заранее выбранных чистящих средств. Клининг наземных вывесок осуществляется
            без применения специальной техники, при чистке поверхности выше 3х метров испольуется
            специальная высотная техника: многоуровневые лестницы, автовышки и т.д.`,
        side: 'right',
    },
    {
        pic: stage3pic,
        label: 'Завершающий',
        desc: `На завершающем этапе наши работники наносят на рекламную поверхность специальные водооталкивающие
            и антистатические средства. Эти средства содержат этиловый спирт, аммиак и антистатики, благодаря
            которым придается блеск очищенной поверхности.`,
        side: 'left',
    },
];

const images = [
    {
        original: slide1,
        thumbnail: slide1,
    },
    {
        original: slide2,
        thumbnail: slide2,
    },
    {
        original: slide3,
        thumbnail: slide3,
    },
    {
        original: slide4,
        thumbnail: slide4,
    },
    {
        original: slide5,
        thumbnail: slide5,
    },
    {
        original: slide6,
        thumbnail: slide6,
    },
];

const list = [
    {
        pic: product,
        caption: 'Продукт безупречного качества',
        desc: `
            Наша команда обеспечивает максимально эффективный результат
            независимо отуровня сложности. Наши работники очистят Вашу
            рекламную поверхность от следов краски, цемента, скотча и др.
        `,
    },
    {
        pic: operativno,
        caption: 'Быстрое реагирование',
        desc: `
            Четко отлаженные действия и наличие современного оборудования
            позволяют нам очистить Вашу рекламную конструкцию в течении 
            3-5 рабочих дней (со дня согласования всех особенностей
            предстоящей работы).
        `,
    },
    {
        pic: vipolnenie,
        caption: 'Выполнение работ любой сложности',
        desc: `
            Благодаря профессиоальному оборудованию и высококлассным
            моющим средствам наши работники выполнят чистку вывесок
            любых размеров  и сложности конструкций.
        `,
    },
];

export default () => (
    <div className={cn({ [styles.Cleaning]: true })}>
        <style jsx global>
            {`
				.image-gallery {
					position: absolute;
					width: 46vw;

					left: 0;
					right: 0;
					margin: auto;
				}

				.image-gallery-left-nav .image-gallery-svg,
				.image-gallery-right-nav .image-gallery-svg {
					height: 60px;
					width: 30px;
                }

                @media screen and (max-width: 1200px) {
                    .image-gallery {
                        width: 552px;
                    }
                }
			`}
        </style>
        <div className={cn({ [styles['top-content']]: true })}>
            <img className={cn({ [styles.dom]: true })} src={dom} />

            <h1 className={cn({ [styles.title]: true })}>
                <span className={cn({ [styles.betina]: true })}>
                    снимем
                </span>
                <span className={cn({ [styles.clean]: true })}>ПОЧИНИМ</span>
                <br />
                <span className={cn({ [styles.success]: true })}>
                    ОЧИСТИМ
                </span>
                <span className={cn({ [styles.betina]: true })}>
                    наденем
                </span>
            </h1>

            <div className={cn({ [styles.blablabla]: true })}>
                Очень важно, чтобы Ваш бизнес всегда был на высоте,
                мы прекрасно понимает это и поэтому предлагаем
                услуги реставрации и клининга Ваших рекламных
                поверхностей. Специалисты &quot;Таврида Медиа&quot; в
                кратчайшие сроки обещают вернуть вашей вывеске
                прежний, неотразимый вид.
            </div>

            <ol className={cn({ [styles.list]: true })}>
                {list.map((item, i) => (
                    <li className={cn({ [styles.item]: true })} key={i}>
                        <div
                            className={cn({
                                [styles['pic-wrapper']]: true,
                            })}
                        >
                            <img
                                src={item.pic}
                                className={cn({ [styles.pic]: true })}
                            />
                        </div>
                        <div className={cn({ [styles.text]: true })}>
                            <span
                                className={cn({ [styles.top]: true })}
                            >
                                {item.caption}
                            </span>
                            <span
                                className={cn({
                                    [styles.bottom]: true,
                                })}
                            >
                                {item.desc}
                            </span>
                        </div>
                    </li>
                ))}
            </ol>

            <div className={cn({ [styles.buttons]: true })}>
                <button
                    type="button"
                    className={cn({
                        [styles.btn]: true,
                        [styles.order]: true,
                        blue: true,
                    })}
                >
                    ОСТАВИТЬ ЗАЯВКУ
                </button>
                <button
                    type="button"
                    className={cn({
                        [styles.btn]: true,
                        [styles.price]: true,
                        yellow: true,
                    })}
                >
                    УЗНАТЬ ЦЕНУ
                </button>
            </div>
        </div>
        <div className={cn({ [styles['slider-wrapper']]: true })}>
            <div className={cn({ [styles['gallery-wrapper']]: true })}>
                <ImageGallery
                    items={images}
                    autoPlay
                    showPlayButton={false}
                    showThumbnails={false}
                />
            </div>

            <div className={cn({ [styles.phone]: true })}>
                <iframe
                    title="видео с примерами работ"
                    className={cn({ [styles.video]: true })}
                    src="https://www.youtube.com/embed/yAMQWtR3LGs?controls=0"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
        <div className={cn({ [styles.stages]: true })}>
            <h1 className={cn({ [styles.header]: true })}>
                ЭТАПЫ КЛИНИНГА
            </h1>
            <div className={cn({ [styles['items-wrapper']]: true })}>
                {stages.map((stage, i) => (
                    <div
                        className={cn({
                            [styles.stage]: true,
                            [styles[stage.side]]: true,
                        })}
                        key={i}
                    >
                        <div className={cn({ [styles.text]: true })}>
                            <h2 className={cn({ [styles.top]: true })}>
                                {stage.label}
                            </h2>
                            <span
                                className={cn({
                                    [styles.bottom]: true,
                                })}
                            >
                                {stage.desc}
                            </span>
                        </div>
                        <div
                            className={cn({
                                [styles['pic-wrapper']]: true,
                            })}
                        >
                            <img
                                className={cn({ [styles.pic]: true })}
                                src={stage.pic}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
