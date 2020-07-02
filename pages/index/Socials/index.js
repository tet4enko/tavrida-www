import React, { useState } from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

import { useInterval } from '../../../helpers/react';

import vk from './pics/вк.png';
import inst from './pics/инст.png';
import fb from './pics/фейс.png';
import phone1 from './pics/1.png';
import phone2 from './pics/2.png';
import phone3 from './pics/3.png';
import cheli from './pics/челы.png';

const icons = [
    {
        href: 'https://vk.com/tavrida.media',
        pic: vk,
    },
    {
        href: 'https://www.instagram.com/tavridamedia',
        pic: inst,
    },
    {
        href: 'https://www.facebook.com/profile.php?id=100052506698952',
        pic: fb,
    },
];

const phones = [phone1, phone2, phone3];

export default () => {
    const [phoneIndex, setPhoneIndex] = useState(0);

    const getNextIndex = () => {
        let result = phoneIndex + 1;

        if (result >= phones.length) {
            result = 0;
        }
        return result;
    };

    const toggle = () => {
        setPhoneIndex(getNextIndex());
    };

    useInterval(toggle, 5000);

    return (
        <div className={cn({ [styles.Socials]: true, section: true })}>
            <div className={cn({ 'general-header': true })}>
                СЛЕДИТЕ ЗА НАМИ В СОЦСЕТЯХ
            </div>
            <img src={phones[phoneIndex]} className={cn({ [styles.phone]: true })} />
            <img src={cheli} className={cn({ [styles.cheli]: true })} />
            <ul className={cn({ [styles.icons]: true })}>
                {icons.map((icon) => (
                    <li className={cn({ [styles['icon-wrapper']]: true })}>
                        <a
                            href={icon.href}
                            className={cn({ [styles['icon-wlinkrapper']]: true })}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={icon.pic} className={cn({ [styles.icon]: true })} />
                        </a>
                    </li>
                ))}
            </ul>
            <p className={cn({ [styles.text]: true })}>
                Советуем Вам подписаться на наши
                <br />
                странички в Instagram, ВКонтакте
                <br />
                и Facebook, чтобы первыми узнавать
                <br />
                о свежих новостях, актуальных
                <br />
                акциях и скидках.
            </p>
        </div>
    );
};
