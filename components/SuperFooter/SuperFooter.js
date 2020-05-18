import React, { Component } from "react";
import cn from "classnames";
import styles from "./SuperFooter.module.scss";

import tel from "./Телефон.png";
import car from "./Машина.png";
import design from "./Дизайнер.png";

import vk from "./vk.png";
import inst from "./inst.png";
import gl from "./gl.png";

import mail from "./Почта.png";
import time from "./Часы.png";

const socialIconSize = "30px";
const iconSize = "45px";

const rabotniki = [
	{
		icon: tel,
		position: "Менеджер по заказам",
		tel1: (
			<React.Fragment>
				7 978 <b>079 09 79</b>
			</React.Fragment>
		),
		tel2: "+79780790979",
		side: "left"
	},
	{
		icon: car,
		position: "Логистика",
		tel1: (
			<React.Fragment>
				7 978 <b>823 51 37</b>
			</React.Fragment>
		),
		tel2: "+79788235137",
		side: "center"
	},
	{
		icon: design,
		position: "Дизайнер",
		tel1: (
			<React.Fragment>
				7 978 <b>590 51 56</b>
			</React.Fragment>
		),
		tel2: "+79785905156",
		side: "right"
	}
];

class SuperFooter extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const rabotnik = (icon, position, tel1, tel2) => {
			return (
				<div className={cn({ [styles.rabotnik]: true })}>
					<img src={icon} height={iconSize} />
					<div className={cn({ [styles.info]: true })}>
						<div
							className={cn({ [styles.position]: true })}
						>{`${position}:`}</div>
						<a
							className={cn({ [styles.tel]: true })}
							itemProp="telephone"
							href={`tel:${tel2}`}
						>
							{tel1}
						</a>
					</div>
				</div>
			);
		};

		return (
			<div className={cn({ [styles.SuperFooter]: true })}>
				<div
					className={cn({ [styles.main]: true })}
					width="1200px"
					height="560px"
				>
					<div className={cn({ [styles.copyright]: true })}>
						© 2015-2020 Рекламное агенство «ТАВРИДА МЕДИА» – реклама
						в Симферополе и другие городах Крыма
					</div>

					{rabotniki.map(item => {
						return (
							<div
								className={cn({
									[styles.col]: true,
									[styles.coltop]: true,
									[styles[item.side]]: true
								})}
							>
								{rabotnik(
									item.icon,
									item.position,
									item.tel1,
									item.tel2
								)}
							</div>
						);
					})}

					<div
						className={cn({
							[styles.col]: true,
							[styles.left]: true,
							[styles.colbottom]: true,
							[styles.mail]: true
						})}
					>
						<img src={mail} height={iconSize}></img>
						<a target="_blank" href="mailto:tavrida.media@mail.ru">
							<span>tavrida.media@mail.ru</span>
							<div className={cn({ [styles.txt]: true })}>
								Подписаться на рассылку
							</div>
						</a>
					</div>

					<div
						className={cn({
							[styles.col]: true,
							[styles.center]: true,
							[styles.colbottom]: true,
							[styles.time]: true
						})}
					>
						<img src={time} height={iconSize}></img>
						<span className={cn({ [styles.text]: true })}>
							10:00 - 19:00 / Пн-Пт
						</span>
					</div>

					<div
						className={cn({
							[styles.col]: true,
							[styles.right]: true,
							[styles.colbottom]: true,
							[styles.callback]: true
						})}
					>
						<button className={cn({ [styles.btn]: true })}>
							ПЕРЕЗВОНИТЕ МНЕ
						</button>
					</div>

					<div
						className={cn({ [styles.social]: true })}
						id="social-links"
					>
						<span className={cn({ [styles.text]: true })}>
							Следите за нами в:
						</span>
						<div className={cn({ [styles.icons]: true })}>
							<a
								className={cn({ [styles.icon]: true })}
								itemProp="sameAs"
								href="https://www.instagram.com/tavridamedia"
							>
								<img
									src={inst}
									width={socialIconSize}
									height={socialIconSize}
								/>
							</a>
							<a
								className={cn({ [styles.icon]: true })}
								itemProp="sameAs"
								href="https://vk.com/tavrida.media"
							>
								<img
									src={vk}
									width={socialIconSize}
									height={socialIconSize}
								/>
							</a>
							<a
								className={cn({ [styles.icon]: true })}
								itemProp="sameAs"
								href="https://vk.com/tavrida.media"
							>
								<img
									src={gl}
									width={socialIconSize}
									height={socialIconSize}
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SuperFooter;
