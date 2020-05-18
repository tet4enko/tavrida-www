import React from "react";
import App from "next/app";

import "./_app.scss";

import "./../node_modules/react-image-gallery/styles/scss/image-gallery.scss";

import Header from "./../components/Header/Header";
import SuperFooter from "./../components/SuperFooter/SuperFooter";

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<React.Fragment>
				<Header general={this.props.router.route === "/"} />
				<Component {...pageProps} />
				<SuperFooter />
			</React.Fragment>
		);
	}
}
