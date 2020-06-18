import React, { useState } from 'react';
import cn from 'classnames';

import Dialog from '@material-ui/core/Dialog';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

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
    },
];

export default () => {
    const [state, setState] = useState({
        openedIndex: null,
        isImageLoading: true,
    });

    const close = () => {
        setState({
            isImageLoading: true,
            openedIndex: null,
        });
    };

    const onPreviewItemClick = (index) => {
        setState({
            isImageLoading: true,
            openedIndex: index,
        });
    };

    console.log(state);

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
                        onClick={() => onPreviewItemClick(index)}
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
            <Dialog
                aria-labelledby="simple-dialog-title"
                open={state.openedIndex !== null}
                onEscapeKeyDown={close}
                onBackdropClick={close}
                maxWidth={false}
                className={cn({
                    [styles['projects-opened-item-dialog']]: true,
                })}
                classes={{
                    paper: cn({
                        [styles['projects-opened-item-dialog-paper']]: true,
                        [styles.visible]: !state.isImageLoading,
                    }),
                }}
            >
                <CloseRoundedIcon
                    onClick={close}
                    className={cn({
                        [styles['projects-opened-item-close']]: true,
                        [styles[projects[state.openedIndex] && projects[state.openedIndex].closeColor]]: true,
                    })}
                    fontSize="large"
                />
                <img
                    onLoad={() => { setState({ isImageLoading: false, openedIndex: state.openedIndex }); }}
                    src={projects[state.openedIndex] && projects[state.openedIndex].full}
                    className={cn({
                        [styles['projects-opened-item-pic']]: true,
                    })}
                />
            </Dialog>
        </div>
    );
};
