import React from 'react';
import cn from 'classnames';

import styles from './index.module.scss';

import day from './pics/ТелефонДень.png';
import night from './pics/ТелефонНочь.png';

export default () => (
    <img
        className={cn({ [styles.GoPhone]: true })}
        src={day}
    />
);
