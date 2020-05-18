import React, { Component } from "react";
import cn from "classnames";
import styles from "./index.module.scss";

import leftComp from "./pics/Комп1.png";
import rightComp from "./pics/Комп2.png";

const design = [
	{
		label: "1. Исследование",
		desc: "Анализ трендов и конкурентов, сборк и оценка данных"
	},
	{
		label: "2. Прототип",
		desc: "Проработка сценариев заказчика, поиск оптимальных решений"
	},
	{
		label: "3. Дизайн",
		desc: "Создание макета, доработка всех деталей, подготовка к верстке"
	}
];

const code = [
	{
		label: "1. Архитектура сайта",
		desc:
			"Системный архитектор продумывет архитектуру сайта и учтывает все нюансы"
	},
	{
		label: "2. Программирование",
		desc:
			"Программист свяжет компоненты  и модули в единый, четко отлаженный механизм"
	},
	{
		label: "3. Тестирование",
		desc:
			"Чтобы сайт был идеальным тестировщик проверит все ли учтено в его реализации"
	}
];

class WebSlider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			position: "normal"
		};
	}

	render() {
		const position = this.state.position.split(" ");
		const classes = {
			[styles.WebSlider]: true,
			[styles[position[0]]]: true
		};

		if (position.length > 1) {
			classes[styles[position[1]]] = true;
		}
		return (
			<div className={cn(classes)}>
				<div className={cn({ [styles.left]: true })}>
					<img
						className={cn({ [styles.comp]: true })}
						src={leftComp}
					></img>
					<div className={cn({ [styles["preview-content"]]: true })}>
						<span className={cn({ [styles.label]: true })}>
							ПРЕВОСХОДНЫЙ
							<br />
							ДИЗАЙН
						</span>
						<button
							className={cn({
								[styles.btn]: true,
								[styles.more]: true
							})}
							onClick={() => {
								debugger;
								this.setState({
									position: "start start-right"
								});
								setTimeout(() => {
									this.setState({
										position: "end end-right"
									});
								}, 200);
							}}
						>
							УЗНАТЬ БОЛЬШЕ
						</button>
					</div>
					<div className={cn({ [styles["full-content"]]: true })}>
						<span className={cn({ [styles.label]: true })}>
							ПРЕВОСХОДНЫЙ
							<br />
							ДИЗАЙН
						</span>
						<ol className={cn({ [styles.items]: true })}>
							{design.map(item => (
								<li className={cn({ [styles.item]: true })}>
									<h6
										className={cn({ [styles.label]: true })}
									>
										{item.label}
									</h6>
									<p className={cn({ [styles.desc]: true })}>
										{item.desc}
									</p>
								</li>
							))}
						</ol>
						<div className={cn({ [styles.btns]: true })}>
							<button
								className={cn({
									[styles.btn]: true,
									[styles.price]: true
								})}
							>
								УЗНАТЬ ЦЕНУ
							</button>
							<button
								className={cn({
									[styles.btn]: true,
									[styles.back]: true,
									blue: true
								})}
								onClick={() => {
									this.setState({
										position: "back back-right"
									});
									setTimeout(() => {
										this.setState({
											position: "normal"
										});
									}, 220);
								}}
							>
								ВЕРНУТЬСЯ
							</button>
						</div>
					</div>
				</div>
				<div className={cn({ [styles.right]: true })}>
					<img
						className={cn({ [styles.comp]: true })}
						src={rightComp}
					></img>
					<div className={cn({ [styles["preview-content"]]: true })}>
						<span className={cn({ [styles.label]: true })}>
							ИДЕАЛЬНЫЙ
							<br />
							КОД
						</span>
						<button
							className={cn({
								[styles.btn]: true,
								[styles.more]: true,
								yellow: true
							})}
							onClick={() => {
								this.setState({ position: "start start-left" });
								setTimeout(() => {
									this.setState({ position: "end end-left" });
								}, 200);
							}}
						>
							УЗНАТЬ БОЛЬШЕ
						</button>
					</div>
					<div className={cn({ [styles["full-content"]]: true })}>
						<span className={cn({ [styles.label]: true })}>
							ИДЕАЛЬНЫЙ
							<br />
							КОД
						</span>
						<ol className={cn({ [styles.items]: true })}>
							{code.map(item => (
								<li className={cn({ [styles.item]: true })}>
									<h6
										className={cn({ [styles.label]: true })}
									>
										{item.label}
									</h6>
									<p className={cn({ [styles.desc]: true })}>
										{item.desc}
									</p>
								</li>
							))}
						</ol>
						<div className={cn({ [styles.btns]: true })}>
							<button
								className={cn({
									[styles.btn]: true,
									[styles.back]: true,
									yellow: true
								})}
								onClick={() => {
									this.setState({
										position: "back back-left"
									});
									setTimeout(() => {
										this.setState({
											position: "normal"
										});
									}, 220);
								}}
							>
								ВЕРНУТЬСЯ
							</button>
							<button
								className={cn({
									[styles.btn]: true,
									[styles.price]: true
								})}
							>
								УЗНАТЬ ЦЕНУ
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default WebSlider;
