import { combineReducers } from 'redux';

import callback from './callback';
import serviceType from './serviceType';
import page from './page';

export default combineReducers({
    callback,
    serviceType,
    page,
});
