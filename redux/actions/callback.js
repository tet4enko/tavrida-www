export const CALLBACK_SET_OPENED = 'CALLBACK_SET_OPENED';
export const CALLBACK_SET_PROGRESS = 'CALLBACK_SET_PROGRESS';
export const CALLBACK_SET_NAME = 'CALLBACK_SET_NAME';
export const CALLBACK_SET_PHONE = 'CALLBACK_SET_PHONE';
export const CALLBACK_RESET = 'CALLBACK_RESET';

export const callbackSetOpened = (val) => ({
    type: CALLBACK_SET_OPENED,
    payload: val,
});

export const callbackSetProgress = (val) => ({
    type: CALLBACK_SET_PROGRESS,
    payload: val,
});

export const callbackSetName = (val) => ({
    type: CALLBACK_SET_NAME,
    payload: val,
});

export const callbackSetPhone = (val) => ({
    type: CALLBACK_SET_PHONE,
    payload: val,
});

export const callbackReset = () => ({
    type: CALLBACK_RESET,
});
