import { HYDRATE } from 'next-redux-wrapper';
import {
    SERVICE_TYPE_SET,
    SERVICE_SUBTYPE_SET,
} from '../actions/serviceType';
import reduce from './reduce';

import { services as outdoorSubTypes } from '../../pages/uslugi/outdoor';
import { services as polygraphySubTypes } from '../../pages/uslugi/polygraphy';
import { services as suvenirkaSubTypes } from '../../pages/uslugi/suvenirka';

const subtypes = {
    outdoor: outdoorSubTypes.map((service) => ({ slug: service.slug, name: service.name })),
    polygraphy: polygraphySubTypes.map((service) => ({ slug: service.slug, name: service.name })),
    suvenirka: suvenirkaSubTypes.map((service) => ({ slug: service.slug, name: service.name })),
};

const initialState = {
    type: 'outdoor',
    subtypes: subtypes.outdoor,
    subtype: subtypes.outdoor[0],
};

const reducer = reduce({
    [HYDRATE]: (state, payload) => payload.serviceType,
    [SERVICE_TYPE_SET]: (state, payload) => ({
        ...state,
        type: payload,
        subtypes: subtypes[payload] || null,
        subtype: (subtypes[payload] && subtypes[payload][0]) || null,
    }),
    [SERVICE_SUBTYPE_SET]: (state, payload) => ({
        ...state,
        subtype: payload,
    }),
}, initialState);

export default reducer;
