import React, { Component, Fragment } from "react";

import Header from "./Header/Header";
import Content from "./Content/Content";
import FormDialog from "../UI/FormDialog/FormDialog";

class Layout extends Component {
	render() {
		return (
			<Fragment>
				<Header></Header>
				<Content></Content>
				<FormDialog></FormDialog>
			</Fragment>
		);
	}
}

export default Layout;