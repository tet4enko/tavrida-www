import React, { Component } from 'react';
import cn from 'classnames';
import styles from './ServicesGrid.module.scss';

import i1 from './img/1.png';
import i2 from './img/2.png';
import i3 from './img/3.png';
import i4 from './img/4.png';
import i5 from './img/5.png';
import i6 from './img/6.png';
import i7 from './img/7.png';

import h1 from './img/hover/1.png';
import h2 from './img/hover/2.png';
import h3 from './img/hover/3.png';
import h4 from './img/hover/4.png';
import h5 from './img/hover/5.png';
import h6 from './img/hover/6.png';
import h7 from './img/hover/7.png';

const images = [i1, i2, i3, i4, i5, i6, i7];

const hoveredImages = [h1, h2, h3, h4, h5, h6, h7];

const line1 = [
    { label: 'НАРУЖНАЯ РЕКЛАМА', color: 'orange', img: 1 },
    { label: 'ПОЛИГРАФИЯ', color: 'blue', img: 2 },
    { label: 'СУВЕРИНРНАЯ ПРОДУКЦИЯ', color: 'yellow', img: 3 },
    { label: 'КЛИНИНГ РЕКЛАМНЫХ КОНСТРУКЦИЙ', color: 'orange', img: 4 },
];

const line2 = [
    { label: 'SMM и МАРКЕТИНГ', color: 'blue', img: 5 },
    { label: 'РАЗРАБОТКА САЙТОВ', color: 'yellow', img: 6 },
    { label: 'ДИЗАЙН', color: 'orange', img: 7 },
];

class ServicesGrid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hovered: null,
        };
    }

    render() {
        const _self = this;

        const gridItem = (data, i) => (
            <div
                key={i}
                className={cn({ [styles.item]: true })}
                onMouseOver={() => _self.setState({ hovered: data.img })}
                onMouseOut={() => _self.setState({ hovered: null })}
            >
                <img
                    src={
                        _self.state.hovered === data.img
                            ? hoveredImages[data.img - 1]
                            : images[data.img - 1]
                    }
                />
                <div className={cn({ [styles.label]: true })}>
                    <span className={cn({ [styles.point]: true, [styles[data.color]]: true })} />
                    {data.label}
                </div>
            </div>
        );

        return (
            <div
                className={cn({
                    [styles.ServicesGrid]: true,
                    section: true,
                    'page-content': true,
                })}
            >
                <div className={cn({ 'general-header': true })}>
                    УСЛУГИ НАШЕГО РЕКЛАМНОГО АГЕНТСТВА
                </div>
                <div className={cn({ [styles.lines]: true })}>
                    <div className={cn({ [styles.line]: true })}>
                        {line1.map(gridItem)}
                    </div>
                    <div className={cn({ [styles.line]: true })}>
                        {line2.map(gridItem)}
                    </div>
                </div>
            </div>
        );
    }
}

export default ServicesGrid;
