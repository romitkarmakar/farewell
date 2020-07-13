import React from "react";
import Navbar from "./navbar";

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default Layout;
