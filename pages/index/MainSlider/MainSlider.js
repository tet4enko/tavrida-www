import React, { Component } from "react";
import cn from "classnames";
import styles from "./MainSlider.module.scss";

import pic1 from "./1.png";
import pic2 from "./2.png";
import pic3 from "./3.png";
const pics = [pic1, pic2, pic3];

const slides = [
	{
		top: ["СЛОЖНЫЕ ЗАДАЧИ", "ПРОСТЫЕ РЕШЕНИЕ"],
		bottom: [
			"Поверьте, наши специалисты без труда",
			"справятся с любыми задачами и найдут",
			"индивидуальный и экстраординарный подход,",
			"исходя именно из ваших потребностей!"
		]
	},
	{
		top: ["КОМПЛЕКСНЫЕ", "РЕКЛАМНЫЕ КАМПАНИИ"],
		bottom: [
			"Доверьтесь многолетнему опыту наших",
			"специалистов, и они составят целый комплекс",
			"выполняемых услух и мероприятий для увеличения",
			"продаж и медийности вашего бизнеса!"
		]
	},
	{
		top: ["ОТ КОНЦЕПЦИИ", "ДО РЕАЛИЗАЦИИ"],
		bottom: [
			"Мы сопроводим вас на всех этапах",
			"вашей рекламной кампании.",
			"Эффективность наших рекламных",
			"инструментов поразит вас!"
		]
	}
];

class MainSlider extends Component {
	constructor(props) {
		super(props);

		this.slideTimeout = 5000;

		const getRandomInt = (min, max) => {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		};

		this.state = {
			slide: getRandomInt(1, slides.length)
		};
	}

	componentDidMount() {
		setTimeout(this.nextSlide.bind(this), this.slideTimeout);
	}

	nextSlide() {
		const self = this;
		let nextSlide = self.state.slide + 1;
		if (nextSlide > slides.length) {
			nextSlide = 1;
		}
		this.setState({ slide: 0 });

		setTimeout(() => {
			self.setState({ slide: nextSlide });

			setTimeout(self.nextSlide.bind(self), self.slideTimeout);
		}, 300);
	}

	render() {
		return (
			<div className={cn({ [styles.MainSlider]: true })}>
				<div className={cn({ [styles.background]: true })}>
					{slides.map((slide, index) => {
						return (
							<img
								className={cn({
									[styles.img]: true,
									[styles[`img${index + 1}`]]: true,
									[styles.visible]:
										this.state.slide === index + 1
								})}
								src={pics[index]}
								key={index}
							/>
						);
					})}
					{slides.map((slide, index) => {
						return (
							<div
								className={cn({
									[styles.text]: true,
									[styles.visible]:
										this.state.slide === index + 1
								})}
								key={index}
							>
								<div className={cn({ [styles.top]: true })}>
									{slide.top.map((line, i) => (
										<div
											className={cn({
												[styles.line]: true
											})}
											key={i}
										>
											{line}
										</div>
									))}
								</div>
								<div className={cn({ [styles.bottom]: true })}>
									{slide.bottom.map((line, i) => (
										<div
											className={cn({
												[styles.item]: true
											})}
											key={i}
										>
											{line}
										</div>
									))}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default MainSlider;
