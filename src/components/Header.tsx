import * as React from "react";
import {Component} from "react";

export class Header extends Component {
  public render() {
    return (
      <div className="header">
        <img src={"../images/mindflo.png"} alt="mindflo" />
        <a href="#">MENU +</a>
      </div>
    );
  }
}

export default Header;
