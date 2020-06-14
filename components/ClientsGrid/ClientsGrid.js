import React, { Component } from 'react';
import cn from 'classnames';
import styles from './ClientsGrid.module.scss';

import i1 from './pics/1.jpg';
import i2 from './pics/2.jpg';
import i3 from './pics/3.jpg';
import i4 from './pics/4.jpg';
import i5 from './pics/5.jpg';
import i6 from './pics/6.jpg';
import i7 from './pics/7.jpg';
import i8 from './pics/8.jpg';
import i9 from './pics/9.jpg';
import i10 from './pics/10.jpg';
import i11 from './pics/11.jpg';
import i12 from './pics/12.jpg';
import i13 from './pics/13.jpg';
import i14 from './pics/14.jpg';

const clients1 = [i1, i2, i3, i4, i5, i6, i7];
const clients2 = [i8, i9, i10, i11, i12, i13, i14];

class ClientsGrid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            top: 5,
            bottom: 6,
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.move();
        }, 10000);

        setTimeout(() => {
            this.move();
        }, 0);
    }

    move() {
        this.setState({
            top: this.getIndex(this.state.top, 'right'),
            bottom: this.getIndex(this.state.bottom, 'left'),
        });
    }

    getIndex(current, side = 'left', double = false) {
        const count = double ? 2 : 1;
        let result = side === 'left' ? current - count : current + count;

        switch (result) {
        case -1:
            result = clients1.length - 1;
            break;
        case -2:
            result = clients1.length - 2;
            break;
        case clients1.length:
            result = 0;
            break;
        case clients1.length + 1:
            result = 1;
            break;
        }

        return result;
    }

    render() {
        const self = this;
        return (
            <div
                className={cn({
                    [styles.ClientsGrid]: true,
                    section: true,
                    [this.props.className]: true,
                })}
            >
                <div
                    className={cn({
                        'general-header': true,
                        [this.props.headerCls]: true,
                    })}
                >
                    НАШИ ПРОЕКТЫ
                </div>
                <div className={cn({ [styles.wrapper]: true })}>
                    {clients1.map((client, index) => (
                        <img
                            key={index}
                            className={cn({
                                [styles.client]: true,
                                [styles.center]: index === self.state.top,
                                [styles.left]: index === self.getIndex(self.state.top, 'left'),
                                [styles.right]: index === self.getIndex(self.state.top, 'right'),
                                [styles.superleft]: index === self.getIndex(self.state.top, 'left', true),
                                [styles.superright]: index === self.getIndex(self.state.top, 'right', true),
                            })}
                            src={client}
                        />
                    ))}
                </div>
                <div className={cn({ [styles.wrapper]: true })}>
                    {clients2.map((client, index) => (
                        <img
                            key={index}
                            className={cn({
                                [styles.client]: true,
                                [styles.center]: index === self.state.bottom,
                                [styles.left]: index === self.getIndex(self.state.bottom, 'left'),
                                [styles.right]: index === self.getIndex(self.state.bottom, 'right'),
                                [styles.superleft]: index === self.getIndex(self.state.bottom, 'left', true),
                                [styles.superright]: index === self.getIndex(self.state.bottom, 'right', true),
                            })}
                            src={client}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default ClientsGrid;
