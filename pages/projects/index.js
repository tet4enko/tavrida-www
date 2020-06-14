import React, { useState } from 'react';
import cn from 'classnames';

import Dialog from '@material-ui/core/Dialog';
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

const gridPics = [ttPic, htPic, m2Pic, ffPic, vanilPic, zolotoPic, scandalPic, ligaPic, kkmPic, fundukPic];
const gridFullPics = [ttPicFull, htPicFull, m2PicFull, ffPicFull, vanilPicFull, zolotoPicFull, scandalPicFull, ligaPicFull, kkmPicFull, fundukPicFull];

export default () => {
    const [openedIndex, setOpenedIndex] = useState(null);

    const close = () => setOpenedIndex(null);

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
                {gridPics.map((item, index) => (
                    <img
                        key={index}
                        src={item}
                        className={cn({ [styles.item]: true })}
                        onClick={() => setOpenedIndex(index)}
                    />
                ))}
            </div>
            <div className={cn({ [styles['main-header']]: true })}>НАШИ КЛИЕНТЫ</div>
            <img className={cn({ [styles.clients]: true })} src={clientsPic} />
            <Dialog
                aria-labelledby="simple-dialog-title"
                open={openedIndex !== null}
                onEscapeKeyDown={close}
                onClick={close}
            >
                <img src={gridFullPics[openedIndex]} className={cn({ [styles['projects-opened-item-pic']]: true })} />
            </Dialog>
        </div>
    );
};
