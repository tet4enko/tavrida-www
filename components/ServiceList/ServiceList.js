/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import styles from './ServiceList.module.scss';

import { pageSetIsOrderInViewport as pageSetIsOrderInViewportAction } from '../../redux/actions/page';

const component = ({ services, pageSetIsOrderInViewport }) => (
    <div className={`${cn({ [styles.ServiceList]: true })} section`}>
        <h2 className={cn({ [styles.caption]: true })}>
            НЕМНОГО О ГЛАВНОМ
        </h2>
        <ol style={{ padding: 0, margin: 0 }}>
            {services.map((service, i) => (
                <li className={cn({ [styles.service]: true })} key={i}>
                    <a className={cn({ [styles.anchor]: true })} name={service.slug} />
                    <div className={cn({ [styles.left]: true })}>
                        <div className={cn({ [styles.wrapper]: true })}>
                            <div
                                className={cn({ [styles.name]: true })}
                            >
                                {service.name}
                            </div>
                            <div
                                className={cn({ [styles.text]: true })}
                            >
                                {service.longText}
                            </div>
                        </div>
                    </div>
                    <div className={cn({ [styles.right]: true })}>
                        <div
                            className={cn({
                                [styles['pic-wrapper']]: true,
                            })}
                        >
                            <img
                                className={cn({ [styles.pic]: true })}
                                src={service.pic}
                            />
                        </div>
                        <div className={cn({ [styles.buttons]: true })}>
                            <button
                                type="button"
                                className={cn({
                                    [styles.get_price]: true,
                                    [styles.btn]: true,
                                })}
                            >
                                УЗНАТЬ ЦЕНУ
                            </button>
                            <button
                                type="button"
                                className={cn({
                                    [styles.order]: true,
                                    [styles.btn]: true,
                                })}
                                onClick={() => { pageSetIsOrderInViewport(true); }}
                            >
                                ЗАКАЗАТЬ
                            </button>
                        </div>
                    </div>
                </li>
            ))}
        </ol>
    </div>
);

export default connect(null, {
    pageSetIsOrderInViewport: pageSetIsOrderInViewportAction,
})(component);
