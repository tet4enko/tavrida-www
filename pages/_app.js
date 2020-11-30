/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// import App from 'next/app';

import './_app.scss';

import wrapper from '../redux/store';

import '../node_modules/react-image-gallery/styles/scss/image-gallery.scss';

import Header from '../components/Header/Header';
import SuperFooter from '../components/SuperFooter/SuperFooter';
import GoTop from '../components/GoTop';
import GoPhone from '../components/GoPhone';
import Recaptcha from '../components/Recaptcha/Recaptcha';

// export default class MyApp extends App
const MyApp = ({ Component, pageProps, router }) => (
    <>
        <Header general={router.route === '/'} />
        <Component {...pageProps} />
        <SuperFooter />
        <GoTop />
        <GoPhone />
        <Recaptcha />
    </>
);

// ctx.store.dispatch({ type: 'CALLBACK_SET_OPENED', payload: true });

MyApp.getInitialProps = async ({ Component, ctx }) => ({
    pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
        // Some custom thing for all pages
        pathname: ctx.pathname,
    },
});

export default wrapper.withRedux(MyApp);
