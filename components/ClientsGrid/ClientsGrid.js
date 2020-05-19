import React, { Component } from "react";
import cn from "classnames";
import styles from "./ClientsGrid.module.scss";

const clientsCount = 10;

import i1 from "./pics/1.jpg";
import i2 from "./pics/2.jpg";
import i3 from "./pics/3.jpg";
import i4 from "./pics/4.jpg";
import i5 from "./pics/5.jpg";
import i6 from "./pics/6.jpg";
import i7 from "./pics/7.jpg";
import i8 from "./pics/8.jpg";
import i9 from "./pics/9.jpg";
import i10 from "./pics/10.jpg";

const clients = [i1, i2, i3, i4, i5, i6, i7, i7, i8, i9, i10];

class ClientsGrid extends Component {
	constructor(props) {
		super(props);

		this.state = {
			positions: [...Array(clientsCount).keys()],
			visible: true
		};
	}

	componentDidMount() {
		const self = this;
		setInterval(() => {
			self.setState({
				visible: false
			});

			setTimeout(() => {
				self.setState({
					visible: true,
					positions: self.state.positions.sort(
						() => Math.random() - 0.5
					)
				});
			}, 300);
		}, 5000);
	}

	render() {
		return (
			<div
				className={cn({
					[styles.ClientsGrid]: true,
					section: true,
					"page-content": true,
					[this.props.className]: true
				})}
			>
				<div
					className={cn({
						"general-header": true,
						[this.props.headerCls]: true
					})}
				>
					НАШИ ПРОЕКТЫ
				</div>
				<div
					className={cn({
						[styles.grid]: true,
						[styles.visible]: this.state.visible
					})}
				>
					{this.state.positions.slice(0, 9).map((client, i) => (
						<img
							key={i}
							className={cn({
								[styles.client]: true
							})}
							src={clients[client]}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default ClientsGrid;
