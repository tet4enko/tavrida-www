import { createStore } from 'redux';
import { createWrapper } from 'next-redux-wrapper';

import reducer from './reducers';

const makeStore = () => createStore(reducer);

const wrapper = createWrapper(makeStore, { /* debug: true */ });

export default wrapper;
