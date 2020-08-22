export const SERVICE_TYPE_SET = 'SERVICE_TYPE_SET';
export const SERVICE_SUBTYPE_SET = 'SERVICE_SUBTYPE_SET';

export const serviceTypeSet = (val) => ({
    type: SERVICE_TYPE_SET,
    payload: val,
});

export const serviceSubtypeSet = (val) => ({
    type: SERVICE_SUBTYPE_SET,
    payload: val,
});
