import React, { Component } from "react";
import cn from "classnames";
import styles from "./ProductsSlider.module.scss";

import Toggle from "./../Toggle";

import { services as outdoorServices } from "./../../pages/uslugi/outdoor";
import { services as polygraphyServices } from "./../../pages/uslugi/polygraphy";
import { services as suvenirkaServices } from "./../../pages/uslugi/suvenirka";

const services = [];

for (let i = 0; i < 6; i++) {
	services.push(outdoorServices[i]);
	services.push(polygraphyServices[i]);
	services.push(suvenirkaServices[i]);
}

class ProductsSlider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			index: 0
		};
	}

	componentDidMount() {
		this.srartInterval();
	}

	srartInterval(side) {
		if (this.interval) {
			clearInterval(this.interval);
		}

		if (side === "left") {
			this.interval = setInterval(this.goLeft.bind(this), 2000);
		} else {
			this.interval = setInterval(this.goRight.bind(this), 2000);
		}
	}

	getLeft(index, diff) {
		let result = index - diff;

		if (result < 0) {
			result = services.length + result;
		}

		return result;
	}

	getRight(index, diff) {
		let result = index + diff;

		if (result >= services.length) {
			result = result - services.length;
		}

		return result;
	}

	goLeft() {
		this.setState({
			index: this.getLeft(this.state.index, 1)
		});

		this.srartInterval("left");
	}

	goRight() {
		this.setState({
			index: this.getRight(this.state.index, 1)
		});

		this.srartInterval("right");
	}

	render() {
		const state = this.state.index;
		const self = this;

		return (
			<div className={`${cn({ [styles.ProductsSlider]: true })} section`}>
				<div className="general-header">{this.props.label || ""}</div>
				<div className={cn({ [styles.services]: true })}>
					{services.map((service, index) => {
						let cls = cn({ [styles.service]: true });
						if (state === self.getLeft(index, 2)) {
							cls = cn(
								cls,
								cn({
									[styles.postright]: true,
									[styles.visible]: true
								})
							);
						}
						if (state === self.getLeft(index, 1)) {
							cls = cn(
								cls,
								cn({
									[styles.right]: true,
									[styles.visible]: true
								})
							);
						}
						if (state === index) {
							cls = cn(
								cls,
								cn({
									[styles.center]: true,
									[styles.visible]: true
								})
							);
						}
						if (state === self.getRight(index, 1)) {
							cls = cn(
								cls,
								cn({
									[styles.left]: true,
									[styles.visible]: true
								})
							);
						}
						if (state === self.getRight(index, 2)) {
							cls = cn(
								cls,
								cn({
									[styles.preleft]: true,
									[styles.visible]: true
								})
							);
						}

						return (
							<div className={cls} key={index}>
								<img src={service.pic}></img>
								<span
									className={cn({ [styles.name]: true })}
									style={{
										color:
											this.props.textColor ||
											"var(--main-header-color)"
									}}
								>
									{service.name.toUpperCase()}
								</span>
							</div>
						);
					})}
				</div>
				<div className={cn({ [styles.toggles]: true })}>
					<Toggle
						side="left"
						onClick={() => this.goLeft()}
					/>
					<Toggle
						side="right"
						onClick={() => this.goRight()}
					/>
				</div>
			</div>
		);
	}
}

export default ProductsSlider;
