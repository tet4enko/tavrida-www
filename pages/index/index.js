import React from 'react';
import cn from 'classnames';
import ImageGallery from 'react-image-gallery';

// import MainSlider from './MainSlider/MainSlider.js';
import ServicesGrid from './ServicesGrid/ServicesGrid';
import Blablabla from './Blablabla/Blablabla';
import Smm from './Smm/Smm';
import Calc from './Calc/Calc';
import Zamer from '../../components/Zamer/Zamer';
import ProductsSlider from '../../components/ProductsSlider/ProductsSlider';
import ClientsGrid from '../../components/ClientsGrid/ClientsGrid';
import Socials from './Socials';

import slide1 from './pics/1.png';
import slide2 from './pics/2.png';
import slide3 from './pics/3.png';
import slide4 from './pics/4.png';
import slide5 from './pics/5.png';
import slide6 from './pics/6.png';

import styles from './index.module.scss';

const mainSliderImages = [
    {
        original: slide1,
        thumbnail: slide1,
        bulletClass: cn({ [styles.bullet]: true }),
    },
    {
        original: slide2,
        thumbnail: slide2,
        bulletClass: cn({ [styles.bullet]: true }),
    },
    {
        original: slide3,
        thumbnail: slide3,
        bulletClass: cn({ [styles.bullet]: true }),
    },
    {
        original: slide4,
        thumbnail: slide4,
        bulletClass: cn({ [styles.bullet]: true }),
    },
    {
        original: slide5,
        thumbnail: slide5,
        bulletClass: cn({ [styles.bullet]: true }),
    },
    {
        original: slide6,
        thumbnail: slide6,
        bulletClass: cn({ [styles.bullet]: true }),
    },
];

export default () => (
    <div className={cn({ [styles.General]: true })}>
        <div className={cn({ [styles['main-gallery-wrapper']]: true })}>
            <ImageGallery
                items={mainSliderImages}
                autoPlay
                showPlayButton={false}
                showThumbnails={false}
                showNav={false}
                showBullets
                showFullscreenButton={false}
            />
        </div>
        <ServicesGrid />
        <Zamer />
        <ProductsSlider label="УЗНАЙ О РЕКЛАМЕ БОЛЬШЕ" />
        <Smm />
        <Calc />
        <Blablabla />
        <ClientsGrid />
        <Socials />
    </div>
);
