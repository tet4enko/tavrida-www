import React, { useState } from 'react';
import jQuery from 'jquery';
import cn from 'classnames';

import { TextField } from '@material-ui/core';
import MainDialog from '../MainDialog/MainDialog';

import styles from './index.module.scss';

import day from './pics/ТелефонДень.png';
// import night from './pics/ТелефонНочь.png';

export default () => {
    const [isOpened, setOpened] = useState(false);
    const [isProgress, setProgress] = useState(false);
    const onClose = () => setOpened(false);

    const onSubmit = (e) => {
        e.preventDefault();

        setProgress(true);
        const data = new FormData(e.target);

        jQuery.ajax({
            url: '/api/callback',
            data,
            cache: false,
            processData: false,
            contentType: false,
            type: 'POST',
            success: () => {
                alert('Спасибо за заказ!\nМы свяжемся с Вами в ближайшее время.');
            },
            error: () => {
                const message = 'Ошибка при отправке запроса.\nПопробуйте еще раз, пожалуйста.';
                alert(message);
            },
            complete: () => {
                setProgress(false);
            },
        });
    };

    return (
        <>
            <img
                className={cn({ [styles.GoPhone]: true })}
                onClick={() => setOpened(true)}
                src={day}
            />
            <MainDialog
                isOpened={isOpened}
                onClose={onClose}
                title="Хотите, чтобы мы перезвонили Вам?"
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
        </>
    );
};
