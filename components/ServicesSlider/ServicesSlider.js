import React from "react";
import cn from "classnames";
import styles from "./ServicesSlider.module.scss";

import Toggle from "./../Toggle";

let interval;

export default props => {
	const services = props.services;
	const [index, setIndex] = React.useState(2);
	const [isVisile, setVisibility] = React.useState(true);

	const getNextIndex = (index_, side = "right") => {
		let result;

		if (side === "right") {
			result = index_ + 1;
			if (result >= services.length) {
				result = 0;
			}
		} else {
			result = index_ - 1;
			if (result === -1) {
				result = services.length - 1;
			}
		}

		return result;
	};

	const toggle = (side = "right") => {
		setVisibility(false);

		setTimeout(() => {
			setIndex(getNextIndex(index, side));
			setVisibility(true);
		}, 200);
	};

	React.useEffect(() => {
		clearInterval(interval);
		interval = setInterval(toggle, 7000);
	}, [index, toggle]);

	return (
		<div className={cn({ [styles.ServicesSlider]: true })}>
			<div className={cn({ [styles.left]: true })}>
				<div
					className={cn({
						[styles["left-content"]]: true,
						[styles.animate]: true,
						[styles.invisible]: !isVisile
					})}
				>
					<div className={cn({ [styles.name]: true })}>
						{services[index].name}
					</div>
					<div className={cn({ [styles.text]: true })}>
						{services[index].shortText}
					</div>
					<div className={cn({ [styles.buttons]: true })}>
						<button
							className={cn({
								[styles.get_price]: true,
								[styles.btn]: true
							})}
						>
							УЗНАТЬ ЦЕНУ
						</button>
						<button
							className={cn({
								[styles.order]: true,
								[styles.btn]: true
							})}
						>
							ЗАКАЗАТЬ
						</button>
					</div>
				</div>
			</div>
			<div className={cn({ [styles.right]: true })}>
				<div
					className={cn({
						[styles["img-wrapper"]]: true,
						[styles.animate]: true,
						[styles.invisible]: !isVisile
					})}
				>
					<img src={services[index].pic} />
				</div>
				<div className={cn({ [styles.toggle_slide]: true })}>
					<Toggle side="left" onClick={() => toggle("left")} />
					<Toggle side="right" onClick={() => toggle()} />
				</div>
			</div>
		</div>
	);
};
