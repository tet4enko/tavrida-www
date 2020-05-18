import React, { Component } from "react";
import cn from "classnames";
import styles from "./ClientsGrid.module.scss";

const clientsCount = 10;
const clients = [];

// for (let i = 1; i <= clientsCount; i++) {
// 	clients.push(require(`./pics/${i}.jpg`));
// }

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
						visible: this.state.visible
					})}
				>
					{this.state.positions.slice(0, 9).map(client => (
						<img
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
