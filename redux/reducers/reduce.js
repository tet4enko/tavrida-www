export default (reducers, initState) => (state = initState, action) => {
    const { type } = action;

    if (typeof reducers[type] === 'function') {
        return reducers[type](state, action.payload);
    }

    return state;
};
