import React from "react";
import cn from "classnames";
import styles from "./ServiceList.module.scss";

export default props => {
	return (
		<div className={`${cn({ [styles.ServiceList]: true })} section`}>
			<h2 className={cn({ [styles.caption]: true })}>
				НЕМНОГО О ГЛАВНОМ
			</h2>
			<ol style={{ padding: 0, margin: 0 }}>
				{props.services.map((service, i) => {
					return (
						<li className={cn({ [styles.service]: true })} key={i}>
							<div className={cn({ [styles.left]: true })}>
								<div className={cn({ [styles.wrapper]: true })}>
									<div
										className={cn({ [styles.name]: true })}
									>
										{service.name}
									</div>
									<div
										className={cn({ [styles.text]: true })}
									>
										{service.longText}
									</div>
								</div>
							</div>
							<div className={cn({ [styles.right]: true })}>
								<div
									className={cn({
										[styles["pic-wrapper"]]: true
									})}
								>
									<img
										className={cn({ [styles.pic]: true })}
										src={service.pic}
									/>
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
						</li>
					);
				})}
			</ol>
		</div>
	);
};
