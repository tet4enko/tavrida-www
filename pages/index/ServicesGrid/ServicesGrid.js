import React, { Component } from "react";
import cn from "classnames";
import styles from "./ServicesGrid.module.scss";

const images = [];
const hoveredImages = [];

// for (let i = 1; i <= 7; i++) {
// 	images.push(require(`./img/${i}.png`));
// }

// for (let i = 1; i <= 7; i++) {
// 	hoveredImages.push(require(`./img/hover/${i}.png`));
// }

const line1 = [
	{ label: "НАРУЖНАЯ РЕКЛАМА", color: "orange", img: 1 },
	{ label: "ПОЛИГРАФИЯ", color: "blue", img: 2 },
	{ label: "СУВЕРИНРНАЯ ПРОДУКЦИЯ", color: "yellow", img: 3 },
	{ label: "КЛИНИНГ РЕКЛАМНЫХ КОНСТРУКЦИЙ", color: "orange", img: 4 }
];

const line2 = [
	{ label: "SMM и МАРКЕТИНГ", color: "blue", img: 5 },
	{ label: "РАЗРАБОТКА САЙТОВ", color: "yellow", img: 6 },
	{ label: "ДИЗАЙН", color: "orange", img: 7 }
];

class ServicesGrid extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hovered: null
		};
	}

	render() {
		const _self = this;

		const gridItem = data => {
			return (
				<div
					className="item"
					onMouseOver={() => _self.setState({ hovered: data.img })}
					onMouseOut={() => _self.setState({ hovered: null })}
				>
					<img
						src={
							_self.state.hovered === data.img
								? hoveredImages[data.img - 1]
								: images[data.img - 1]
						}
					></img>
					<div className="label">
						<span className={`point ${data.color}`}></span>
						{data.label}
					</div>
				</div>
			);
		};

		return (
			<div
				className={cn({
					[styles.ServicesGrid]: true,
					section: true,
					"page-content": true
				})}
			>
				<div className={cn({ "general-header": true })}>
					УСЛУГИ НАШЕГО РЕКЛАМНОГО АГЕНТСТВА
				</div>
				<div className={cn({ [styles.lines]: true })}>
					<div className={cn({ [styles.line]: true })}>
						{line1.map(gridItem)}
					</div>
					<div className={cn({ [styles.line]: true })}>
						{line2.map(gridItem)}
					</div>
				</div>
			</div>
		);
	}
}

export default ServicesGrid;
