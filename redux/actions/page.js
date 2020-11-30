export const PAGE_SET_IS_ORDER_IN_VIEWPORT = 'PAGE_SET_IS_ORDER_IN_VIEWPORT';
export const PAGE_SET_RECAPTCHA_TOKEN = 'PAGE_SET_RECAPTCHA_TOKEN';

export const pageSetIsOrderInViewport = (val) => ({
    type: PAGE_SET_IS_ORDER_IN_VIEWPORT,
    payload: val,
});

export const pageSetRecaptchaToken = (val) => ({
    type: PAGE_SET_RECAPTCHA_TOKEN,
    payload: val,
});
