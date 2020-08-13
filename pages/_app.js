/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
// import App from 'next/app';

import './_app.scss';

import '../node_modules/react-image-gallery/styles/scss/image-gallery.scss';

import Header from '../components/Header/Header';
import SuperFooter from '../components/SuperFooter/SuperFooter';
import GoTop from '../components/GoTop';
import GoPhone from '../components/GoPhone';

// export default class MyApp extends App

export default ({ Component, pageProps, router }) => {
    const [isCallbackOpened, setCallbackOpened] = useState(false);
    const [isCallbackProgress, setCallbackProgress] = useState(false);
    const [callbackPhone, setCallbackPhone] = useState('');
    const [callbackName, setCallbackName] = useState('');

    const onSuccessCallbackSubmit = () => {
        setCallbackOpened(false);
        setCallbackPhone('');
        setCallbackName('');
    };

    return (
        <>
            <Header general={router.route === '/'} />
            <Component {...pageProps} />
            <SuperFooter onCallbackClick={() => {
                setCallbackOpened(true);
                setCallbackPhone('');
                setCallbackName('');
            }}
            />
            <GoTop />
            <GoPhone
                isOpened={isCallbackOpened}
                isProgress={isCallbackProgress}
                setOpened={setCallbackOpened}
                setProgress={setCallbackProgress}
                name={callbackName}
                setName={setCallbackName}
                phone={callbackPhone}
                setPhone={setCallbackPhone}
                onSuccessSubmit={onSuccessCallbackSubmit}
            />
        </>
    );
};
