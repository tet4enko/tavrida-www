import React from "react";

import ServiceCaption from "./../../../components/ServiceCaption/ServiceCaption.js";
import ServicesSlider from "./../../../components/ServicesSlider/ServicesSlider.js";
import ServiceList from "./../../../components/ServiceList/ServiceList.js";

import styles from "./index.module.scss";
import cn from "classnames";

import vizitki from "./pics/1.png";
import flaera from "./pics/2.png";
import plenka from "./pics/3.png";
import cards from "./pics/4.png";
import calendars from "./pics/5.png";
import notedaps from "./pics/6.png";
import paketi from "./pics/7.png";
import upakovki from "./pics/8.png";

const loremIpsum =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";

const services = [
	{
		name: "Визитки",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: vizitki
	},
	{
		name: "Флаера и листовки",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: flaera
	},
	{
		name: "Печать на пленке",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: plenka
	},
	{
		name: "Пластиковые карты",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: cards
	},
	{
		name: "Календари",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: calendars
	},
	{
		name: "Блокноты",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: notedaps
	},
	{
		name: "Пакеты",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: paketi
	},
	{
		name: "Упаковки",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: upakovki
	}
];

const component = () => {
	return (
		<div
			className={cn({
				[styles.Polygraphy]: true,
				"page-wrapper": true,
				"page-content": true,
				"service-page-type-1": true
			})}
		>
			<ServiceCaption caption="полиграфия" description="" />
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
