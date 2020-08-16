import { HYDRATE } from 'next-redux-wrapper';
import {
    CALLBACK_SET_OPENED,
    CALLBACK_SET_NAME,
    CALLBACK_SET_PHONE,
    CALLBACK_SET_PROGRESS,
    CALLBACK_RESET,
} from '../actions/callback';
import reduce from './reduce';

const initialState = {
    isOpened: false,
    isProgress: false,
    name: '',
    phone: '',
};

const reducer = reduce({
    [HYDRATE]: (state, payload) => ({ ...state, ...payload.callback }),
    [CALLBACK_SET_OPENED]: (state, payload) => ({ ...state, isOpened: payload }),
    [CALLBACK_SET_NAME]: (state, payload) => ({ ...state, name: payload }),
    [CALLBACK_SET_PHONE]: (state, payload) => ({ ...state, phone: payload }),
    [CALLBACK_SET_PROGRESS]: (state, payload) => ({ ...state, isProgress: payload }),
    [CALLBACK_RESET]: (state) => ({ ...state, ...initialState }),
}, initialState);

export default reducer;
