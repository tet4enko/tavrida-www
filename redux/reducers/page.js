import { HYDRATE } from 'next-redux-wrapper';
import {
    PAGE_SET_IS_ORDER_IN_VIEWPORT,
    PAGE_SET_RECAPTCHA_TOKEN,
} from '../actions/page';
import reduce from './reduce';

const initialState = {
    isOrderInViewport: false,
    recaptchaToken: null,
};

const reducer = reduce({
    [HYDRATE]: (state, payload) => ({ ...state, ...payload.page }),
    [PAGE_SET_IS_ORDER_IN_VIEWPORT]: (state, payload) => ({ ...state, isOrderInViewport: payload }),
    [PAGE_SET_RECAPTCHA_TOKEN]: (state, payload) => ({ ...state, recaptchaToken: payload }),
}, initialState);

export default reducer;
