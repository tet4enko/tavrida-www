import React from "react";

import ServiceCaption from "./../../../components/ServiceCaption/ServiceCaption.js";
import ServicesSlider from "./../../../components/ServicesSlider/ServicesSlider.js";
import ServiceList from "./../../../components/ServiceList/ServiceList.js";
import Zamer from "./../../../components/Zamer/Zamer.js";

import styles from "./index.module.scss";
import cn from "classnames";

import lightbox from "./pics/1.png";
import liters from "./pics/2.png";
import banner from "./pics/3.png";
import plenka from "./pics/4.png";
import auto from "./pics/5.png";
import wall from "./pics/6.png";
import shtender from "./pics/7.png";

const loremIpsum =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";

const services = [
	{
		name: "Лайтбокс",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: lightbox
	},
	{
		name: "Световые буквы",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: liters
	},
	{
		name: "Баннер",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: banner
	},
	{
		name: "Пленка",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: plenka
	},
	{
		name: "Брендирование авто",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: auto
	},
	{
		name: "Бренд-волл",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: wall
	},
	{
		name: "Штендер",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: shtender
	}
];

const component = () => {
	return (
		<div
			className={cn({
				[styles.Outdoor]: true,
				"page-wrapper": true,
				"page-content": true,
				"service-page-type-1": true
			})}
		>
			<ServiceCaption
				caption="наружная реклама"
				description={
					<React.Fragment>
						Важно помнить, что <b>наружная реклама</b> является
						одним из наиболее эффективных методов привлечения
						клиентов.
					</React.Fragment>
				}
			/>
			<ServicesSlider services={services} />
			<Zamer />
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
