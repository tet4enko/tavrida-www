import React, { Component } from 'react';
import cn from 'classnames';
import styles from './ProductsSlider.module.scss';

import Toggle from '../Toggle';

import { services as outdoorServices } from '../../pages/uslugi/outdoor';
import { services as polygraphyServices } from '../../pages/uslugi/polygraphy';
import { services as suvenirkaServices } from '../../pages/uslugi/suvenirka';

const services = [];

for (let i = 0; i < 6; i += 1) {
    services.push({ clusterSlug: 'outdoor', ...outdoorServices[i] });
    services.push({ clusterSlug: 'polygraphy', ...polygraphyServices[i] });
    services.push({ clusterSlug: 'suvenirka', ...suvenirkaServices[i] });
}

class ProductsSlider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
        };
    }

    componentDidMount() {
        this.srartInterval();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getLeft(index, diff) {
        let result = index - diff;

        if (result < 0) {
            result = services.length + result;
        }

        return result;
    }

    getRight(index, diff) {
        let result = index + diff;

        if (result >= services.length) {
            result -= services.length;
        }

        return result;
    }

    srartInterval(side) {
        if (this.interval) {
            clearInterval(this.interval);
        }

        if (side === 'left') {
            this.interval = setInterval(this.goLeft.bind(this), 2000);
        } else {
            this.interval = setInterval(this.goRight.bind(this), 2000);
        }
    }

    goLeft() {
        this.setState((prevState) => ({
            index: this.getLeft(prevState.index, 1),
        }));

        this.srartInterval('left');
    }

    goRight() {
        this.setState((prevState) => ({
            index: this.getRight(prevState.index, 1),
        }));

        this.srartInterval('right');
    }

    render() {
        const { index: state } = this.state;
        const { label, textColor } = this.props;
        const self = this;

        return (
            <div className={`${cn({ [styles.ProductsSlider]: true })} section`}>
                <div className="general-header">{label || ''}</div>
                <div className={cn({ [styles.services]: true })}>
                    {services.map((service, index) => {
                        let cls = cn({ [styles.service]: true });
                        if (state === self.getLeft(index, 2)) {
                            cls = cn(
                                cls,
                                cn({
                                    [styles.postright]: true,
                                    [styles.visible]: true,
                                }),
                            );
                        }
                        if (state === self.getLeft(index, 1)) {
                            cls = cn(
                                cls,
                                cn({
                                    [styles.right]: true,
                                    [styles.visible]: true,
                                }),
                            );
                        }
                        if (state === index) {
                            cls = cn(
                                cls,
                                cn({
                                    [styles.center]: true,
                                    [styles.visible]: true,
                                }),
                            );
                        }
                        if (state === self.getRight(index, 1)) {
                            cls = cn(
                                cls,
                                cn({
                                    [styles.left]: true,
                                    [styles.visible]: true,
                                }),
                            );
                        }
                        if (state === self.getRight(index, 2)) {
                            cls = cn(
                                cls,
                                cn({
                                    [styles.preleft]: true,
                                    [styles.visible]: true,
                                }),
                            );
                        }

                        const href = `/uslugi/${service.clusterSlug}#${service.slug}`;

                        return (
                            <a href={href} className={cls} key={index}>
                                <img src={service.pic} />
                                <span
                                    className={cn({ [styles.name]: true })}
                                    style={{
                                        color:
                                            textColor
                                            || 'var(--main-header-color)',
                                    }}
                                >
                                    {service.name.toUpperCase()}
                                </span>
                            </a>
                        );
                    })}
                </div>
                <div className={cn({ [styles.toggles]: true })}>
                    <Toggle
                        side="left"
                        onClick={() => this.goLeft()}
                    />
                    <Toggle
                        side="right"
                        onClick={() => this.goRight()}
                    />
                </div>
            </div>
        );
    }
}

export default ProductsSlider;
