/* global grecaptcha */
import React from 'react';
import { connect } from 'react-redux';

import { pageSetRecaptchaToken as pageSetRecaptchaTokenAction } from '../../redux/actions/page';

const RECAPTCHA_TOKEN = '6LetzvMZAAAAAG8PUtBCxvat2Husxb-lFSHtRaJv';

const component = ({
    pageSetRecaptchaToken,
}) => {
    React.useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_TOKEN}`;
        script.onload = () => {
            grecaptcha.ready(() => {
                grecaptcha.execute(RECAPTCHA_TOKEN, { action: 'demo' })
                    .then((token) => {
                        pageSetRecaptchaToken(token);
                    });
            });
        };
        document.body.appendChild(script);
    }, []);

    return null;
};

export default connect(null, {
    pageSetRecaptchaToken: pageSetRecaptchaTokenAction,
})(component);
