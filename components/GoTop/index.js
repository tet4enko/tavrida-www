import React, { useState, useEffect } from 'react';
import jQuery from 'jquery';
import cn from 'classnames';
import { throttle } from 'lodash';

import styles from './index.module.scss';

import day from './pics/ВверхДень.png';
import night from './pics/ВверхНочь.png';

export default () => {
    const [isVisile, setVisibility] = useState(false);

    useEffect(() => {
        jQuery(window.document).on('scroll', throttle(() => {
            setVisibility(window.scrollY > window.innerHeight);
        }, 200));
    }, []);

    return (
        <img
            className={cn({ [styles.GoTop]: true, [styles.visible]: isVisile })}
            src={day}
            onClick={() => jQuery('html, body').animate({ scrollTop: 0 }, 500)}
        />
    );
};
