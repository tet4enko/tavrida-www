/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
import React, { Component } from 'react';
import jQuery from 'jquery';
import cn from 'classnames';
import {
    FormControl, FormControlLabel, TextField, Select, InputLabel, Button, Checkbox,
} from '@material-ui/core';
import styles from './SuperFooter.module.scss';

import tel from './pics/Телефон.png';
import car from './pics/Машина.png';
import design from './pics/Дизайнер.png';

import vk from './pics/vk.png';
import inst from './pics/inst.png';
import gl from './pics/gl.png';

import mail from './pics/Почта.png';
import time from './pics/Часы.png';

import tarelka from './pics/Тарелка.png';

const socialIconSize = '30px';
const iconSize = '45px';

const rabotniki = [
    {
        icon: tel,
        position: 'Менеджер по заказам',
        tel1: (
            <>
                7 978
                {' '}
                <b>079 09 79</b>
            </>
        ),
        tel2: '+79780790979',
        side: 'left',
    },
    {
        icon: car,
        position: 'Логистика',
        tel1: (
            <>
                7 978
                {' '}
                <b>823 51 37</b>
            </>
        ),
        tel2: '+79788235137',
        side: 'center',
    },
    {
        icon: design,
        position: 'Дизайнер',
        tel1: (
            <>
                7 978
                {' '}
                <b>590 51 56</b>
            </>
        ),
        tel2: '+79785905156',
        side: 'right',
    },
];

