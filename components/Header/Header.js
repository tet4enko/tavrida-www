import React, { Component } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import styles from './Header.module.scss';

import logo from './pics/Logo_Shapka.png';
import phone from './pics/Тел.png';
import mail from './pics/мыло.png';

import logoWhite from './pics/Logo_Shapka_white.png';
import phoneWhite from './pics/Тел2.png';
import mailWhite from './pics/мыло2.png';

const uslugi = [
    {
        href: 'outdoor',
        text: 'Наружная реклама',
        color: 'orange',
    },
    {
        href: 'polygraphy',
        text: 'Полиграфия',
        color: 'blue',
    },
    {
        href: 'suvenirka',
        text: 'Сувенирная продукция',
        color: 'yellow',
    },
    {
        href: 'cleaning',
        text: 'Клининг рекламных конструкций',
        color: 'orange',
    },
    {
        href: 'smm',
        text: 'SMM и таргетинг',
        color: 'blue',
    },
    {
        href: 'web',
        text: 'Разработка сайтов',
        color: 'yellow',
    },
    {
        href: 'design',
        text: 'Дизайн',
        color: 'orange',
    },
];

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            servicesOpened: false,
            servicesHovered: false,
            servicesPopupHovered: false,
        };
    }

    onServivesMouseOver() {
        this.setState({ servicesHovered: true, servicesOpened: true });
    }

    onServivesMouseOut() {
        this.setState({
            servicesHovered: false,
            servicesOpened: this.state.servicesPopupHovered,
        });
    }

    onServivesPopupMouseOver() {
        this.setState({ servicesPopupHovered: true, servicesOpened: true });
    }

    onServivesPopupMouseOut() {
        this.setState({
            servicesPopupHovered: false,
            servicesOpened: this.state.servicesHovered,
        });
    }

    render() {
        return (
            <div
                className={cn({
                    [styles.Header]: true,
                    [styles.general]: this.props.general,
                })}
                itemScope
                itemType="http://schema.org/LocalBusiness"
                itemRef="social-links"
            >
                <div
                    className={cn({
                        [styles['header-content']]: true,
                        'page-content': true,
                    })}
                >
                    <a
                        href="/"
                        itemProp="url"
                        className={cn({ [styles.left]: true })}
                    >
                        <img
                            itemProp="logo"
                            src={this.props.general ? logo : logoWhite}
                            width="60px"
                            height="60px"
                        />
                        <div className={cn({ [styles.label]: true })}>
                            <div className={cn({ [styles.top]: true })}>
                                ТАВРИДА МЕДИА
                            </div>
                            <div className={cn({ [styles.bottom]: true })}>
                                РЕКЛАМНОЕ АГЕНСТВО
                            </div>
                        </div>
                    </a>
                    <div className={cn({ [styles.menu]: true })}>
                        <span
                            className={cn({
                                [styles.item]: true,
                                [styles.uslugi]: true,
                                [styles.opened]: this.state.servicesOpened,
                            })}
                        >
                            <span
                                className={cn({ [styles.label]: true })}
                                onMouseOver={() => this.onServivesMouseOver()}
                                onMouseOut={() => this.onServivesMouseOut()}
                            >
                                Услуги
                            </span>
                            <div
                                className={cn({ [styles.popup]: true })}
                                onMouseOver={() => this.onServivesPopupMouseOver()}
                                onMouseOut={() => this.onServivesPopupMouseOut()}
                            >
                                {uslugi.map((item, i) => (
                                    <Link href={`/uslugi/${item.href}`} key={i}>
                                        <a
                                            className={cn({
                                                [styles['menu-item']]: true,
                                            })}
                                            onClick={() => this.setState({ servicesOpened: false })}
                                        >
                                            <span
                                                className={cn({
                                                    [styles.point]: true,
                                                    [styles[item.color]]: true,
                                                })}
                                            />
                                            {item.text}
                                        </a>
                                    </Link>
                                ))}
                            </div>
                        </span>
                        <span
                            className={cn({
                                [styles.item]: true,
                            })}
                        >
                            Цены
                        </span>
                        <Link href="/projects">
                            <a
                                className={cn({
                                    [styles.item]: true,
                                })}
                            >
                                Проекты
                            </a>
                        </Link>
                        <span
                            className={cn({
                                [styles.item]: true,
                            })}
                        >
                            О нас
                        </span>
                    </div>
                    <div
                        className={cn({
                            [styles.right]: true,
                        })}
                    >
                        <a
                            className={cn({
                                [styles.phone]: true,
                            })}
                            itemProp="telephone"
                            href="tel:+79780790979 "
                        >
                            <img
                                src={this.props.general ? phone : phoneWhite}
                            />
                        </a>
                        <a
                            className={cn({
                                [styles.email]: true,
                            })}
                            itemProp="email"
                            target="_blank"
                            href="mailto:tavrida.media@mail.ru"
                        >
                            <img
                                src={this.props.general ? mail : mailWhite}
                            />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
