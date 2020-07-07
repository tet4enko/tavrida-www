import React from 'react';

import cn from 'classnames';
import ServiceCaption from '../../../components/ServiceCaption/ServiceCaption';
import ServicesSlider from '../../../components/ServicesSlider/ServicesSlider';
import ServiceList from '../../../components/ServiceList/ServiceList';

import styles from './index.module.scss';

import futbolki from './pics/1.png';
import chehli from './pics/2.png';
import krujki from './pics/3.png';
import beisbolki from './pics/4.png';
import rukzaki from './pics/5.png';
import fleshki from './pics/6.png';
import ruchki from './pics/7.png';

const services = [
    {
        name: 'Футболки и поло',
        shortText: 'Закажи футболку со своим принтом, надписью или логотипом в Симферополе. Выбери правильный способ выделиться!',
        longText:
            `Принт на футболках актуален для многих компаний, предпринимателей,
            частных лиц, организаций. Заказывая футболки с логотипом  вашей компании
            вы получаете сразу несколько приемуществ:
			Высокое качество нанесения;
			Различные способы нанесения принта ( Флекс,  Шелкография, Прямая печать, Сублимационная печать)
			Большой выбор различных моделей футболок под нанесение;
			Большой срок службы готового изделия.`,
        pic: futbolki,
        slug: 'tshirts',
    },
    {
        name: 'Чехлы',
        shortText: 'Именные чехлы для смартфонов стали хитом . Данные аксессуары становятся популярными среди молодых  и прогрессивных людей с отличным чувством вкуса.',
        longText:
			`Дизайнерские чехлы для телефонов в последнее время пользуются очень  высокой популярностью
            Чехлы с принтом для телефонов не только  подчеркнут твою индивидуальность, но и
            помогут сделать процесс обращения с электронным устройством более комфортным.
            В качестве исходного полотна для печати на чехлах нами используются пластиковые
            или силиконовые кейсы, на которые по желанию заказчика наносится любое, выбранное им изображение.
			В наличии есть чехлы для телефонов различных моделей.`,
        pic: chehli,
        slug: 'cases',
    },
    {
        name: 'Кружки',
        shortText: 'Печать на кружках выбирают те, кто хочет сделать не банальный, однозначно полезный подарок, которому обрадуются и друзья, и коллеги, и даже корпоративные клиенты.',
        longText:
			'Печать на кружках выбирают те, кто хочет сделать не банальный, однозначно полезный подарок, которому обрадуются и друзья, и коллеги, и даже корпоративные клиенты. Хотите удивить близкого человека? Закажите смешную или памятную надпись, картинку, или фотографию .  Коллектив, партнеры и клиенты высоко оценят корпоративный подарок в виде кружки с логотипом, она прочно осядет у них на рабочем месте, ежедневно напоминая о Вашей компании.',
        pic: krujki,
        slug: 'circles',
    },
    {
        name: 'Бейсболки',
        shortText: 'Эти изделия с нанесенным на них логотипом компании, можно дарить постоянным или потенциальным клиентам, распространять на промо-акциях или использовать в качестве элемента униформы сотрудников.',
        longText:
			'Эти изделия с нанесенным на них логотипом компании, можно дарить постоянным или потенциальным клиентам, распространять на промо-акциях, использовать в качестве элемента униформы сотрудников. Бейсболки активно используют в качестве призов, сувениров, подарков для участников презентации, розыгрыша, акции и т. д. Люди охотно носят эти изделия, что служит эффективной рекламой для компании, продукции или услуги.',
        pic: beisbolki,
        slug: 'baseballcaps',
    },
    {
        name: 'Рюкзаки и сумки',
        shortText: 'Рюкзак с надписью выделит своего обладателя из толпы своей оригинальностью. Именной рюкзак –будет являться модным аксессуаром в любое время!',
        longText:
			'Предлагаем Вашему вниманию изготовление рюкзаков с изображением на ваш выбор. Именной рюкзак станет отличным подарком. С таким рюкзаком не стыдно ходить в школу, на спортивные секции, и другие массовые мероприятия. Рюкзак с печатью выделит своего обладателя из толпы своей оригинальностью. Качество рюкзака крепкое и внушающее доверие. Именной рюкзак также отлично подходит для спортивных команд, каждый всегда с легкостью определит кому  принадлежит сумка.',
        pic: rukzaki,
        slug: 'backpacks',
    },
    {
        name: 'Флешки',
        shortText: 'Флешки с логотипом занимают серьезную нишу на рынке деловых сувениров. Их преимущество в активном повседневном применении.',
        longText:
			'Флешки с  логотипом занимают серьезную нишу на рынке деловых сувениров. Их активно используют в повседневности, и они способны оказывать благотворное воздействие на узнаваемость бренда, популярность продукции/услуг компании. USB-накопители могут различаться объемом памяти, дизайном, наличием дополнительных функций.',
        pic: fleshki,
        slug: 'usbflash',
    },
    {
        name: 'Ручки',
        shortText: 'Увидев ручку, с изображением красивого фирменного логотипа, у каждого возникнет желание взять ее в руки!',
        longText:
			'Увидев ручку, с изображением красивого фирменного логотипа или с интересной надписью, каждый захочет взять ее в руки. Именно поэтому печать логотипа на ручке стала популярным способом недорогой и эффективной рекламы. Печать на ручках может быть как в одном цвете, так и в полноцветном исполнении, для этого используется метод УФ-печати, а также тампопечати.',
        pic: ruchki,
        slug: 'pens',
    },
];

const component = () => (
    <div
        className={cn({
            [styles.Suvenirka]: true,
            'page-wrapper': true,
            'page-content': true,
            'service-page-type-1': true,
        })}
    >
        <ServiceCaption caption="сувенирная продукция" description="" />
        <ServicesSlider services={services} />
        <ServiceList services={services} />
        <div
            className={cn({
                [styles.baloon]: true,
                baloon: true,
                top: true,
            })}
        />
        <div
            className={cn({
                [styles.baloon]: true,
                baloon: true,
                bottom: true,
            })}
        />
    </div>
);

export default component;
export { component, services };
