/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
import React, { Component } from 'react';
import jQuery from 'jquery';
import { connect } from 'react-redux';
import cn from 'classnames';
import {
    FormControl, FormControlLabel, TextField, Select, InputLabel, Button, Checkbox,
} from '@material-ui/core';
import styles from './SuperFooter.module.scss';

import MainDialog from '../MainDialog/MainDialog';

import { callbackSetOpened as callbackSetOpenedAction } from '../../redux/actions/callback';
import {
    serviceTypeSet as serviceTypeSetAction,
    serviceSubtypeSet as serviceSubtypeSetAction,
} from '../../redux/actions/serviceType';
import { pageSetIsOrderInViewport as pageSetIsOrderInViewportAction } from '../../redux/actions/page';

import tel from './pics/Телефон.png';
import car from './pics/Машина.png';
import design from './pics/Дизайнер.png';

import vk from './pics/vk.png';
import inst from './pics/inst.png';
import gl from './pics/gl.png';

import mail from './pics/Почта.png';
import time from './pics/Часы.png';

import tarelka from './pics/Тарелка.png';

import samolet from './pics/Саломет.png';

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

class SuperFooter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            agree: false,
            file: null,
            orderProgress: false,

            subscribeIsOpen: false,
            subscribeIsProgress: false,
            subscribeMail: '',
        };

        this.myRef = React.createRef();
        this.name = React.createRef();

        this.bindedSubmitOrder = this.submitOrder.bind(this);
        this.bindedSubmitSubscribe = this.submitSubscribe.bind(this);
        this.bindedCloseSubscribe = this.closeSubscribe.bind(this);
    }

    componentDidUpdate(prevProps) {
        const { isOrderInViewport, pageSetIsOrderInViewport } = this.props;
        if (isOrderInViewport && !prevProps.isOrderInViewport) {
            jQuery('html, body').animate({
                scrollTop: this.myRef.current.offsetTop,
            }, 700);

            setTimeout(() => {
                jQuery(this.name.current).focus();
                jQuery(document).one('scroll', () => {
                    pageSetIsOrderInViewport(false);
                });
            }, 700);
        }
    }

    closeSubscribe() {
        this.setState({
            subscribeIsOpen: false,
            subscribeIsProgress: false,
            subscribeMail: '',
        });
    }

    submitSubscribe(e) {
        e.preventDefault();

        this.setState({ subscribeIsProgress: true });
        const data = new FormData(e.target);

        jQuery.ajax({
            url: '/api/callback?mail',
            data,
            cache: false,
            processData: false,
            contentType: false,
            type: 'POST',
            success: () => {
                alert('Спасибо за подписку!\nЖдите новостей :)');
                this.bindedCloseSubscribe();
            },
            error: () => {
                const message = 'Ошибка при отправке запроса.\nПопробуйте еще раз, пожалуйста.';
                alert(message);
            },
            complete: () => {
                this.setState({ subscribeIsProgress: false });
            },
        });
    }

    submitOrder(e) {
        e.preventDefault();

        this.setState({ orderProgress: true });

        const data = new FormData(e.target);

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
    }

    render() {
        const {
            agree, file, orderProgress,
            subscribeIsOpen, subscribeIsProgress, subscribeMail,
        } = this.state;

        const {
            callbackSetOpened,

            serviceTypeSet,
            serviceType,
            serviceSubtypeSet,
            serviceSubtype,
            serviceSubtypes,
        } = this.props;

        return (
            <div className={cn({ [styles.SuperFooter]: true })} ref={this.myRef}>
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
                        <form autoComplete="on" onSubmit={this.bindedSubmitOrder}>
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
                                    inputRef={this.name}
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
                                    value={serviceType}
                                    onChange={(e) => serviceTypeSet(e.target.value)}
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
                                    <option value="outdoor">Наружная реклама</option>
                                    <option value="polygraphy">Полиграфия</option>
                                    <option value="suvenirka">Сувенирная продукция</option>
                                    <option value="cleaning">Клининг</option>
                                    <option value="smm">SMM и маркетинг</option>
                                    <option value="web">Разработка сайтов</option>
                                    <option value="design">Дизайн</option>
                                </Select>
                            </FormControl>
                            {serviceSubtypes
                            && (
                                <FormControl fullWidth className={cn({ [styles.control]: true })}>
                                    <InputLabel
                                        classes={{
                                            root: cn({
                                                white: true,
                                            }),
                                        }}
                                    >
                                        Что именно вас интересует?
                                    </InputLabel>
                                    <Select
                                        native
                                        value={serviceSubtype}
                                        onChange={(e) => serviceSubtypeSet(e.target.value)}
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
                                        {serviceSubtypes.map((item) => (
                                            <option value={item.slug}>{item.name}</option>
                                        ))}
                                    </Select>
                                </FormControl>
                            )}
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
                            <FormControl fullWidth className={cn({ [styles.control]: true, [styles.agree]: true })}>
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
                        <div>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="mailto:tavrida.media@mail.ru"
                            >
                                <span>tavrida.media@mail.ru</span>
                            </a>
                            <div
                                className={cn({ [styles.subscription]: true })}
                                onClick={() => this.setState({ subscribeIsOpen: true })}
                                role="button"
                            >
                                Подписаться на рассылку
                            </div>
                        </div>
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
                            onClick={() => callbackSetOpened(true)}
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
                <MainDialog
                    isOpened={subscribeIsOpen}
                    onClose={this.bindedCloseSubscribe}
                    className={cn({ [styles.dialog]: true })}
                    paperClassName={cn({ [styles.paper]: true })}
                >
                    <div className={cn({ [styles.wrapper]: true })}>
                        <form autoComplete="on" onSubmit={this.bindedSubmitSubscribe} className={cn({ [styles.form]: true })}>
                            <div className={cn({ [styles.subtypeText]: true })}>
                                Разрешите нам присылать Вам
                                <br />
                                всю информацию о новых
                                <br />
                                акциях, актуальных ценах и
                                <br />
                                свежих статьях?
                            </div>
                            <TextField
                                required
                                inputProps={{ type: 'email' }}
                                size="medium"
                                name="mail"
                                classes={{
                                    root: cn({
                                        white: true,
                                        [styles.input]: true,
                                    }),
                                }}
                                className={cn({ 'main-dialog-input': true })}
                                placeholder="Ваш email"
                                value={subscribeMail}
                                onChange={(e) => this.setState({ subscribeMail: e.target.value })}
                            />
                            <button
                                className={cn({
                                    yellow: true,
                                    [styles.button]: true,
                                    progress: subscribeIsProgress,
                                })}
                                type="submit"
                            >
                                Подписаться
                            </button>
                        </form>
                        <img src={samolet} className={cn({ [styles.samolet]: true })} />
                    </div>
                    <span className={cn({ [styles.polytics]: true })}>
                        Нажимая на кнопку, я даю согласие на обработку персональных данных и соглашаюсь с
                        &nbsp;
                        <a href="/polytics" target="_blank">политикой конфиденциальности</a>
                        .
                    </span>
                </MainDialog>
            </div>
        );
    }
}

export default connect((state) => ({
    serviceType: state.serviceType.type,
    serviceSubtype: state.serviceType.subtype,
    serviceSubtypes: state.serviceType.subtypes,
    isOrderInViewport: state.page.isOrderInViewport,
}), {
    callbackSetOpened: callbackSetOpenedAction,
    serviceTypeSet: serviceTypeSetAction,
    serviceSubtypeSet: serviceSubtypeSetAction,
    pageSetIsOrderInViewport: pageSetIsOrderInViewportAction,
})(SuperFooter);
