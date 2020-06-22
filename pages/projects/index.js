import React, { useState } from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

import mainPic from './pics/Фото.png';

import ttPic from './pics/ТТ/ТТ.png';
import htPic from './pics/НТ/HT.png';
import m2Pic from './pics/М2/М2.png';
import ffPic from './pics/FF/Ff.png';
import vanilPic from './pics/Ваниль/Ваниль.png';
import zolotoPic from './pics/Золото/Золото.png';
import scandalPic from './pics/Сканд/Сканд.png';
import ligaPic from './pics/Лига/Лига.png';
import kkmPic from './pics/ККМ/ККМ.png';
import fundukPic from './pics/Фундук/Фундук.png';

import ttPicFull from './pics/ТТ/ТТ..png';
import htPicFull from './pics/НТ/Hookah Time.png';
import m2PicFull from './pics/М2/Квадрат.png';
import ffPicFull from './pics/FF/Фудди.jpg';
import vanilPicFull from './pics/Ваниль/Ваниль..png';
import zolotoPicFull from './pics/Золото/Крымское золото.png';
import scandalPicFull from './pics/Сканд/Скандал.png';
import ligaPicFull from './pics/Лига/Лига..png';
import kkmPicFull from './pics/ККМ/ККМ..png';
import fundukPicFull from './pics/ККМ/ККМ..png';

import clientsPic from './pics/Клиенты.png';

import ProjectDialog from '../../components/ProjectDialog/ProjectDialog';

const projects = [
    {
        preview: ttPic,
        full: ttPicFull,
        closeColor: 'black',
        title: 'Территория теста',
        items: [
            'Айдентика',
            'Дизайн вывески',
        ],
        slug: 'testo',
    },
    {
        preview: htPic,
        full: htPicFull,
        closeColor: 'white',
        title: 'Hookah time',
        items: [
            'Разработка меню',
            'Дизайн вывески',
            'Фирменная форма',
            'SMM',
        ],
        slug: 'ht',
    },
    {
        preview: m2Pic,
        full: m2PicFull,
        closeColor: 'white',
        title: 'Квадрат',
        items: [
            'Создание логотипа',
            'Айдентика',
        ],
        slug: 'gavno',
    },
    {
        preview: ffPic,
        full: ffPicFull,
        closeColor: 'black',
        title: 'Fresh Foodie',
        items: [
            'Нейминг',
            'Создание логотипа',
            'Фирменный стиль',
            'Дизайн упаковки',
            'Стикеры',
        ],
        slug: 'fresh',
    },
    {
        preview: vanilPic,
        full: vanilPicFull,
        closeColor: 'white',
        title: 'Ваниль',
        items: [
            'Редизайн',
            'Дизайн этикетки',
        ],
        slug: 'vanil',
    },
    {
        preview: zolotoPic,
        full: zolotoPicFull,
        closeColor: 'white',
        title: 'Крымское золото',
        items: [
            'Нейминг',
            'Создание логотипа',
            'Фирменный стиль',
            'Дизайн упаковки',
        ],
        slug: 'zoloto',
    },
    {
        preview: scandalPic,
        full: scandalPicFull,
        closeColor: 'white',
        title: 'Scandal',
        items: [
            'Создание логотипа',
            'Фирменный стиль',
            'Стилизация социальных сетей',
        ],
        slug: 'scandal',
    },
    {
        preview: ligaPic,
        full: ligaPicFull,
        closeColor: 'black',
        title: 'Liga',
        items: [
            'Создание логотипа',
            'Фирменный стиль',
            'Стилизация социальных сетей',
            'Дизайн наградной атрибутики',
        ],
        slug: 'liga',
    },
    {
        preview: kkmPic,
        full: kkmPicFull,
        closeColor: 'black',
        title: 'ККМ Сервис',
        items: [
            'Айдентика',
            'Фирменный стиль',
            'Дизайн этикетки',
        ],
        slug: 'kkm',
    },
    {
        preview: fundukPic,
        full: fundukPicFull,
        closeColor: 'black',
        title: 'Фундук',
        items: [
            'Редизайн',
            'Дизайн этикетки',
        ],
        slug: 'funduk',
    },
];

const component = () => {
    const [openedIndex, setOpenedIndex] = useState(null);

    const close = () => {
        setOpenedIndex(null);
    };

    return (
        <div className={cn({ [styles.Projects]: true })}>
            <div className={cn({ [styles.main]: true })}>
                <img className={cn({ [styles.pic]: true })} src={mainPic} />
                <p className={cn({ [styles.text]: true })}>
                    <h1 className={cn({ [styles.top]: true })}>ПРОЕКТЫ</h1>
                    <span className={cn({ [styles.bottom]: true })}>Хорошо, когда хорошо и наши проекты тому подтверждение</span>
                </p>
            </div>
            <div className={cn({ [styles.grid]: true })}>
                {projects.map((item, index) => (
                    <div
                        className={cn({ [styles.item]: true })}
                        key={index}
                        onClick={() => setOpenedIndex(index)}
                    >
                        <img
                            src={item.preview}
                            className={cn({ [styles.pic]: true })}
                        />
                        <div
                            className={cn({ [styles.overflow]: true })}
                        >
                            <span className={cn({ [styles.title]: true })}>{item.title}</span>
                            <ol className={cn({ [styles.text]: true })}>
                                {item.items.map((listItem) => <li className={cn({ [styles['text-item']]: true })}>{listItem}</li>)}
                            </ol>
                        </div>
                    </div>
                ))}
            </div>
            <div className={cn({ [styles['main-header']]: true })}>НАШИ КЛИЕНТЫ</div>
            <img className={cn({ [styles.clients]: true })} src={clientsPic} />
            <ProjectDialog
                isOpened={openedIndex !== null}
                onClose={close}
                data={projects[openedIndex || 0]}
            />
        </div>
    );
};

export default component;
export { component, projects };
