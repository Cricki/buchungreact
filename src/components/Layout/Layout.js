import React, { Component, Fragment } from "react";

import Header from "./Header/Header";
import Content from "../../container/Content/Content";

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Content />
      </Fragment>
    );
  }
}

export default Layout;
