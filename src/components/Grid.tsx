import * as React from "react";
import {Component} from "react";
import GridColumn from "./GridColumn";

export class Grid extends Component {
  public render() {
    return (
      <div className="grid">
        <GridColumn />
      </div>
    );
  }
}

export default Grid;
