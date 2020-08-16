import React, { useState } from 'react';
import jQuery from 'jquery';
import cn from 'classnames';

import { TextField } from '@material-ui/core';
import MainDialog from '../MainDialog/MainDialog';

import styles from './Zamer.module.scss';

import zamerPic from './Замер.png';

export default () => {
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [isOpened, setIsOpened] = useState(false);
    const [isProgress, setIsProgress] = useState(false);

    const onClose = () => {
        setIsProgress(false);
        setIsOpened(false);
        setPhone('');
        setName('');
    };

    const onSubmit = (e) => {
        e.preventDefault();

        setIsProgress(true);
        const data = new FormData(e.target);

        jQuery.ajax({
            url: '/api/callback?zamer',
            data,
            cache: false,
            processData: false,
            contentType: false,
            type: 'POST',
            success: () => {
                alert('Спасибо за заявку!\nМы свяжемся с Вами в ближайшее время.');
                onClose();
            },
            error: () => {
                const message = 'Ошибка при отправке запроса.\nПопробуйте еще раз, пожалуйста.';
                alert(message);
            },
            complete: () => {
                setIsProgress(false);
            },
        });
    };

    return (
        <div className={`${cn({ [styles.Zamer]: true })} section`}>
            <div className={cn({ [styles.top]: true })}>
                <div className={cn({ [styles.left]: true })}>
                    <h2 className={cn({ [styles.caption1]: true })}>
                        Нужна наружная реклама?
                    </h2>
                    <span className={cn({ [styles.caption2]: true })}>
                        <sup>*</sup>
                        Закажи
                        <b>бесплатный</b>
                        {' '}
                        вызов замерщика
                    </span>
                    <br />
                    <button
                        type="button"
                        className={cn({ [styles.call]: true })}
                        onClick={() => setIsOpened(true)}
                    >
                        ВЫЗВАТЬ БЕСПЛАТНО
                    </button>
                </div>
                <img
                    src={zamerPic}
                    className={cn({ [styles['call-pic']]: true })}
                    height="350px"
                />
            </div>
            <span className={cn({ [styles.ogovorka]: true })}>
                <sup>*</sup>
                Бесплатный вызов только по г. Симферополь
            </span>
            <MainDialog
                isOpened={isOpened}
                onClose={onClose}
                title="Хотите вызвать замерщика?"
                className={cn({ [styles.dialog]: true })}
            >
                <form autoComplete="on" onSubmit={onSubmit}>
                    <TextField
                        required
                        inputProps={{ type: 'tel' }}
                        size="medium"
                        name="phone"
                        classes={{
                            root: cn({
                                white: true,
                                [styles.input]: true,
                            }),
                        }}
                        className={cn({ 'main-dialog-input': true })}
                        placeholder="Ваш номер телефона"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <TextField
                        required
                        name="name"
                        classes={{
                            root: cn({
                                white: true,
                                [styles.input]: true,
                            }),
                        }}
                        className={cn({ 'main-dialog-input': true })}
                        placeholder="Как к Вам можно обращаться?"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        required
                        name="comment"
                        classes={{
                            root: cn({
                                white: true,
                                [styles.input]: true,
                            }),
                        }}
                        className={cn({ 'main-dialog-input': true })}
                        placeholder="Комментарий"
                        multiline
                        rows={5}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <button
                        className={cn({
                            yellow: true,
                            [styles.button]: true,
                            progress: isProgress,
                        })}
                        type="submit"
                    >
                        Перезвоните мне
                    </button>
                </form>
                <span className={cn({ [styles.polytics]: true })}>
                    Нажимая на кнопку, я даю согласие на обработку персональных данных и соглашаюсь с
                    &nbsp;
                    <a href="/polytics" target="_blank">политикой конфиденциальности</a>
                    .
                </span>
            </MainDialog>
        </div>
    );
};