class SuperFooter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: 'naruzhka',
            agree: false,
            file: null,
            orderProgress: false,
        };

        this.onSubmit = (event) => {
            event.preventDefault();

            this.setState({ orderProgress: true });

            const data = new FormData(event.target);

            jQuery.ajax({
                url: '/api/order',
                data,
                cache: false,
                processData: false,
                contentType: false,
                type: 'POST',
                success: () => {
                    alert('Спасибо за заказ!\nМы свяжемся с Вами в ближайшее время.');
                },
                error: (error) => {
                    let message = 'Ошибка при отправке запроса.\nПопробуйте еще раз, пожалуйста.';

                    if (error.status === 400 && error.responseJSON) {
                        if (error.responseJSON.code === 'ETOOBIG') {
                            message = 'Слишком большой файл, разрешены файлы размером меньше 20мб.';
                        }
                    }

                    alert(message);
                },
                complete: () => {
                    this.setState({ orderProgress: false });
                },
            });
        };
    }

    render() {
        const rabotnik = (icon, position, tel1, tel2) => (
            <div className={cn({ [styles.rabotnik]: true })}>
                <img src={icon} height={iconSize} />
                <div className={cn({ [styles.info]: true })}>
                    <div
                        className={cn({ [styles.position]: true })}
                    >
                        {`${position}:`}
                    </div>
                    <a
                        className={cn({ [styles.tel]: true })}
                        itemProp="telephone"
                        href={`tel:${tel2}`}
                    >
                        {tel1}
                    </a>
                </div>
            </div>
        );

        const {
            type, agree, file, orderProgress,
        } = this.state;

        const { onCallbackClick } = this.props;

        return (
            <div className={cn({ [styles.SuperFooter]: true })}>
                <div className={cn({ [styles.top]: true })}>
                    <div className={cn({ [styles.left]: true })}>
                        <span className={cn({ [styles.heading]: true })}>
                            Звоните или пишите
                            {' '}
                            <span className={cn({ [styles.yellow]: true })}>НАМ!</span>
                            <br />
                            Мы с радостью проконсультируем
                            <br />
                            Вас по любому вопросу!
                        </span>
                        <span className={cn({ [styles.text]: true })}>
                            Красивый и продающий бренд – это главный
                            <br />
                            актив Вашего бизнеса. Разработка бренда –
                            <br />
                            сугубо индивидуальное решение,
                            <br />
                            удовлетворяющее целям и задачам именно
                            <br />
                            Вашего бизнеса. Поэтому и его расчет
                            <br />
                            проводится индивидуально  с учетом всех
                            <br />
                            Ваших желаний и финансовых возможностей.
                        </span>
                        <img
                            className={cn({ [styles.tarelka]: true })}
                            src={tarelka}
                        />
                    </div>
                    <div className={cn({ [styles.right]: true })}>
                        <span className={cn({ [styles.heading]: true })}>
                            Заказать
                            {' '}
                            <span className={cn({ [styles.yellow]: true })}>услугу</span>
                        </span>
                        <form autoComplete="on" onSubmit={this.onSubmit}>
                            <FormControl fullWidth className={cn({ [styles.control]: true })}>
                                <TextField
                                    label="Ваше имя"
                                    required
                                    classes={{
                                        root: cn({
                                            white: true,
                                        }),
                                    }}
                                    fullWidth
                                    name="name"
                                />
                            </FormControl>
                            <FormControl fullWidth className={cn({ [styles.control]: true })}>
                                <TextField
                                    label="Телефон"
                                    required
                                    inputProps={{ type: 'tel' }}
                                    classes={{
                                        root: cn({
                                            white: true,
                                        }),
                                    }}
                                    fullWidth
                                    name="phone"
                                />
                            </FormControl>
                            <FormControl fullWidth className={cn({ [styles.control]: true })}>
                                <TextField
                                    label="E-mail"
                                    inputProps={{ type: 'email' }}
                                    classes={{
                                        root: cn({
                                            white: true,
                                        }),
                                    }}
                                    fullWidth
                                    name="email"
                                />
                            </FormControl>
                            <FormControl fullWidth className={cn({ [styles.control]: true })}>
                                <InputLabel
                                    classes={{
                                        root: cn({
                                            white: true,
                                        }),
                                    }}
                                >
                                    Выберите услугу
                                </InputLabel>
                                <Select
                                    native
                                    value={type}
                                    onChange={(e) => this.setState({ type: e.target.value })}
                                    inputProps={{
                                        name: 'type',
                                    }}
                                    classes={{
                                        root: cn({
                                            white: true,
                                        }),
                                    }}
                                    name="type"
                                >
                                    <option value="naruzhka">Наружная реклама</option>
                                    <option value="polygraphy">Полиграфия</option>
                                    <option value="suvenirka">Сувенирная продукция</option>
                                    <option value="cleaning">Клининг</option>
                                    <option value="smm">SMM и маркетинг</option>
                                    <option value="web">Разработка сайтов</option>
                                    <option value="design">Дизайн</option>
                                </Select>
                            </FormControl>
                            <FormControl fullWidth className={cn({ [styles.control]: true })}>
                                <TextField
                                    label="Комментарий"
                                    multiline
                                    rowsMax={5}
                                    classes={{
                                        root: cn({
                                            white: true,
                                        }),
                                    }}
                                    fullWidth
                                    name="comment"
                                />
                            </FormControl>
                            <FormControl fullWidth className={cn({ [styles.control]: true })}>
                                <input
                                    style={{ display: 'none' }}
                                    id="raised-button-file"
                                    type="file"
                                    accept=".pdf,.doc,.docx,.ppt,.pptx"
                                    onChange={(e) => this.setState({ file: e.target.value })}
                                    name="file"
                                />
                                <label htmlFor="raised-button-file">
                                    <Button
                                        fullWidth
                                        component="span"
                                        className={cn({ [styles.upload]: true })}
                                    >
                                        Прикрепить файл
                                        <br />
                                        <div className={cn({ [styles.desc]: true })}>
                                            PDF, Word, RTF или MS Power Point не более 25мб
                                        </div>
                                    </Button>
                                </label>
                                <div className={cn({ [styles.filename]: true })}>{file}</div>
                            </FormControl>
                            <FormControl fullWidth className={cn({ [styles.control]: true })}>
                                <FormControlLabel
                                    classes={{
                                        label: cn({ [styles['checkbox-label']]: true }),
                                    }}
                                    control={(
                                        <Checkbox
                                            checked={agree}
                                            onChange={() => this.setState({ agree: !agree })}
                                            required
                                            classes={{ colorSecondary: 'yellow' }}
                                        />
                                    )}
                                    label="Согласие на обработку персональных данных"
                                />
                            </FormControl>
                            <a
                                className={cn({
                                    [styles.control]: true,
                                    [styles.polytics]: true,
                                })}
                                href="/polytics"
                                target="_blank"
                            >
                                Политика конфиденциальности
                            </a>
                            <FormControl fullWidth className={cn({ [styles.control]: true })}>
                                <button
                                    type="submit"
                                    className={cn({
                                        yellow: true,
                                        progress: orderProgress,
                                        [styles.submit]: true,
                                    })}
                                >
                                    ОТПРАВИТЬ
                                </button>
                            </FormControl>
                        </form>
                    </div>
                </div>
                <div
                    className={cn({ [styles.main]: true })}
                    width="1200px"
                    height="560px"
                >
                    <div className={cn({ [styles.copyright]: true })}>
                        © 2015-2020 Рекламное агенство «ТАВРИДА МЕДИА» – реклама
                        в Симферополе и другие городах Крыма
                    </div>

                    {rabotniki.map((item, i) => (
                        <div
                            key={i}
                            className={cn({
                                [styles.col]: true,
                                [styles.coltop]: true,
                                [styles[item.side]]: true,
                            })}
                        >
                            {rabotnik(
                                item.icon,
                                item.position,
                                item.tel1,
                                item.tel2,
                            )}
                        </div>
                    ))}

                    <div
                        className={cn({
                            [styles.col]: true,
                            [styles.left]: true,
                            [styles.colbottom]: true,
                            [styles.mail]: true,
                        })}
                    >
                        <img src={mail} height={iconSize} />
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="mailto:tavrida.media@mail.ru"
                        >
                            <span>tavrida.media@mail.ru</span>
                            <div className={cn({ [styles.txt]: true })}>
                                Подписаться на рассылку
                            </div>
                        </a>
                    </div>

                    <div
                        className={cn({
                            [styles.col]: true,
                            [styles.center]: true,
                            [styles.colbottom]: true,
                            [styles.time]: true,
                        })}
                    >
                        <img src={time} height={iconSize} />
                        <span className={cn({ [styles.text]: true })}>
                            10:00 - 19:00 / Пн-Пт
                        </span>
                    </div>

                    <div
                        className={cn({
                            [styles.col]: true,
                            [styles.right]: true,
                            [styles.colbottom]: true,
                            [styles.callback]: true,
                        })}
                    >
                        <button
                            className={cn({ [styles.btn]: true })}
                            type="button"
                            onClick={onCallbackClick}
                        >
                            ПЕРЕЗВОНИТЕ МНЕ
                        </button>
                    </div>

                    <div
                        className={cn({ [styles.social]: true })}
                        id="social-links"
                    >
                        <span className={cn({ [styles.text]: true })}>
                            Следите за нами в:
                        </span>
                        <div className={cn({ [styles.icons]: true })}>
                            <a
                                className={cn({ [styles.icon]: true })}
                                itemProp="sameAs"
                                href="https://www.instagram.com/tavridamedia"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={inst}
                                    width={socialIconSize}
                                    height={socialIconSize}
                                />
                            </a>
                            <a
                                className={cn({ [styles.icon]: true })}
                                itemProp="sameAs"
                                href="https://vk.com/tavrida.media"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={vk}
                                    width={socialIconSize}
                                    height={socialIconSize}
                                />
                            </a>
                            <a
                                className={cn({ [styles.icon]: true })}
                                itemProp="sameAs"
                                href="https://vk.com/tavrida.media"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={gl}
                                    width={socialIconSize}
                                    height={socialIconSize}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SuperFooter;
