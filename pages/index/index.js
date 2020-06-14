import React from 'react';

import MainSlider from './MainSlider/MainSlider.js';
import ServicesGrid from './ServicesGrid/ServicesGrid.js';
import Blablabla from './Blablabla/Blablabla.js';
import Order from './Order/Order.js';
import Smm from './Smm/Smm.js';
import Calc from './Calc/Calc.js';
import Zamer from '../../components/Zamer/Zamer';
import ProductsSlider from '../../components/ProductsSlider/ProductsSlider.js';
import ClientsGrid from '../../components/ClientsGrid/ClientsGrid.js';

import styles from './index.module.scss';

export default () => (
    <div className="General">
        <MainSlider />
        <ServicesGrid />
        <Zamer />
        <ProductsSlider label="УЗНАЙ О РЕКЛАМЕ БОЛЬШЕ" />
        <Smm />
        <Calc />
        <Blablabla />
        <ClientsGrid />
        <Order />
    </div>
);
