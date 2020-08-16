import { HYDRATE } from 'next-redux-wrapper';
import {
    PAGE_SET_IS_ORDER_IN_VIEWPORT,
} from '../actions/page';
import reduce from './reduce';

const initialState = {
    isOrderInViewport: false,
};

const reducer = reduce({
    [HYDRATE]: (state, payload) => ({ ...state, ...payload.page }),
    [PAGE_SET_IS_ORDER_IN_VIEWPORT]: (state, payload) => ({ ...state, isOrderInViewport: payload }),
}, initialState);

export default reducer;
