import React, { Component } from 'react';
import PageVisibility from 'react-page-visibility';
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

import ProjectDialog from '../ProjectDialog/ProjectDialog';
import { projects } from '../../pages/projects';

const clients1 = [
    {
        slug: 'liga',
        pic: i1,
    },
    {
        slug: 'fresh',
        pic: i2,
    },
    {
        slug: 'fresh',
        pic: i3,
    },
    {
        slug: 'gavno',
        pic: i4,
    },
    {
        slug: 'ht',
        pic: i5,
    },
    {
        slug: 'ht',
        pic: i6,
    },
    {
        slug: 'liga',
        pic: i7,
    },
].map((item) => Object.assign(item, projects.find((a) => a.slug === item.slug)));

const clients2 = [
    {
        slug: 'fresh',
        pic: i8,
    },
    {
        slug: 'vanil',
        pic: i9,
    },
    {
        slug: 'testo',
        pic: i10,
    },
    {
        slug: 'kkm',
        pic: i11,
    },
    {
        slug: 'gavno',
        pic: i12,
    },
    {
        slug: 'kkm',
        pic: i13,
    },
    {
        slug: 'zoloto',
        pic: i14,
    },
].map((item) => Object.assign(item, projects.find((a) => a.slug === item.slug)));

const allClients = clients1.concat(clients2);

class ClientsGrid extends Component {
    constructor(props) {
        super(props);

        this.handleVisibilityChange = (isVisible) => {
            if (isVisible) {
                this.start();
            } else {
                this.stop();
            }
        };

        this.state = {
            top: 5,
            bottom: 6,
            moving: false,
            openedIndex: null,
        };

        this.close = () => this.setState({ openedIndex: null });
    }

    componentDidMount() {
        this.start();
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
        default:
            //
        }

        return result;
    }

    move() {
        const { top, bottom } = this.state;

        this.setState({
            top: this.getIndex(top, 'right'),
            bottom: this.getIndex(bottom, 'left'),
        });
    }

    stop() {
        this.setState({ moving: false });

        clearInterval(this.moveInterval);
    }

    start() {
        this.setState({
            top: 5,
            bottom: 6,
        });

        setTimeout(() => {
            this.setState({ moving: true });

            this.move();
        }, 100);

        this.moveInterval = setInterval(() => {
            this.move();
        }, 10000);
    }

    render() {
        const self = this;
        const { openedIndex, moving } = this.state;
        const { className, headerCls } = this.props;

        return (
            <PageVisibility onChange={this.handleVisibilityChange}>
                <>
                    <div
                        className={cn({
                            [styles.ClientsGrid]: true,
                            section: true,
                            [className]: true,
                            [styles.moving]: moving,
                        })}
                    >
                        <div
                            className={cn({
                                'general-header': true,
                                [headerCls]: true,
                            })}
                        >
                            НАШИ ПРОЕКТЫ
                        </div>
                        <div className={cn({ [styles.wrapper]: true })}>
                            {clients1.map((client, index) => (
                                <div
                                    key={index}
                                    className={cn({
                                        [styles.client]: true,
                                        [styles.center]: index === self.state.top,
                                        [styles.left]: index === self.getIndex(self.state.top, 'left'),
                                        [styles.right]: index === self.getIndex(self.state.top, 'right'),
                                        [styles.superleft]: index === self.getIndex(self.state.top, 'left', true),
                                        [styles.superright]: index === self.getIndex(self.state.top, 'right', true),
                                    })}
                                    onClick={() => this.setState({ openedIndex: index })}
                                    role="button"
                                    tabIndex="-1"
                                >
                                    <img src={client.pic} className={cn({ [styles.pic]: true })} />
                                    <div
                                        className={cn({ [styles.overflow]: true })}
                                    >
                                        <span className={cn({ [styles.title]: true })}>{client.title}</span>
                                        <ul className={cn({ [styles.text]: true })}>
                                            {client.items.map((listItem) => <li className={cn({ [styles['text-item']]: true })}>{listItem}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={cn({ [styles.wrapper]: true })}>
                            {clients2.map((client, index) => (
                                <div
                                    key={index}
                                    className={cn({
                                        [styles.client]: true,
                                        [styles.center]: index === self.state.bottom,
                                        [styles.left]: index === self.getIndex(self.state.bottom, 'left'),
                                        [styles.right]: index === self.getIndex(self.state.bottom, 'right'),
                                        [styles.superleft]: index === self.getIndex(self.state.bottom, 'left', true),
                                        [styles.superright]: index === self.getIndex(self.state.bottom, 'right', true),
                                    })}
                                    onClick={() => this.setState({ openedIndex: index })}
                                    role="button"
                                    tabIndex="-1"
                                >
                                    <img src={client.pic} className={cn({ [styles.pic]: true })} />
                                    <div
                                        className={cn({ [styles.overflow]: true })}
                                    >
                                        <span className={cn({ [styles.title]: true })}>{client.title}</span>
                                        <ul className={cn({ [styles.text]: true })}>
                                            {client.items.map((listItem) => <li className={cn({ [styles['text-item']]: true })}>{listItem}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <ProjectDialog
                        isOpened={openedIndex !== null}
                        onClose={this.close}
                        data={allClients[openedIndex || 0]}
                    />
                </>
            </PageVisibility>
        );
    }
}

export default ClientsGrid;
