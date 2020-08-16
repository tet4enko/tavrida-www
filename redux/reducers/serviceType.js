import { HYDRATE } from 'next-redux-wrapper';
import {
    SERVICE_TYPE_SET,
} from '../actions/serviceType';
import reduce from './reduce';

const initialState = 'outdoor';

const reducer = reduce({
    [HYDRATE]: (state, payload) => payload.serviceType,
    [SERVICE_TYPE_SET]: (state, payload) => payload,
}, initialState);

export default reducer;
