import React from "react";

import ServiceCaption from "./../../../components/ServiceCaption/ServiceCaption.js";
import ServicesSlider from "./../../../components/ServicesSlider/ServicesSlider.js";
import ServiceList from "./../../../components/ServiceList/ServiceList.js";

import styles from "./index.module.scss";
import cn from "classnames";

import futbolki from "./pics/1.png";
import chehli from "./pics/2.png";
import krujki from "./pics/3.png";
import beisbolki from "./pics/4.png";
import rukzaki from "./pics/5.png";
import fleshki from "./pics/6.png";
import ruchki from "./pics/7.png";

const loremIpsum =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";

const services = [
	{
		name: "Футболки и поло",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: futbolki
	},
	{
		name: "Чехлы",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: chehli
	},
	{
		name: "Кружки",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: krujki
	},
	{
		name: "Бейсболки",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: beisbolki
	},
	{
		name: "Рюкзаки и сумки",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: rukzaki
	},
	{
		name: "Флешки",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: fleshki
	},
	{
		name: "Ручки",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: ruchki
	}
];

const component = () => {
	return (
		<div
			className={cn({
				[styles.Suvenirka]: true,
				"page-wrapper": true,
				"page-content": true,
				"service-page-type-1": true
			})}
		>
			<ServiceCaption caption="сувенирная продукция" description="" />
			<ServicesSlider services={services} />
			<ServiceList services={services} />
			<div
				className={cn({
					[styles.baloon]: true,
					baloon: true,
					top: true
				})}
			></div>
			<div
				className={cn({
					[styles.baloon]: true,
					baloon: true,
					bottom: true
				})}
			></div>
		</div>
	);
};

export default component;
export { component, services };
